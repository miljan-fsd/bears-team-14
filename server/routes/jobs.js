let checkAdmin = require('../controllers/authController').isAdmin;
const JobsHandler = require(__dirname + '/../controllers/JobsHandler.js');
const Router = require('express').Router();

if (process.env.NODE_ENV === 'test') {
  checkAdmin = (req, res, next) => next();
}

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

Router.get('/jobs/', catchErrors(JobsHandler.getAll));

Router.post('/job/create', checkAdmin, catchErrors(JobsHandler.createNew));

Router.get('/job/:jobId', catchErrors(JobsHandler.getOne));

Router.put('/job/:jobId', checkAdmin, catchErrors(JobsHandler.updateJob));

Router.delete('/job/:jobId', checkAdmin, catchErrors(JobsHandler.deleteJob));

module.exports = Router;
