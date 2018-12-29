const mongoose = require("mongoose");

var Theater = mongoose.model("Theater", {
  name: { type: String },
  contact_phone: { type: Number },
  image: { type: String },
  district: { type: String },
  city: { type: String },
  disable: { type: Boolean, default: false }
});

module.exports = { Theater };
