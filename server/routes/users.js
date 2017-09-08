const router = require('express').Router();

let checkLogin = require('../controllers/authController').isLoggedIn;
const userHandler = require('../controllers/userHandler.js');

if (process.env.NODE_ENV === 'test') {
  checkLogin = (req, res, next) => next();
}

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

router.get('/user/:username', checkLogin, catchErrors(userHandler.getUser));
router.put(
  '/user/:jobId',
  checkLogin,
  catchErrors(userHandler.selectJobAction)
);

module.exports = router;
