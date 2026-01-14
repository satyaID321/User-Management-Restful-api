const express = require('express');
const {
  listUsers,
  getUser,
  addUser,
  editUser,
  removeUser
} = require('../controllers/userController');
const validateUser = require('../middleware/validateUser');

const router = express.Router();

// define all the routes and connect them to their controller functions
// validateUser middleware checks the data before creating or updating
router.get('/users', listUsers);
router.get('/users/:id', getUser);
router.post('/user', validateUser, addUser);
router.put('/user/:id', validateUser, editUser);
router.delete('/user/:id', removeUser);

module.exports = router;
