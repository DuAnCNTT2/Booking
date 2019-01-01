const mongoose = require("mongoose");

var Showtime = mongoose.model("Showtime", {
  opening_date: { type: Date },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
  disable: { type: Boolean, default: false }
});

module.exports = { Showtime };
