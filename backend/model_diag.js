const mongoose = require("mongoose");

const DiagSchema = new mongoose.Schema({
  Cod: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Diag = mongoose.model("Diag", DiagSchema);

module.exports = { Diag };