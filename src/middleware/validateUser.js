// check that the request has all required fields before creating or updating a user
const validateUser = (req, res, next) => {
  const { firstName, lastName, hobby } = req.body || {};

  // make sure all three fields are present
  if (!firstName || !lastName || !hobby) {
    return res.status(400).json({
      error: 'Validation failed',
      message: 'Missing required fields. Please provide firstName, lastName, and hobby.'
    });
  }

  // make sure all fields are non-empty strings
  const fields = [firstName, lastName, hobby];
  if (!fields.every((value) => typeof value === 'string' && value.trim())) {
    return res.status(400).json({
      error: 'Validation failed',
      message: 'All fields (firstName, lastName, hobby) must be non-empty strings.'
    });
  }

  next();
};

module.exports = validateUser;
