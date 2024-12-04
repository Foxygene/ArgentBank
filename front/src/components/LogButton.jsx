import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function LogButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );

  const userStore = useSelector((state) => state.user);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");

    setToken(null);

    if (location.pathname === "/profile") {
      navigate("/signin");
    }
  };

  if (!token) {
    return (
      <div>
        <Link to="/signin" className="main-nav-item">
          <i className="fa fa-user-circle"></i> Sign In
        </Link>
      </div>
    );
  } else {
    return (
      <div className="main-nav-logged-in">
        <Link to="/profile" className="main-nav-item">
          <i className="fa fa-user-circle"></i> {userStore.body.firstName}
        </Link>
        <a href="#" onClick={handleLogout} className="main-nav-item">
          <i className="fa fa-sign-out"></i> Sign Out
        </a>
      </div>
    );
  }
}

export default LogButton;
