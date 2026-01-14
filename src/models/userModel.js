// store users in memory
let users = [
  { id: '1', firstName: 'Anshika', lastName: 'Agarwal', hobby: 'Teaching' },
  { id: '2', firstName: 'John', lastName: 'Doe', hobby: 'Coding' }
];

// generate the next available ID by finding the highest number and adding 1
const nextId = () =>
  String(
    users.reduce((max, user) => {
      const numeric = parseInt(user.id, 10);
      return Number.isNaN(numeric) ? max : Math.max(max, numeric);
    }, 0) + 1
  );

// get all users from our storage
const getAllUsers = () => users;

// find a specific user by their ID, return null if not found
const getUserById = (id) => users.find((user) => user.id === id) || null;

// create a new user and add it to our storage
const createUser = ({ firstName, lastName, hobby }) => {
  const newUser = {
    id: nextId(),
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    hobby: hobby.trim()
  };
  users.push(newUser);
  return newUser;
};

// update an existing user, return null if user doesn't exist
const updateUser = (id, data) => {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return null;

  users[index] = {
    id,
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    hobby: data.hobby.trim()
  };
  return users[index];
};

// delete a user by ID, return null if user doesn't exist
const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return null;

  const [removed] = users.splice(index, 1);
  return removed;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
