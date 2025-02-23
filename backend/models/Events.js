const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema({
  Link: { type: String, required: true, unique: true },
  section: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("EventsPage", EventsSchema);
