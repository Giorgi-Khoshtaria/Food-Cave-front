import { useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "./AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ForgotPassword = () => {
  // const { userData } = useContext(AuthContext) || {}; // Handle possible absence of AuthContext

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const reset = () => {
    setEmail("");
    setNewPassword("");
    setRepeatPassword("");
    setShowPassword(false);
  };

  const validatePassword = (newPassword: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:<>?~=\\[\];\',./-])[A-Za-z\d!@#$%^&*()_+{}|:<>?~=\\[\];\',./-]{8,25}$/;
    return passwordRegex.test(newPassword);
  };
  const url = import.meta.env.VITE_API_URL;
  axios.defaults.withCredentials = true;
  const handlePasswordChange = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const emailExistsResponse = await axios.post(
        `${url}/checkUserExistence`,
        {
          email,
        }
      );
      const emailExistsData = emailExistsResponse.data;

      if (!email || !newPassword || !repeatPassword) {
        toast.error("Please fill in all required fields");
        return;
      }

      if (!emailExistsData.exists) {
        toast.error(
          "Email not registered. Please enter a valid email address."
        );
        return;
      }

      if (!validatePassword(newPassword)) {
        toast.error(
          "Password must be 8-25 characters long and contain at least one uppercase letter, lowercase letter, digit, and special character"
        );
        return;
      }

      if (newPassword !== repeatPassword) {
        toast.error("Passwords do not match.");
        return;
      }

      const response = await axios.post(`${url}/reset-password-request`, {
        email,
        newPassword,
      });

      console.log(response.data, "forgot password");
      toast.success("Password changed successfully.");
      reset();
      navigate("/Login_SignUp");
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <ToastContainer />
      <Container onSubmit={handlePasswordChange}>
        <div>
          <h1>Change Password</h1>

          <p>Email Password</p>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>New password</p>
          <Input
            type={showPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <p>Repeat password</p>
          <Input
            type={showPassword ? "text" : "password"}
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <ShowPassword>
            <input type="checkbox" onChange={handleShowPasswordToggle} />
            <p>Show Password</p>
          </ShowPassword>
          <button>Change</button>
          <Link to="/Login_SignUp">Go Back</Link>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;

const Container = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 100px 0;
  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
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
  -moz-appearance: textfield;
  appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ShowPassword = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  p {
    margin-left: 10px;
  }
`;
