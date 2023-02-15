const authorize = (req, res, next) => {
  console.log('authorization is done');
  next();
};

module.exports = authorize;
