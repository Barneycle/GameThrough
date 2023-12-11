const express = require('express');
const router = express.Router();
const User = require('./models/user');

router.post('/register', async (req, res) => {

  const { username, password } = req.body;

  console.log('Received registration request with idno:', idno);

  const existingUser = await User.findOne({ username });
  const existingEmail = await User.findOne({ email });
  const existingIdno = await User.findOne({ idno });


  if (existingUser) {

    return res.status(400).json({ message: 'Username already exists!' });

  }

  if (existingEmail) {

    return res.status(400).json({ message: 'Email Address already exists!' });

  }

  if (existingIdno) {

    return res.status(400).json({ message: 'ID Number already exists!' });

  }

  const hashedPassword = hashPassword(password);

  const newUser = new User({

    username,

    password: hashedPassword,

  });

  await newUser.save();

  res.json({ message: 'Registration successful' });

});

router.post('/login', async (req, res) => {

  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {

    return res.status(401).json({ message: 'Invalid username' });

  }

  if (!comparePasswords(password, user.password)) {

    return res.status(401).json({ message: 'Invalid password' });

  }

  const token = generateToken(user);
  res.json({ token });
  
});

module.exports = router;