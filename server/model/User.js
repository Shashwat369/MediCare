const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    usename : {
        type: String,
        required : true,
        minLength : 3
    },
    email : {
        type: String,
        required : true,
        unique : true,
    },
    password : {
        type: String,
        required : true,
        minLength : 6
    },
    confirmPassword : {
        type: String,
        required : true,
        minLength : 6
    },

})

const User = mongoose.model("User", userSchema)
module.exports = User