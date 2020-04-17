const express = require("express");
const server = express();
const resourceApi = require("./Router/resouresRouter");
const projectApi = require("./Router/projectsRouter");
const taskApi = require("./Router/taskRouter");
server.use(express.json());

server.use("/api/resources", resourceApi);
server.use("/api/projects", projectApi);
server.use("/api/tasks", taskApi);

server.get("/", (req, res) => {
  res.status(200).json({ Message: "I missed you" });
});

module.exports = server;