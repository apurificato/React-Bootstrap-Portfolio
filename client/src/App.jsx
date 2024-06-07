import { useState } from "react";
import { createContext } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Work from "./pages/Work";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about-me" element={<AboutMe />} />

          <Route path="/my-work" element={<Work />} />

          <Route path="/contact-me" element={<ContactMe />} />

          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
