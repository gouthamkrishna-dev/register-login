const mongoose=require("mongoose");
const mongoDB=async ()=>{
    try {
        const conn =await mongoose.connect(process.env.URI)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
module.exports={
    mongoDB
}