import logo from "../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";

import LogButton from "./LogButton";

function Header() {
  return (
    <nav className="main-nav">
      <Link to="/">
        <a className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
      </Link>
      <LogButton />
    </nav>
  );
}

export default Header;
