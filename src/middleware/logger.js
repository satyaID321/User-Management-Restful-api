// log every request with method, URL, status code, and how long it took
const logger = (req, res, next) => {
  const start = Date.now();

  // log after the response is sent
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - Status: ${res.statusCode} (${duration}ms)`);
  });

  next();
};

module.exports = logger;
