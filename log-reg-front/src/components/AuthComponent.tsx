import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from 'qs'
export type Value = {
  _id: string;
  __v: number;
  updatedAt: string;
  resOTP: string;
  resMail: string;
  createdAt: string;
};
export default function AuthComponent() {
    const navigate=useNavigate();
  const [otp, checkOtp] = useState<String>("");
  const [auth, setAuth] = useState<[]>([]);
  const [val, setVal] = useState<Value>();
  const handleApi = async () => {
    await axios.get("http://localhost:3001/recieveValue").then((res) => {
        console.log(res.data)
      setAuth(res.data);
    });
  };
  useEffect(() => {
    handleApi();
  }, []);

  const verifyOtp = async(e: React.MouseEvent<HTMLButtonElement>) => {
    await setVal(auth[auth.length - 1]);
    if (val !== undefined) {
     if( val.resOTP===otp){
        axios({
            method:"post",
            url:"http://localhost:3001/afterAuth",
            data:qs.stringify({
              mail:val?.resMail
            }),
            headers:{
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          })
          navigate("/")
     }
      
      console.log("false")
    }
  };
  return (
    <div>
      <h1>Enter OTP</h1>
      <form>
        <label htmlFor="OTP">OTP:</label>
        <input type="text" name="OTP" onChange={(e)=>checkOtp(e.target.value)}/>
      </form>
      <button onClick={(e) => verifyOtp(e)}>click</button>
    </div>
  );
}
