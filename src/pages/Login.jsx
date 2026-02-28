import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import InputField from "../components/InputField";
import StepIndicator from "../components/StepIndicator";

const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <Header title="Signin to your PopX account" />

      <p>
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit,
      </p>

      <InputField
        label="Email Address"
        name="email"
        value={login.email}
        onChange={handleChange}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        value={login.password}
        onChange={handleChange}
      />

      <Button
        onClick={() => navigate("/account")}
        disabled={!login.email || !login.password}
      >
        Login
      </Button>

      <StepIndicator step={2} total={4} />
    </div>
  );
};

export default Login;