const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const logger = require('./src/middleware/logger');
const notFound = require('./src/middleware/notFound');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

// this lets us read JSON data from request bodies
app.use(express.json());

// log every request that comes in
app.use(logger);

// all our user-related routes
app.use(userRoutes);

// if someone hits a route that doesn't exist, send 404 response
app.use(notFound);

// catch any errors and give proper error response
app.use(errorHandler);

module.exports = app;
