const mongoose = require("mongoose");

var Booking = mongoose.model("Booking", {
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  showtime: { type: mongoose.Schema.Types.ObjectId, ref: "Showtime" },
  quantily: { type: Number },  
  dateAdded: { type: Date, default: Date.now },
  disable: { type: Boolean, default: false }
});

module.exports = { Booking };
