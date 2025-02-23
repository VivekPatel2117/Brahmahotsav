const mongoose = require("mongoose");

const HomePageSchema = new mongoose.Schema({
  Link: { type: String, required: true },
  section: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("HomePage", HomePageSchema);
