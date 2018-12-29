const mongoose = require("mongoose");

var Movie = mongoose.model("Movie", {
  name: { type: String },
  image: { type: String },
  director: [{ type: String }],
  cast: [{ type: String }],
  genre: [{ type: String }],
  release_date: { type: Date },
  running_time: { type: Number },
  description: { type: String },
  trailer: { type: String },
  disable: { type: Boolean, default: false }
});

module.exports = { Movie };
