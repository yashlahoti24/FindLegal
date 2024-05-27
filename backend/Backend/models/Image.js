// models/Image.js
const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String,
  lawyerId:String
});

module.exports = mongoose.model('Image', ImageSchema);