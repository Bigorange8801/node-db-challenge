const express = require("express");
const tasks = require("./tasksModel");
const router = express.Router();

router.get("/", (req, res) => {
  tasks.getall()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/:id", (req, res) => {
  const id = req.params.id;
  tasks.add(req.body)
    .then(added => {
      res.status(200).json(added);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ Error: "There was an error" });
    });
});

module.exports = router;