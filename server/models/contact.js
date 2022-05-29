const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "a name is required"],
  },
  phone: {
    type: Number,
    required: [true, "add a number"],
  },
  email: {
    type: String,
    required: [true, "verify the email please"],
    unique: true,
    lowercase: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("contact", contactSchema);
