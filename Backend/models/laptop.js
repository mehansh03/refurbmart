
const mongoose = require('mongoose');

const LaptopSchema = new mongoose.Schema({
  brand: String,
  model: String,
  processor: String,
  ram: String,
  storage: String,
  price: Number,
  condition: { type: String, enum: ['Excellent', 'Good', 'Fair'] },
  availability: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('laptop', LaptopSchema);


