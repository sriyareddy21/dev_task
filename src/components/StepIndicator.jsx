const StepIndicator = ({ step = 1, total = 4 }) => {
  const percentage = (step / total) * 100;

  return (
    <div className="step-indicator">
      <p>
        Step {step} of {total}
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default StepIndicator;