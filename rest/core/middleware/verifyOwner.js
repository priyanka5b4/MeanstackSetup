module.exports.verifyOwner = (attribute) => {
  return (req, res, next) => {
    try {
      if (!req.body || !req.body[attribute]) {
        res.status(401).send({ message: 'Unauthorised for this operation' });
      } else {
        next();
      }
    } catch (err) {
      res.status(401).send({ message: 'Unauthorised for this operation' });
      console.log(err);
    }
  };
};
