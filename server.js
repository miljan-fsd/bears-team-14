require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const path = require('path');
const session = require('express-session');

const mongoose = require('./server/mongoose');

const config = require('./server/_config.js');
const ErrorHandler = require('./server/controllers/ErrorHandler.js');
const User = mongoose.model('User');

// ===== App Setup =====
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(
  session({
    secret: 'supersecret',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ===== Routes =====
const authController = require('./server/controllers/authController');
const userController = require('./server/controllers/userController');
const jobRoutes = require('./server/routes/jobs');
const userRoutes = require('./server/routes/users');

// ===== Server Setup =====
const PORT = process.env.PORT || 3001;

// ===== App Use Routes =====
app.use('/api/v1', jobRoutes);
app.use('/api/v1', userRoutes);

app.get('/test-login/', authController.isLoggedIn, (req, res) => {
  res.send(`Logged in as ${req.user.username}`);
});

app.post(
  '/register/',
  userController.register,
  authController.login,
  (req, res) => {
    res.json({ loggedIn: true });
  }
);

app.post('/login/', authController.login, (req, res) => {
  res.send({
    loggedIn: true,
    isAdmin: req.user.isAdmin,
    username: req.user.username,
  });
});

app.get('/logout/', authController.logout);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// ====== Error Handler Middleware =====
app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log('API listening on port ' + PORT);
});

module.exports = app;
