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
  next({ status: 401, text: 'Not logged in' });
};

const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.isAdmin) {
    return next();
  }
  next({ status: 401, text: 'Not an admin or not logged in' });
};

module.exports = {
  isAdmin,
  isLoggedIn,
  login,
  logout,
};
