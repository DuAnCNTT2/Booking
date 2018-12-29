const mongoose = require("mongoose");

var Room = mongoose.model("Room", {
  name: { type: String },
  number_seat: [
    {
      name_seat: { type: String },
      status: { type: String }
    }
  ],
  type_seat: { type: String },
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Theater" },
  price: { type: Number },
  disable: { type: Boolean, default: false }
});

module.exports = { Room };
