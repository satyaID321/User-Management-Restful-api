// handle requests to routes that dont exist
const notFound = (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `The route ${req.method} ${req.originalUrl} does not exist.`
  });
};

module.exports = notFound;
