const mongoose = require("mongoose");

const MachineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Hamburger", MachineSchema);
