const express = require("express");
const projects = require("./projectModel");
const router = express.Router();

router.get("/", (req, res) => {
  projects.getall()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  const id = req.params.id;
  // const body = { ...req.body, project_id: Number(id) };
  projects.add(req.body)
    .then(added => {
      res.status(200).json(added);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ Error: "There was an error" });
    });
});

module.exports = router;