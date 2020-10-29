const db = require("../data/db.config");

module.exports = {
  getall,
  add
};

function getall() {
  return db("TasksList")
    .join("Tasks", "TasksList.Task_id", "Tasks.id")
    .join("Projects", "TasksList.project_id", "Projects.id");
}

function add(body) {
  return db("Tasks")
  .insert(body);
} 
