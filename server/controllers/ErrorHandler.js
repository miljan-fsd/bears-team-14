module.exports = function(err, req, res, next) {
  // console.log(err.stack);
  res.send(err);
};
