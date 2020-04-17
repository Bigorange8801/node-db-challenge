const express = require("express");
const re = require("./projectModel");
const router = express.Router();

router.get("/", (req, res) => {
  re.getall()
    .then(reres => {
      res.status(200).json(reres);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/:id", (req, res) => {
  const id = req.params.id;
  const body = { ...req.body, project_id: Number(id) };
  console.log("body", body);
  re.add(body)
    .then(reso => {
      res.status(200).json(reso);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ Error: "There was an error" });
    });
});

module.exports = router;