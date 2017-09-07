require('dotenv').config();

const express = require('express');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const session = require('express-session');
const mongoose = require('./server/mongoose');
const bodyParser = require('body-parser');

const config = require('./server/_config.js');
const ErrorHandler = require('./server/controllers/ErrorHandler.js');

// ===== App Setup =====
const app = express();
// Might not need bodyParser.json()
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  session({
    secret: 'supersecret',
    resave: true,
    saveUninitialized: true,
  })
);

// ===== Models =====
const Job = require('./server/models/Job.js');
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ===== Routes =====
const authRoute = require('./server/routes/authentication');
const authController = require('./server/controllers/authController');
const userController = require('./server/controllers/userController');
const userHandler = require('./server/routes/userHandler');

// ===== Server Setup =====
const PORT = process.env.PORT || 3001;

// ===== App Use Routes =====
//app.use(authRoute);
app.use('/api/v1', userHandler);

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
  res.send({ loggedIn: true });
});

app.get('/logout/', authController.logout);
// ====== Error Handler Middleware =====
app.use(ErrorHandler);

module.exports = app.listen(PORT, () => {
  console.log('API listening on port ' + PORT);
});
