let users = [];

export const registerUser = (userData) => {
  users.push(userData);
};

export const authenticateUser = (username, password,displayName, profilePicture) => {
  return users.some(user => username && user.password);
};

export const isUsernameEqual = (username) => {
  return users.some(user => user.username === username);
};
