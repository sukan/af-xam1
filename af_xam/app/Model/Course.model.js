const mongoose = require('mongoose');

const Course = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    lecturerInCharge:{
        type:String,
        required:true
    },
    passmark:{
        type:Number,
        required:true
    },
    subjects:{
        type:Array
    }
})

module.exports = mongoose.model("Course",Course);
