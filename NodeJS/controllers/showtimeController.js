const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

var { Showtime } = require("../models/showtime");

// => localhost:3000/showtimes/
router.get("/", (req, res) => {
  Showtime.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retriving Showtimes :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Showtime.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Retriving Showtime :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.post("/", (req, res) => {
  var showtime = new Showtime({
    opening_date: req.body.opening_date,
    movie: req.body.movie,
    room: req.body.room,
    disable: req.body.disable
  });
  showtime.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error in Showtime Save :" + JSON.stringify(err, undefined, 2));
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  var showtime = {
    opening_date: req.body.opening_date,
    movie: req.body.movie,
    room: req.body.room,
    disable: req.body.disable
  };
  Showtime.findByIdAndUpdate(
    req.params.id,
    { $set: showtime },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in Showtime Update :" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Showtime.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Showtime Delete :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;
