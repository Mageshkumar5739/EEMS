const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sensorDataSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    required: true
  },
  google_id: {
    type: String,
    required: true
  },
  votedFor: {
    type: String
  },
  isVoted: {
    type: Boolean,
    default: false
  }
});

module.exports = sensorData = mongoose.model("sensorData", sensorDataSchema);
