export {}
const mongoose=require("mongoose");

const userEmail=mongoose.Schema({
    Mail:{
        type:String,
        required:[true]
    }
})

module.exports=mongoose.model("UserEmail",userEmail)