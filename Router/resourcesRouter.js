const express = require("express");
const resources = require("./resourcesModel");
const router = express.Router();

router.get("/", (req, res) => {
  resources.getall()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/:projectId", (req, res) => {
  const id = req.params.projectId;
  const body = { ...req.body, project_id: (id) };

  resources.add(body)
    .then(added => {
      res.status(200).json(added);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ Error: "There was an error" });
    });
});

module.exports = router;