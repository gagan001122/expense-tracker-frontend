import { useState } from "react";
import { SubmitButton } from "./SubmitButton";
import { InputField } from "./InputField";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const SignupContainer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleClick = () => {
    axios
      .post(`${import.meta.env.VITE_API}/user/create`, {
        name: name,
        email: email,
        password: password,
      })
      .then(({ data }) => {
        localStorage.setItem("selfId", data.id);
        navigate("/dashboard");
        console.log(data);
      })
      .catch((e) => {
        if (e.status == 409 || e.status == 400) {
          console.log(e.response?.data.message);
        }
      });
  };
  return (
    <div className="h-96 w-96  rounded-lg flex flex-col items-center justify-center text-white">
      <div className="text-4xl font-semibold p-4">Sign up</div>
      <InputField
        label="Name"
        type="text"
        placeholder="FullName"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
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
      <SubmitButton text="Sign up" onClick={handleClick} />
      <div>
        Already got an account?{" "}
        <Link className="text-secondary hover:text-hover_sec" to={"/login"}>
          Sign in
        </Link>
      </div>
    </div>
  );
};
