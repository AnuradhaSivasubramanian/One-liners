const { isDataEmpty, isValueEmpty } = require("../helpers");
const express = require("express");
const router = express.Router();
const db = require("../database/models");
const oneliner = db.oneliner;

/**
 * GET for fetching the one liners
 */
router.get("/", function (req, res, next) {
  oneliner
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.error(err));
});

/**
 * POST for posting the one liners
 */

router.post("/", function (req, res, next) {
  const data = req.body;
  if (isDataEmpty(data)) {
    return res.status(400).send({ message: "Input fields cannot be empty" });
  }

  if (isValueEmpty(data)) {
    return res.status(400).send({ message: "Please fill all fields" });
  }

  oneliner
    .create({ name: req.body.name, data: req.body.data, upvote: 0 })
    .then(() =>
      res
        .status(200)
        .send({ message: "You have successfully submitted a oneliner!" })
    )
    .catch((userErr) => console.error(`User error: ${userErr}`));
});

/**
 * UPDATE the upvote - increase by 1 vote
 */

module.exports = router;
