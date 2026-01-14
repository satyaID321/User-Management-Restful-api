# User Management RESTful API (MVC)

A simple RESTful API built with Node.js and Express using an MVC-style structure. Users are stored in-memory.

## Project structure
```
.
├── app.js                 # Express app wiring
├── server.js              # Server entrypoint
└── src
    ├── controllers        # Request handlers
    ├── middleware         # Logger, validation, 404, error handler
    ├── models             # In-memory data helpers
    └── routes             # Route definitions
```

## Installation
```bash
npm install
```

## Running the server
```bash
npm start
```
Server runs at `http://localhost:3000`.

## API endpoints
- `GET /users` – Fetch all users
- `GET /users/:id` – Fetch user by ID
- `POST /user` – Create a new user (requires `firstName`, `lastName`, `hobby`)
- `PUT /user/:id` – Update a user (requires `firstName`, `lastName`, `hobby`)
- `DELETE /user/:id` – Delete a user

## Sample user
```json
{
  "id": "1",
  "firstName": "Anshika",
  "lastName": "Agarwal",
  "hobby": "Teaching"
}
```

## Middleware
- Logging: method, URL, status code, and duration for every request
- Validation: ensures `firstName`, `lastName`, and `hobby` are non-empty strings on POST/PUT
- 404 handler for unknown routes
- Error handler returning structured JSON

## Example cURL
```bash
# Get all users
curl http://localhost:3000/users

# Get user by ID
curl http://localhost:3000/users/1

# Create a user
curl -X POST http://localhost:3000/user \
  -H "Content-Type: application/json" \
  -d '{"firstName":"John","lastName":"Doe","hobby":"Coding"}'

# Update a user
curl -X PUT http://localhost:3000/user/1 \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Jane","lastName":"Doe","hobby":"Reading"}'

# Delete a user
curl -X DELETE http://localhost:3000/user/1
```
