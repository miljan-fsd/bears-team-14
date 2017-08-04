require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./server/_config.js');
const ErrorHandler = require('./server/controllers/ErrorHandler.js');

// ===== App Setup =====
const app = express();
// Might not need bodyParser.json()
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// ===== Models =====
const Job = require('./server/models/Job.js');

// ===== Routes =====
const authRoute = require('./server/routes/authentication');
const userHandler = require('./server/routes/userHandler');

// ===== Mongoose Setup =====
mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoURI[app.settings.env], {
    useMongoClient: true,
  })
  .then(
    () => {
      console.log(
        'Connected to Database: ' + config.mongoURI[app.settings.env]
      );
    },
    err => {
      console.log('Error connecting to the Database. ' + err);
    }
  );

// ===== Server Setup =====
const PORT = process.env.PORT || 3001;

// ===== App Use Routes =====
//app.use(authRoute);
app.use('/api/v1', userHandler);

// ====== Error Handler Middleware =====
app.use(ErrorHandler);

module.exports = app.listen(PORT, () => {
  console.log('API listening on port ' + PORT);
});
