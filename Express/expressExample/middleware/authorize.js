const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'Abhishek') {
    req.query = { user: 'Abhishek', id: '001' };
    console.log('authorization is done');
    next();
  } else {
    console.log('authorization failed');
    res.status(403).send('UNAUTHORIZED! GET OUT!!!!!');
  }
};

module.exports = authorize;
