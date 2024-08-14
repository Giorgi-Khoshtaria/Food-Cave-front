import { useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e: { target: { value: any } }) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handlePhoneNumberChange = (e: { target: { value: any } }) => {
    const newPhone = e.target.value;
    const numericPhone = newPhone.replace(/\D/g, "");
    setPhone(numericPhone);
  };

  const handlePasswordChange = (e: { target: { value: any } }) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleAdminChange = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsAdmin(e.target.checked);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleReset = () => {
    setEmail("");
    setIsAdmin(false);
    setPassword("");
    setPhone("");
    setEmailError("");
    setPasswordError("");
    setPhoneError("");
  };
  const url = import.meta.env.VITE_API_URL;

  const checkUserExistence = async () => {
    try {
      const response = await axios.post(`${url}/checkUserExistence`, {
        email,
        phone,
      });
      const data = response.data;
      return data.exists;
    } catch (error) {
      console.error("Error checking user existence:", error);
      return false;
    }
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:<>?~=\\[\];',./-])[A-Za-z\d!@#$%^&*()_+{}|:<>?~=\\[\];',./-]{8,25}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email || !password || !phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    const userExists = await checkUserExistence();

    if (userExists) {
      toast.error("User with this email or phone number already exists");
      return;
    }

    if (!validatePassword(password)) {
      toast.error(
        "Password must be 8-25 characters long and contain at least one uppercase letter, lowercase letter, digit, and special character"
      );
      return;
    }

    try {
      const response = await axios.post(`${url}/SignUp`, {
        email,
        password,
        phone,
        isAdmin,
      });
      console.log(response.data, "userRegister");
      toast.success("Registration successful");
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("An error occurred during registration");
    }

    handleReset();
  };

  return (
    <div>
      <ToastContainer />
      <Cards onSubmit={handleRegister}>
        <Card>
          <h1>Register</h1>
          <p>Email address *</p>
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={emailError ? "error" : ""}
          />

          {emailError && <ErrorMessage> {emailError}</ErrorMessage>}
          <p>Password *</p>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            className={passwordError ? "error" : ""}
          />
          <ShowPassword>
            <input type="checkbox" onChange={handleShowPasswordToggle} />
            <p>Show Password</p>
          </ShowPassword>
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          <p>Phone Number *</p>
          <Input
            type="tel"
            value={phone}
            onChange={handlePhoneNumberChange}
            className={phoneError ? "error" : ""}
          />
          {phoneError && <ErrorMessage>{phoneError}</ErrorMessage>}
          <CheckBox>
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={handleAdminChange}
            />{" "}
            <p>Admin</p>
          </CheckBox>
          <button type="submit">Register</button>
        </Card>
      </Cards>
    </div>
  );
};

export default SignUp;

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

  &.error {
    border-color: ${defaultTheme.colors.red};
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: left;
  margin-bottom: 15px;

  input {
    width: 50px;
  }
  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    margin-bottom: 10px;
  }
`;

const ErrorMessage = styled.div`
  font-size: 14px;
  color: ${defaultTheme.colors.red};
  margin-top: -10px;
  margin-bottom: 10px;
`;

const ShowPassword = styled.div`
  display: flex;
  align-items: baseline;
  p {
    margin-left: 10px;
  }
`;
