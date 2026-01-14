const app = require('./app');

// use port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// start the server and listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('GET /users  - Fetch all users');
  console.log('GET /users/:id  - Fetch user by ID');
  console.log('POST /user  - Create a new user');
  console.log('PUT /user/:id  - Update a user');
  console.log('DELETE /user/:id  - Delete a user');
});
