const Job = require('../models/Job.js');

module.exports = {
  getAll: async function(req, res) {
      let jobs = await Job.find();

      if (!jobs) throw 'No jobs found!'; 

      res.json(jobs);
  },
};
