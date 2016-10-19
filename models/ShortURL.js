const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const shortUrlSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  slug: {
    type: Number,
    default: 0,
    unique: true
  },
  requestCount: {
    type: Number,
    default: 0
  }
});

// Create the model class
const ModelClass = mongoose.model('user', shortUrlSchema);

// Export the model
module.exports = ModelClass;