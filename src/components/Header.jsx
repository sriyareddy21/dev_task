import { useNavigate } from "react-router-dom";

const Header = ({
  title = "Page",
  showBack = true,
}) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      {showBack && (
        <button
          className="back"
          onClick={() => navigate(-1)}
          type="button"
        >
          ←
        </button>
      )}

      <h3>{title}</h3>
    </header>
  );
};

export default Header;