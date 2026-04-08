const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "seller"
    },
    shopName: {
        type: String,
        required: true,

    },
    shopLicense: { type: String, required: true },
    isVerified: { type: Boolean, default: false },



}, {timestamps : true})