import { Link } from "react-router-dom";
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
      <Link to="/" className="navbar-logo">
        Logo
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
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