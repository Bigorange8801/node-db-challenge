const express = require("express");
const server = express();
const resources = require("./Router/resourcesRouter");
const projects = require("./Router/projectRouter");
const tasks = require("./Router/tasksRouter");
server.use(express.json());

server.use("/api/resources", resources);
server.use("/api/projects", projects);
server.use("/api/tasks", tasks);

server.get("/", (req, res) => {
  res.status(200).json({ Message: "I missed you" });
});

module.exports = server;