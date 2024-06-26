const users = [
  {
    email: "shiva@gmail.com",
    password: "Password12",
  },
  {
    email: "krishna@gmail.com",
    password: "Password13",
  },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};
