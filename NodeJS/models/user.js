const mongoose = require("mongoose");

var User = mongoose.model("User", {
  first_name: { type: String },
  last_name: { type: String },
  gender: { type: Boolean },
  date_of_birth: { type: Date },
  phone: { type: Number },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  image: { type: String },
  role: { type: String, required: true, default: "user" },
  district: { type: String },
  city: { type: String },
  dateAdded: { type: Date, default: Date.now },
  disable: { type: Boolean, default: false }
});

module.exports = { User };
