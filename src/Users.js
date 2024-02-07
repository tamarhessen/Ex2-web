let users = [];

export const registerUser = (userData) => {
  users.push(userData);
};

export const authenticateUser = (username, password,displayName, profilePicture) => {
  return users.some(user => user.username === username && user.password === password);
};

export const isUsernameEqual = (username) => {
  return users.some(user => user.username === username);
};
export const getDisplayNameByUsername = (username) => {
  const user = users.find(user => user.username === username);
  return user ? user.displayName : null;
};

export const getProfilePictureByUsername = (username) => {
  const user = users.find(user => user.username === username);
  return user ? user.profilePicture : null;
};
