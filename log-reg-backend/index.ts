import express from "express";
const app = express();
const dotEnv=require("dotenv").config()
const cors=require("cors")
const {mongoDB}=require("./config/db")

const {recieveValue,addValue,afterAuth,acceptedEmail}=require("./datafunction/recieveValue")
mongoDB();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/recieveValue",recieveValue)
app.post("/addValue", addValue);
app.post("/afterAuth",afterAuth)

app.get("/acceptedEmail",acceptedEmail)

app.listen(3001, console.log("successfully started"));
