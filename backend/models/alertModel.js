const mongoose = require("mongoose");

const AlertSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Fire", "Intrusion", "Medical", "Other"],
    required: true,
  },
  severity: {
    type: String,
    enum: ["Low", "Moderate", "High", "Critical"],
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  additionalInfo: {
    type: String,
  },
});

const Alert = mongoose.model("Alert", AlertSchema);

export default Alert;
