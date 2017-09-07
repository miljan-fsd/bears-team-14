const User = require('../models/User.js');

const register = (req, res, next) => {
  const user = new User({
    username: req.body.username,
  });

  User.register(user, req.body.password, (err, user) => {
    if (err) return next(err);
    next();
  });
};

module.exports = {
  register,
};
