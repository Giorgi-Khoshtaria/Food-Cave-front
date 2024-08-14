import React, { useState, useContext } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
// import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Use React.Context to infer the type of context value
  const { login, setUserData } = useContext(AuthContext)!;

  const navigate = useNavigate();

  const handleLoginEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginEmail(e.target.value);
  };

  const handleLoginPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoginPassword(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handlereset = () => {
    setLoginEmail("");
    setLoginPassword("");
  };
  const url = import.meta.env.VITE_API_URL;

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loginEmail || !loginPassword) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        `${url}/Login-user`,
        {
          email: loginEmail,
          password: loginPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      const data = response.data;

      if (data.status === "ok") {
        localStorage.setItem("token", data.data);
        login(data);
        setUserData(data);
        handlereset();
        navigate("/");
        toast.success("Login successful");
      } else {
        if (data.error === "User does not exist") {
          toast.error("User does not exist. Please sign up first.");
        } else {
          toast.error(`Login failed: ${data.error}`);
        }
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <ToastContainer />
      <Cards onSubmit={handleLogin}>
        <Card>
          <h1>Login</h1>
          <p>Email address *</p>
          <Input
            type="email"
            value={loginEmail}
            onChange={handleLoginEmailChange}
          />
          <p>Password *</p>
          <Input
            type={showPassword ? "text" : "password"}
            value={loginPassword}
            onChange={handleLoginPasswordChange}
          />
          <ShowPassword>
            <input type="checkbox" onChange={handleShowPasswordToggle} />
            <p>Show Password</p>
          </ShowPassword>

          <button>Log in</button>

          <Link to="/forgot-password">Lost your password?</Link>
        </Card>
      </Cards>
    </div>
  );
};

export default Login;

const Card = styled.div`
  display: flex;
  align-items: top;
  flex-direction: column;
`;

const Cards = styled.form`
  display: flex;
  align-items: top;
  justify-content: left;

  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    margin-bottom: 10px;
  }

  button {
    width: 150px;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 14px 20px;
    color: ${defaultTheme.colors.floralwhite};
    background-color: ${defaultTheme.colors.red};
    border: 0;
    border-radius: 10px;
  }

  a {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.green};
    text-decoration: none;
    margin-top: 15px;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid ${defaultTheme.colors.red};
  margin-bottom: 15px;
  font-size: 25px;
  line-height: 29px;
  padding-left: 15px;
  color: ${defaultTheme.colors.blue};

  /* Remove spinners for number inputs */
  -moz-appearance: textfield;
  appearance: textfield;

  /* Webkit browsers like Chrome and Safari */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ShowPassword = styled.div`
  display: flex;
  align-items: baseline;

  p {
    margin-left: 10px;
  }
`;
