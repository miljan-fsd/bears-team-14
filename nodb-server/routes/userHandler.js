const JobsHandler = require(__dirname + '/../controllers/JobsHandler.js');
const Router = require('express').Router();

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

Router.get('/jobs/', catchErrors(JobsHandler.getAll));

Router.post('/job/create', catchErrors(JobsHandler.createNew));

Router.get('/job/:jobId', catchErrors(JobsHandler.getOne));

Router.put('/job/:jobId', catchErrors(JobsHandler.updateJob));

Router.delete('/job/:jobId', catchErrors(JobsHandler.deleteJob));

function isLoggedIn(req, res, next) {
  //TODO
  return false;
}

module.exports = Router;
