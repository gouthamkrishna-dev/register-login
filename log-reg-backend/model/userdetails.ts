export {}
const mongoose=require("mongoose");

const userdetails=mongoose.Schema({
    resMail:{
        type:String,
        required:[true]
    },
    resOTP:{
        type:String,
        required:[true]
    }
},{
    timestamps:true
})
module.exports=mongoose.model("usersec",userdetails)