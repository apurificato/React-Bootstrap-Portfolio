import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="d-flex flex-column align-items-right justify-content-between">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex flex-row justify-content-between align-items-right">
          <div className="logo-wrapper">
            <a href="/" className="navbar-brand">
              <img src="/AP-Logo.svg"></img>
            </a>
            <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarText">
            <NavLink to="/about-me">About Me</NavLink>
            <NavLink to="/work">My Work</NavLink>
            <NavLink to="/contact-me">Contact Me</NavLink>
            <NavLink to="/resume">Resume</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
