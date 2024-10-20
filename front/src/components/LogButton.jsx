import { Link } from "react-router-dom";

function LogButton() {
  return (
    <div>
      <Link to="/signin">
        <a className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </Link>
    </div>
  );
}

export default LogButton;
