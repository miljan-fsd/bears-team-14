const JobsHandler = require(__dirname + '/../controllers/JobsHandler.js');
const Router = require('express').Router();

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

Router.get('/jobs/', JobsHandler.getAll);

function isLoggedIn(req, res, next) {
  //TODO
  return false;
}

module.exports = Router;
