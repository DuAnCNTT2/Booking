const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

var { Room } = require("../models/room");

// => localhost:3000/rooms/
router.get("/", (req, res) => {
  Room.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retriving Rooms :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Room.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Retriving Room :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.post("/", (req, res) => {
  var room = new Room({
    name: req.body.name,
    number_seat: req.body.number_seat,
    type_seat: req.body.type_seat,
    room: req.body.room,
    price: req.body.price,
    disable: req.body.disable
  });
  room.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error in Room Save :" + JSON.stringify(err, undefined, 2));
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  var room = {
    name: req.body.name,
    number_seat: req.body.number_seat,
    type_seat: req.body.type_seat,
    room: req.body.room,
    price: req.body.price,
    disable: req.body.disable
  };
  Room.findByIdAndUpdate(
    req.params.id,
    { $set: room },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in Room Update :" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Room.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Room Delete :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;
