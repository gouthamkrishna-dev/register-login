import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
type ApiMail={
  id:string;
  Mail:string;
  _V:number
}
export default function LoginComponent() {
  const [mail, setMail] = useState<String>("");
  const [ApiMail, setApiMail] = useState([]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.get("http://localhost:3001/acceptedEmail").then((res) => {
      setApiMail(res.data);
    });
    Object.values(ApiMail).map((apiMail: ApiMail) => {
      if (apiMail.Mail === mail) {
        navigate("/successful");
      }
    });
  };
  const navigate = useNavigate();
  const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/signup");
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          onChange={(e) => setMail(e.target.value)}
        />
        <input type="submit" />
      </form>
      <button onClick={(e) => handleSignup(e)}>signUp</button>
    </div>
  );
}
