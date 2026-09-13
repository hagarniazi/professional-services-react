import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        Logo
      </NavLink>

      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <span className={theme === "light" ? "moon-icon" : "sun-icon"}>
          {theme === "light" ? "☾" : "☀"}
        </span>
      </button>

      <button className="navbar-menu" aria-label="Open navigation menu">
        ☰
      </button>
    </nav>
  );
}

export default Navbar;