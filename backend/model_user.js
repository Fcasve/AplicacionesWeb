const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  DNI: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value > 0;
      },
      message: () => "Please enter a valid age",
    },
  },
  correo: {
    type: String,
    required: true,
  },
  cell: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };