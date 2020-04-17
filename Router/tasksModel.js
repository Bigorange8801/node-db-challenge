const db = require("../data/db.config");

module.exports = {
  getall,
  add
};

function getall() {
  return db("Tasklist")
    .join("Tasks", "Tasklist.Task_id", "Tasks.id")
    .join("Projects", "Tasklist.project_id", "Projects.id");
}

function add(body) {
  return db("Tasks").insert(body);
}