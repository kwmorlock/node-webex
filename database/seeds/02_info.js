exports.seed = function (knex) {
  return knex("info").insert([
    { title: "info one", description: "Great info", usersId: 1 }, //1
    { title: "info two", description: "The best info", usersId: 2 }, //1
    { title: "info three", description: "Amazing info", usersId: 2 }, //2
    { title: "info four", description: "Filler info", usersId: 3 }, //3
    { title: "info five", description: "Look at this info", usersId: 3 }, //3
    { title: "info six", description: "Sad info", usersId: 4 }, //4
    { title: "info seven", description: "Info info", usersId: 4 }, //4
  ]);
};
