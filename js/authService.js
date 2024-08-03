let users = [];

const registerUser = (username, password) => {
  if (users.find(user => user.username === username)) {
    throw new Error('User already exists');
  }
  users.push({ username, password });
  return 'User registered';
};

const loginUser = (username, password) => {
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  return 'Login successful';
};

const resetUsers = () => {
  users = [];
};

module.exports = { registerUser, loginUser, resetUsers };
