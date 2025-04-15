const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: String,
  content: String,
  category: String,
  language: String,
  author: String,
  image: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('News', newsSchema);
