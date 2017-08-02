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

    // Split tags string by commas
    const tags = req.body.tags.split(',');

    // Trim whitespaces around the tags
    const trimmedTags = tags.map(tag => tag.trim());

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
      tags: trimmedTags,
      expDate: new Date(expDate),
    });

    await cleanedJob.save();

    res.status(201).end();
  },
};
