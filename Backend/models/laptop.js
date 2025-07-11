const mongoose = require('mongoose');

const laptopSchema = mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  specs: { type: String },
  price: { type: Number, required: true },
  condition: { type: String, enum: ['New', 'Refurbished', 'Used'], default: 'Used' },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },  
  isSold: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Laptop', laptopSchema);
