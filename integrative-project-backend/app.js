const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/IntegrativeProject');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => { console.log('Connected to MongoDB'); });

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const mongoURI = 'mongodb://localhost:27017/IntegrativeProject';
const jwtSecretKey = 'your-secret-key';

app.post('/api/register', async (req, res) => {

  const {

    idno,
    firstName,
    middleName,
    lastName,
    birthday,
    age,
    address,
    username,
    email,
    password,
    confirmPassword,
    
  } = req.body;

  const isUserExists = await User.userExists(username);
  const isEmailExists = await User.emailExists(email);
  const isIdNoExists = await User.idNoExists(idno);

  if (isUserExists && isEmailExists && isIdNoExists) {

    return res.status(400).json({ message: 'Username, Email Address, and ID Number already exist!' });

  } else if (isUserExists && isEmailExists) {

    return res.status(400).json({ message: 'Username and Email Address already exist!' });

  } else if (isUserExists) {

    return res.status(400).json({ message: 'Username already exists!' });

  } else if (isEmailExists) {

    return res.status(400).json({ message: 'Email Address already exists!' });

  } else if (isIdNoExists) {

    return res.status(400).json({ message: 'ID Number already exists!' });

  }
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
       idno,
       firstName,
       middleName,
       lastName,
       age,
       birthday,
       address,
       username,
       email,
       password: hashedPassword,
       confirmPassword: hashedPassword,
    });

    await newUser.save();

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

    const token = jwt.sign({ userId: user._id, username: user.username }, 'your-secret-key',);

    res.json({ token });
  } catch (error) {
    console.error('Login failed', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/api/logout', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (user) {
      user.lastLogout = new Date();
      await user.save();
    }
    // Clear the token on the client side
    console.log('Sending response:', { message: 'Logout successful' });
    res.json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Logout failed:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.use('/api/protected-route', verifyToken);

app.get('/api/gow1', (req, res) => {
  // Logic for 'gow1' route
  res.json({ message: 'Guide for God of War (2018)' });
});

app.get('/api/gowr1', (req, res) => {
  // Logic for 'gowr1' route
  res.json({ message: 'Guide for God of War: Ragnarok' });
});

app.get('/api/botw1', (req, res) => {
  // Logic for 'botw1' route
  res.json({ message: 'Guide for Breath of the Wild' });
});


function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, jwtSecretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    req.userId = decoded.userId;
    next();
  });
}


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});