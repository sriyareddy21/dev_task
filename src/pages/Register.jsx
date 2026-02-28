import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import InputField from "../components/InputField";
import StepIndicator from "../components/StepIndicator";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid =
    form.fullName &&
    form.phone &&
    form.email &&
    form.password &&
    form.agency;

  return (
    <div className="register-container">
      <Header title="Create your PopX account" />

      <InputField
        label="Full Name*"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
      />

      <InputField
        label="Phone Number*"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />

      <InputField
        label="Email Address*"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <InputField
        label="Password*"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <InputField
        label="Company Name"
        name="company"
        value={form.company}
        onChange={handleChange}
      />

      <div className="radio-group">
        <p>Are you an Agency?*</p>

        <label>
          <input
            type="radio"
            name="agency"
            value="yes"
            checked={form.agency === "yes"}
            onChange={handleChange}
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="agency"
            value="no"
            checked={form.agency === "no"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <Button
        disabled={!isFormValid}
        onClick={() => navigate("/account")}
      >
        Create Account
      </Button>

      <StepIndicator step={3} total={4} />
    </div>
  );
};

export default Register;