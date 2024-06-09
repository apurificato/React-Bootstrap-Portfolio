// import { useState } from "react";
// import { createContext } from "react";

import { NavLink } from "react-router-dom";
// import ReactSwitch from "react-switch";

// export const ThemeContext = createContext("dark");

function Header() {
  // const [theme, setTheme] = useState("dark");

  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };

  return (
    <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid justify-content-between">
          <div className="logo-wrapper">
            <a href="/" className="navbar-brand">
              <img className="brand-logo" src="/AP-Logo.svg"></img>
            </a>
          </div>
          <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarText"
          >
            <div className="navbar-nav">
              <NavLink to="/about-me">About Me</NavLink>
              <NavLink to="/my-work">My Work</NavLink>
              <NavLink to="/contact-me">Contact Me</NavLink>
              <NavLink to="/resume">Resume</NavLink>
            </div>
          </div>
          {/* <div className="switch d-flex align-items-center px-5">
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
              <label className="px-2">{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            </div> */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
