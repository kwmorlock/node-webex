const db = require("../database/dbconfig");

module.exports = {
  find,
  findByUser,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db("info")
    .join("users", "users.id", "info.usersId")
    .select("info.id", "info.title", "info.description", "info.usersId");
}

function findById(id) {
  return db("info")
    .join("users", "users.id", "info.usersId")
    .select("info.id", "info.title", "info.description")
    .where("info.id", id)
    .first();
}

function add(information) {
  return db("info")
    .insert(information, "id")
    .then((id) => {
      return findById(id);
    });
}

function update(updates, id) {
  return db("info").where({ id }).update(updates);
}

function remove(id) {
  return db("info").where("id", id).del();
}

function findByUser(usersId) {
  return db("info")
    .join("users", "users.id", "info.usersId")
    .select(
      "users.id",
      "info.id",
      "info.title",
      "info.description",
      "users.username",
      "users.password",
      "users.email"
    )
    .where("info.UsersId", usersId);
}
