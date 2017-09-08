const User = require('../models/User.js');

const getUser = async (req, res) => {
  console.log('getUser', req.params.username);
  res.send('getUser');
};

const saveJob = async (req, res) => {
  const { jobId } = req.params;

  if (!req.user) return res.status(401).send();

  const { username } = req.user;

  const user = await User.findOne({ username });
  const jobIndex = user.savedJobs.indexOf(jobId);

  !~jobIndex ? user.savedJobs.push(jobId) : user.savedJobs.splice(jobIndex, 1);

  const result = await user.save();
  // Temp status for testing
  const status = ~result.savedJobs.indexOf(jobId) ? 'saved to' : 'removed from';
  res.send(`Job ${jobId} ${status} ${username} profile.`);
};

const selectJobAction = (req, res) => {
  // Use req.query.hasOwnProperty() to select different method
  // Default to 'save'
  return saveJob(req, res);
};

module.exports = {
  getUser,
  saveJob,
};
