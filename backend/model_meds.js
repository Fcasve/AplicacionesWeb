const mongoose = require("mongoose");

const MedsSchema = new mongoose.Schema({
  Cod: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Meds = mongoose.model("Meds", MedsSchema);

module.exports = { Meds };