const JobsHelper = require('/JobsHelper.js');
const Job = require('../models/Job.js');

module.exports = {
  getAll: async function(req, res) {
    let jobs = await Job.find();

    if (!jobs) throw 'No jobs found!';

    res.json(jobs);
  },
  createNew: async function(req, res) {
    // Remember the form's data
    const { companyName, title, description, imgUrl, website, location, expDate } = req.body;

    // Change the form's data as needed
    const tags = JobsHelper.cleanTags(req.body.tags);

    // Create and save the new job as specified by mongoose model
    const cleanedJob = new Job({
      companyName,
      info: {
        title,
        description,
        imgUrl,
        website,
      },
      location,
      tags,
      expDate: new Date(expDate),
    });

    await cleanedJob.save();

    res.status(201).end();
  },
};
