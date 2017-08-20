const express = require('express');
const bodyParser = require('body-parser');

const ErrorHandler = require('./controllers/ErrorHandler.js');

// ===== App Setup =====
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// ===== Routes =====
const authRoute = require('./routes/authentication');
const userHandler = require('./routes/userHandler');

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
