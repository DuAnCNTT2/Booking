const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

var { Booking } = require("../models/booking");

// => localhost:3000/bookings/
router.get("/", (req, res) => {
  Booking.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retriving Bookings :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Booking.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Retriving Booking :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.post("/", (req, res) => {
  var booking = new Booking({
    user: req.body.user,
    showtime: req.body.showtime,
    quantily: req.body.quantily,
    dateAdded: req.body.dateAdded,
    disable: req.body.disable
  });
  booking.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Booking Save :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  var booking = {
    user: req.body.user,
    showtime: req.body.showtime,
    quantily: req.body.quantily,
    dateAdded: req.body.dateAdded,
    disable: req.body.disable
  };
  Booking.findByIdAndUpdate(
    req.params.id,
    { $set: booking },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in Booking Update :" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Booking.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Booking Delete :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;
