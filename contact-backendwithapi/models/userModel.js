const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        require: [true, "Please enter a user name"]
    },

    email:{
        type: String,
        require: [true, "Please enter a email"],
        unique: [true, "This email is already taken"]
    },

    password:{
        type: String,
        require: [true, "Please enter a password"]
    },
},{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema);