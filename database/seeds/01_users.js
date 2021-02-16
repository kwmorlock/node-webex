exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          username: "testingone",
          password: hashPassword("testingone"),
          email: "testingone@mail.com",
        },
        {
          username: "testingtwo",
          password: hashPassword("testingtwo"),
          email: "testingtwo@mail.com",
        },
        {
          username: "testingthree",
          password: hashPassword("testingthree"),
          email: "testingthree@mail.com",
        },
        {
          username: "testingfour",
          password: hashPassword("testingfour"),
          email: "testingfour@mail.com",
        },
      ]);
    });
};

const hashPassword = (password) => {
  const bcrypt = require("bcryptjs");
  const rounds = 8;
  const hash = bcrypt.hashSync(password, rounds);
  return hash;
};
