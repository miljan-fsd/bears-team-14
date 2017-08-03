const JobsHelper = require('./JobsHelper.js');
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
  /*
    Updates a job with any fields that have been sent as a request body.
    Parameters: job id.
  */
  updateJob: async function(req, res) {
    // Remember the request's data
    const { companyName, title, description, imgUrl, website, location, expDate, tags, isFeatured } = req.body;
    
    // Find the job by an id that was passed in
    let job = await Job.findById(req.params.jobId);

    if (!job) throw 'No job has been found!';

    // Update the job
    job.companyName = companyName || job.companyName;
    job.info.title = title || job.info.title;
    job.info.description = description || job.info.description;
    job.info.imgUrl = imgUrl || job.info.imgUrl;
    job.info.website = website || job.info.website;
    job.location = location || job.location;
    job.tags = tags ? JobsHelper.cleanTags : job.tags;
    // If isFeature is either a 'true' or 'false', assign the boolean representation, else don't update
    job.isFeatured = ~['true', 'false'].indexOf(isFeatured) ? Boolean(isFeatured && isFeatured.replace(/false/, '')) : job.isFeatured;
    job.expDate = expDate ? new Date(expDate) : job.expDate;
    
    // Save the job
    await job.save();

    res.status(204).end();
  },
};
