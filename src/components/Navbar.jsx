import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        Logo
      </a>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <button className="navbar-menu" aria-label="Open navigation menu">
        ☰
      </button>
    </nav>
  );
}

export default Navbar;