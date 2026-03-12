const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.Mongo_URI);
    res.status(200).json("MongoDB connected successfully");
  } catch (err) {
    res.status(500).json("Database connection failed: " + err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
