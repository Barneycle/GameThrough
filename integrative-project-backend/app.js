require('dotenv').config();

const dns = require('node:dns');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user');
const Progress = require('./models/progress');
const bcrypt = require('bcryptjs');
const { SignJWT, jwtVerify } = require('jose');

dns.setDefaultResultOrder('ipv4first');

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/IntegrativeProject';
const jwtSecretKey = process.env.JWT_SECRET || 'your-secret-key';
const jwtSecret = new TextEncoder().encode(jwtSecretKey);

const frontendOrigins = (process.env.FRONTEND_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

let cached = global.__gameThroughMongoose;
if (!cached) {
  cached = global.__gameThroughMongoose = { conn: null, promise: null };
}

async function connectDb() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongoURI, {
      family: 4,
      serverSelectionTimeoutMS: 20000,
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: frontendOrigins.length > 0 ? frontendOrigins : true,
  }),
);

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

app.use(async (req, res, next) => {
  try {
    await connectDb();
    next();
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    res.status(503).json({
      message:
        'Database unavailable. In Atlas: Network Access must allow 0.0.0.0/0, and the cluster must be running.',
    });
  }
});

app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Username, email, and password are required.' });
  }

  try {
    if (await User.userExists(username)) {
      return res.status(400).json({ message: 'Username already exists!' });
    }

    if (await User.emailExists(email)) {
      return res.status(400).json({ message: 'Email address already exists!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await new User({
      username,
      email,
      password: hashedPassword,
    }).save();

    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Registration failed', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log('Invalid password');
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = await new SignJWT({
      userId: user._id.toString(),
      username: user.username,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .sign(jwtSecret);

    res.json({ token });
  } catch (error) {
    console.error('Login failed', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

async function verifyToken(req, res, next) {
  const header = req.headers.authorization;

  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = header.split(' ')[1];

  try {
    const { payload } = await jwtVerify(token, jwtSecret);
    req.userId = payload.userId;
    next();
  } catch {
    return res.status(401).json({ message: 'Failed to authenticate token' });
  }
}

function groupProgress(docs) {
  const progress = {};

  for (const doc of docs) {
    if (!progress[doc.gameId]) {
      progress[doc.gameId] = {};
    }

    progress[doc.gameId][doc.chapterSlug] = {
      completedObjectives: doc.completedObjectives,
      chapterCompleted: doc.chapterCompleted,
    };
  }

  return progress;
}

app.post('/api/logout', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (user) {
      user.lastLogout = new Date();
      await user.save();
    }
    res.json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Logout failed:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api/progress', verifyToken, async (req, res) => {
  try {
    const docs = await Progress.find({ userId: req.userId });
    res.json({ progress: groupProgress(docs) });
  } catch (error) {
    console.error('Load progress failed:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.put('/api/progress', verifyToken, async (req, res) => {
  const { gameId, chapterSlug, completedObjectives, chapterCompleted } = req.body;

  if (!gameId || !chapterSlug) {
    return res.status(400).json({ message: 'gameId and chapterSlug are required' });
  }

  try {
    await Progress.findOneAndUpdate(
      { userId: req.userId, gameId, chapterSlug },
      {
        completedObjectives: Array.isArray(completedObjectives) ? completedObjectives : [],
        chapterCompleted: Boolean(chapterCompleted),
      },
      { upsert: true, new: true },
    );

    const docs = await Progress.find({ userId: req.userId });
    res.json({ progress: groupProgress(docs) });
  } catch (error) {
    console.error('Save progress failed:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.use((error, req, res, next) => {
  console.error('Unhandled API error:', error);
  if (res.headersSent) {
    return next(error);
  }
  res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;