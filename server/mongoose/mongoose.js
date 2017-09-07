require('dotenv').config();
const config = require('../_config');
require('../models/Job');
require('../models/User');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const mongoURI = config.mongoURI[process.env.NODE_ENV || 'development'];

mongoose
  .connect(mongoURI, {
    useMongoClient: true,
  })
  .then(() => console.log('Connected to Database: ' + mongoURI))
  .catch(err => {
    console.log('Error connecting to the Database. ' + err);
  });

module.exports = mongoose;
