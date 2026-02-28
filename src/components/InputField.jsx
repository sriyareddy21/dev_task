const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  error = "",
  ...rest
}) => {
  const inputId = `input-${name}`;

  return (
    <div className="input-group">
      <label htmlFor={inputId}>
        {label}
      </label>

      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        {...rest}
      />

      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default InputField;