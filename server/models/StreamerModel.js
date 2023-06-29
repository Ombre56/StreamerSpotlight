const mongoose = require('mongoose')

const streamerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  upVotes: {
    type: Number,
    default: 0,
  },
  downVotes: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model("Streamer", streamerSchema);