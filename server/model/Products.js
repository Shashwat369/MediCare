import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String },
    category: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    prescriptionRequired: { type: Boolean, default: false },
    description: { type: String },
    image: { type: String },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Product =  mongoose.model("Product", productSchema);

module.exports = Product;
