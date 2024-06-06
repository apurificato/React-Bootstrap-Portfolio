import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarItems"
        aria-controls="navbarItems"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarItems">
        <NavLink to="/about-me">About Me</NavLink>
        <NavLink to="/work">My Work</NavLink>
        <NavLink to="/contact-me">Contact Me</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
