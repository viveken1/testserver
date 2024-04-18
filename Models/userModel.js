const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    mobile:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String
    },
    dob:{
        type:String
    },
    cource:{
        type:String
    }
})

const users = mongoose.model("users",userSchema) 

module.exports = users