const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email:{
        type :StaticRange,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    age:{
        type:Number
    }
});

module.exports = mongoose.model("user ", userSchema);