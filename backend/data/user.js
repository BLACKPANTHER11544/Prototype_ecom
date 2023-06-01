import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    isAdmin: true,
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "john",
    email: "john@example.com",
    isAdmin: false,
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "rob",
    email: "rob@example.com",
    isAdmin: false,
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
