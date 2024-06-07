import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="d-flex flex-column">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="logo-wrapper justify-content-end">
            <a href="/" className="navbar-brand">
              <img className="brand-logo" src="/AP-Logo.svg"></img>
            </a>
            <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarText">
            <NavLink to="/about-me">About Me</NavLink>
            <NavLink to="/my-work">My Work</NavLink>
            <NavLink to="/contact-me">Contact Me</NavLink>
            <NavLink to="/resume">Resume</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
