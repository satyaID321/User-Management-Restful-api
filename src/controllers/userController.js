const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../models/userModel');

// get all users and send them back
const listUsers = (req, res, next) => {
  try {
    const data = getAllUsers();
    res.status(200).json({ success: true, count: data.length, data });
  } catch (err) {
    next(err);
  }
};

// get a single user by ID, return 404 if not found
const getUser = (req, res, next) => {
  try {
    const { id } = req.params;
    const user = getUserById(id);
    if (!user) {
      return res
        .status(404)
        .json({ error: 'User not found', message: `User with ID ${id} does not exist.` });
    }

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

// create a new user (validation happens in middleware before this)
const addUser = (req, res, next) => {
  try {
    const newUser = createUser(req.body);
    res.status(201).json({ success: true, message: 'User created successfully', data: newUser });
  } catch (err) {
    next(err);
  }
};

// update an existing user, return 404 if user doesn't exist
const editUser = (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = updateUser(id, req.body);

    if (!updated) {
      return res
        .status(404)
        .json({ error: 'User not found', message: `User with ID ${id} does not exist.` });
    }

    res.status(200).json({ success: true, message: 'User updated successfully', data: updated });
  } catch (err) {
    next(err);
  }
};

// delete a user, return 404 if user doesn't exist
const removeUser = (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = deleteUser(id);

    if (!deleted) {
      return res
        .status(404)
        .json({ error: 'User not found', message: `User with ID ${id} does not exist.` });
    }

    res.status(200).json({ success: true, message: 'User deleted successfully', data: deleted });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  listUsers,
  getUser,
  addUser,
  editUser,
  removeUser
};
