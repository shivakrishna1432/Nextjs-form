const users = [
  {
    name: "Shiva",
    email: "shiva@gmail.com",
    password: "Password12",
    role: "admin",
    image:"https://randomuser.me/api/portraits/men/85.jpg"

  },
  {
    name: "krishna",
    email: "krishna@gmail.com",
    password: "Password13",
    role: "admin",
    image:"https://randomuser.me/api/portraits/men/42.jpg"
  },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};
