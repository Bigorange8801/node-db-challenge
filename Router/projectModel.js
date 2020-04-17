const db = require("../data/db.config");

module.exports = {
  getall,
  add
};

function getall() {
  return db("Projects");
}

function add(body) {
  return db("Projects")
  .insert(body)
  // .then(([projectId]) => getall(projectId));
}