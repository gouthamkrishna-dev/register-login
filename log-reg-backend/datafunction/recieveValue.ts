import express, { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const usersec = require("../model/userdetails");
const { Auth } = require("two-step-auth");
const userEmail = require("../model/userEmail");
const recieveValue = asyncHandler(async (req: Request, res: Response) => {
  const finding = await usersec.find();
  res.status(200).json(finding);
});
const addValue = asyncHandler(async (req: Request, res: Response) => {
  console.log(req.body.mail);
  async function login(emailId) {
    try {
      const res = await Auth(emailId);
      return {
        resMail: res.mail,
        resOTP: JSON.stringify(res.OTP),
      };
    } catch (error) {
      console.log(error);
    }
  }
  const { resMail, resOTP } = await login(`${req.body.mail}`);
  const create = await usersec.create({
    resMail: resMail,
    resOTP: resOTP,
  });

  res.status(201).json(create);
});
const afterAuth = asyncHandler(async (req: Request, res: Response) => {
  const create = await userEmail.create({
    Mail: req.body.mail,
  });
  console.log(create);
  res.status(201).json(create);
});

const acceptedEmail=asyncHandler(async(req:any,res:any)=>{
    const finding=await userEmail.find();
    res.status(200).json(finding)
})
module.exports = {
  recieveValue,
  addValue,
  afterAuth,
  acceptedEmail
};
