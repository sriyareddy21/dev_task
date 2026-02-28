import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = ["/", "/signin", "/create-account", "/account"];

  const currentIndex = routes.indexOf(location.pathname);

  const goBack = () => {
    if (currentIndex > 0) {
      navigate(routes[currentIndex - 1]);
    }
  };

  const goHome = () => navigate("/");

  const goNext = () => {
    if (currentIndex < routes.length - 1) {
      navigate(routes[currentIndex + 1]);
    }
  };

  return (
    <div className="bottom-nav">
      <span className="nav-arrow" onClick={goBack}>
        ←
      </span>

      <div className="home-icon" onClick={goHome}>
        🏠
      </div>

      <span className="nav-arrow" onClick={goNext}>
        →
      </span>
    </div>
  );
};

export default BottomNav;