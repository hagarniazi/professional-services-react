import "./Footer.css";
import icon1 from "../assets/Icon button.svg";
import icon2 from "../assets/Icon button (1).svg";
import icon3 from "../assets/Icon button (2).svg";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-column">
          <h3>MORE</h3>
          <a href="#">FAQ</a>
          <a href="#">Shipping & returns</a>
          <a href="#">Contact</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>

        <div className="footer-column">
          <h3>EMAIL LIST</h3>
          <a href="#">FAQ</a>
          <a href="#">Shipping & returns</a>
          <a href="#">Contact</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>

        <div className="footer-column footer-about">
          <h3>ABOUT US</h3>
          <p>
            Helping businesses thrive with tailored
            solutions and expert guidance. Driven
            by innovation, we focus on real results
            and lasting partnerships.
          </p>
        </div>

        <div className="footer-column">
          <h3>FOLLOW US ON SOCIAL MEDIA</h3>

          <div className="social-icons">
           <a href="#">
           <img src={icon1} alt="Instagram" />
           </a>

            <a href="#">
            <img src={icon2} alt="Pinterest" />
            </a>

            <a href="#">
           <img src={icon3} alt="TikTok" />
           </a>
           </div>

      </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">FAQ</a>
          <a href="#">Shipping & returns</a>
          <a href="#">Contact</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>

        <p>© 2026 Professional Services. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;