const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`btn ${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;