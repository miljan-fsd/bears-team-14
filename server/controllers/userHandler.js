const User = require('../models/User.js');

const getUser = async (req, res) => {
  console.log('getUser', req.params.username);
  res.send('getUser');
};

const saveJob = async (req, res) => {
  console.log('saveJob', req.params.username, req.params.jobId);
  res.send('saveJob');
};

module.exports = {
  getUser,
  saveJob,
};
