import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs"
const RegisterComponent = () => {
  const [mail, setEmail] = useState<String>("");
  const navigate = useNavigate();
  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(mail!=="") {
      axios({
        method:"post",
        url:"http://localhost:3001/addValue",
        data:qs.stringify({
          mail:mail
        }),
        headers:{
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      })
    }
    navigate("/auth")
  };
  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)} required
        />
      </form>
      <button onClick={(e) => handleSubmit(e)}>Click</button>
    </div>
  );
};

const SuccessfulComponent=()=>{
  return (
    <h1>Welcome</h1>
  )
}
export { RegisterComponent,SuccessfulComponent };
