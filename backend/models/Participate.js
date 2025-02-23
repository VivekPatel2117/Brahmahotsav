const mongoose = require("mongoose");

const ParticipatePageSchema = new mongoose.Schema({
  Link: { type: String, required: true, unique: true },
  section: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("Participate", ParticipatePageSchema);
