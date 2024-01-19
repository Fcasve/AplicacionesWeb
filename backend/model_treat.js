const mongoose = require("mongoose");

const TreatSchema = new mongoose.Schema({
  Cod: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Treat = mongoose.model("Treat", TreatSchema);

module.exports = { Treat };