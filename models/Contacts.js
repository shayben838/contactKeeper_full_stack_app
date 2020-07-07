const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  link: {
    type: String,
  },
  type: {
    type: String,
    default: "personal",
  },
  position: {
    type: String,
  },
  firstInterview: {
    type: String,
  },
  secondInterview: {
    type: String,
  },
  comments: {
    type: String,
  },
  conservationPoint_1: {
    type: String,
  },
  conservationPoint_2: {
    type: String,
  },
  pointToImprove_1: {
    type: String,
  },
  pointToImprove_2: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("contact", ContactSchema);
