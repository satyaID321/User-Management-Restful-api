// catch any errors which happen and send proper error response
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  const status = err.status || 500;

  res.status(status).json({
    error: status === 500 ? 'Internal server error' : err.error || 'Error',
    message: err.message || 'An unexpected error occurred'
  });
};

module.exports = errorHandler;
