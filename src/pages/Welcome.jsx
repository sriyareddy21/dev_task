import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import StepIndicator from "../components/StepIndicator";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h2>Welcome to PopX</h2>

      <p>
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <Button onClick={() => navigate("/create-account")}>
        Create Account
      </Button>

      <Button
        variant="secondary"
        onClick={() => navigate("/signin")}
      >
        Already Registered? Login
      </Button>

      <StepIndicator step={1} total={4} />
    </div>
  );
};

export default Welcome;