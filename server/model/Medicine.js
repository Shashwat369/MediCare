const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a medicine name'],
      trim: true,
    },
    company: {
      type: String,
      required: [true, 'Please provide the manufacturing company name'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Please specify a category'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
    },
    oldPrice: {
      type: Number,
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/150',
    },
    shopName: {
      type: String,
      required: true,
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Medicine', medicineSchema);