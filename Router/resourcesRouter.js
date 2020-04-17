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

router.post("/:id", (req, res) => {
  const id = req.params.id;
  const body = { ...req.body, project_id: Number(id) };
  console.log("body", body);
  resources.add(body)
    .then(res => {
      res.status(200).json(res);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ Error: "There was an error" });
    });
});

module.exports = router;