import logo from '../assets/img/argentBankLogo.png';

import LogButton from './LogButton';

function Header(){
    return( 
    <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
       <LogButton/>
    </nav>)
}

export default Header;