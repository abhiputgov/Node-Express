const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const Year = new Date().getFullYear();
  console.log(method, url, Year);
  next();
};

module.exports = logger;
