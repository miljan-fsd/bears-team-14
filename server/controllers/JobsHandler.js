const Job = require('../models/Job.js');

module.exports = {
  getAll: function(req, res) {
    Job.find().exec((err, jobs) => {
      if (err) throw err;

      res.json(jobs);
    });
  },
};
