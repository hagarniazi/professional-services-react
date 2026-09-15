import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${menuOpen ? " navbar-menu-open" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="navbar-logo-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <rect
                x="2.5"
                y="2.5"
                width="19"
                height="19"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M2.5 9.5h19M2.5 14.5h19M9.5 2.5v19M14.5 2.5v19"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </span>
          <span className="navbar-logo-text">LOGO</span>
        </Link>

        <div className="navbar-right">
          <div className={`navbar-links${menuOpen ? " is-open" : ""}`}>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </div>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            type="button"
          >
            <span className={theme === "light" ? "moon-icon" : "sun-icon"}>
              {theme === "light" ? "☾" : "☀"}
            </span>
          </button>

          <button
            className="navbar-menu"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
