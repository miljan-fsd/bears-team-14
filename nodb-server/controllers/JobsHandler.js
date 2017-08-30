const JobsHelper = require('./JobsHelper.js');
const jobs = require('../jobs.js').jobs;

const delay = () => Math.random() * 100 + 100;

module.exports = {
  getAll: async function(req, res) {
    setTimeout(() => {
      res.status(200).json(jobs);
    }, delay());
  },

  /*
    Updates a job with any fields that have been sent as a request body.
    Parameters: job id.
  */
  updateJob: async function(req, res) {
    const {
      companyName,
      title,
      description,
      imgUrl,
      website,
      location,
      expDate,
      tags,
      // isFeatured,
    } = req.body;

    // HACK Data from front is sent as JSON,
    // so isFeatured is already Boolean
    const isFeatured = String(req.body.isFeatured);

    // Find the job by an id that was passed in
    const job = jobs.filter(job => job._id == req.params.jobId)[0];

    if (!job) return res.status(404).json({ error: 'Not found' });

    // Update the job
    job.companyName = companyName || job.companyName;
    job.info.title = title || job.info.title;
    job.info.description = description || job.info.description;
    job.info.imgUrl = imgUrl || job.info.imgUrl;
    job.info.website = website || job.info.website;
    job.location = location || job.location;
    job.tags = tags ? JobsHelper.cleanTags(tags) : job.tags;
    // If isFeature is either a 'true' or 'false', assign the boolean representation, else don't update
    job.isFeatured = ~['true', 'false'].indexOf(isFeatured)
      ? Boolean(isFeatured && isFeatured.replace(/false/, ''))
      : job.isFeatured;
    job.expDate = expDate ? new Date(expDate) : job.expDate;

    setTimeout(() => {
      res.status(200).json({
        UPDATED: job,
      });
    }, delay());
  },

  /*
    Deletes a job.
    Parameters: job id.
  */
  deleteJob: async function(req, res) {
    const jobId = req.params.jobId;
    let id;
    jobs.some((job, i) => {
      if (job._id == jobId) {
        id = i;
        return true;
      }
    });

    const job = jobs[id];

    jobs.splice(id, 1);

    setTimeout(() => {
      res.status(200).json({
        REMOVED: {
          name: job.info.title,
          _id: jobId,
        },
      });
    }, delay());
  },
};
