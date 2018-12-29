const mongoose = require("mongoose");

var Booking = mongoose.model("Booking", {
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  showtime: { type: mongoose.Schema.Types.ObjectId, ref: "Showtime" },
//   theater: { type: Schema.Types.ObjectID, ref: "Theater" },
//   room: { type: Schema.Types.ObjectID, ref: "Room" },
//   movie: { type: Schema.Types.ObjectID, ref: "Movie" },
  quantily: { type: Number },  
  dateAdded: { type: Date, default: Date.now },
  disable: { type: Boolean, default: false }
});

module.exports = { Booking };
