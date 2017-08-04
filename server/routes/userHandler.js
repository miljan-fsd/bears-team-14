const JobsHandler = require(__dirname + '/../controllers/JobsHandler.js');
const Router = require('express').Router();

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

// Dummy route to demonstrate authentication (not implemented yet)
Router.get('/topsecret', isLoggedIn, (req, res) => {
  return false;
});

Router.get('/test/', (req, res) => {
  res.json({
    data: 'Test get',
  });
});

Router.post('/test/', (req, res) => {
  res.json({
    data: 'Test post',
  });
});

Router.put('/test/', (req, res) => {
  res.json({
    data: 'Test put',
  });
});

Router.delete('/test/', (req, res) => {
  res.json({
    data: 'Test delete',
  });
});

Router.get('/jobs/', catchErrors(JobsHandler.getAll));

Router.post('/jobs/create', catchErrors(JobsHandler.createNew));

Router.put('/job/:jobId', catchErrors(JobsHandler.updateJob));

Router.delete('/job/:jobId', catchErrors(JobsHandler.deleteJob));

function isLoggedIn(req, res, next) {
  //TODO
  return false;
}

module.exports = Router;
