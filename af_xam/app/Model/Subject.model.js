const mongoose = require('mongoose');

const Subject = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Subject",Subject);