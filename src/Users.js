let users = [];

export const registerUser = (userData) => {
  users.push(userData);
};

export const authenticateUser = (username, password,displayName, profilePicture) => {
  return users.some(user => user.username === username && user.password === password && user.displayName===displayName && user.profilePicture===profilePicture);
};

export const isUsernameEqual = (username) => {
  return users.some(user => user.username === username);
};
