const passport = require('passport');

const login = passport.authenticate('local');

const logout = (req, res) => {
  req.logout();
  res.send('logged out');
};

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  next('Not logged in');
};

module.exports = {
  isLoggedIn,
  login,
  logout,
};
