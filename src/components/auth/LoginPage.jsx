import { useState } from "react";
import axios from "axios";
import { SubmitButton } from "./SubmitButton";
import { InputField } from "./InputField";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    axios
      .post(`${import.meta.env.VITE_API}/user/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("selfId", res.data);
        navigate("/dashboard");
      })
      .catch((e) => {
        if (e.status == 409 || e.status == 400) {
          console.log(e.response?.data.message);
        }
      });
  };
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-primary ">
      <div className="h-96 w-96  rounded-lg flex flex-col items-center justify-center text-white">
        <div className="text-4xl font-semibold p-4">Sign in</div>
        <InputField
          label="Email"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <SubmitButton text="Sign in" onClick={handleClick} />
      </div>
    </div>
  );
}
