import { useState } from "react";
import "./Contact.css";

const API_URL =
  "https://gig-program-apis-production.up.railway.app/api/contact/";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-container">
          <h1>Contact us</h1>
          <p>Have questions? We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="contact-info">
        <div className="contact-container contact-info-grid">
          <div className="contact-info-item">
            <span className="contact-info-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path
                  d="M12 21s7-5.33 7-11a7 7 0 1 0-14 0c0 5.67 7 11 7 11Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            <h2>OUR OFFICE</h2>
            <p>
              101 Main street, Townsville, NY
              <br />
              40987
            </p>
          </div>

          <div className="contact-info-item">
            <span className="contact-info-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path
                  d="M6.5 4.5h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 4 1.5v3A2 2 0 0 1 17.5 19 13.5 13.5 0 0 1 4 5.5a2 2 0 0 1 2.5-1Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2>PHONE</h2>
            <p>(000) 123 4567</p>
          </div>

          <div className="contact-info-item">
            <span className="contact-info-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <rect
                  x="3.5"
                  y="5.5"
                  width="17"
                  height="13"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="m4 7 8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2>EMAIL</h2>
            <p>hello@ourwebsite.com</p>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-container contact-form-wrapper">
          <h2>GET IN TOUCH</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Contact phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send
              <span className="contact-submit-arrow" aria-hidden="true">
                ↗
              </span>
            </button>

            {status && (
              <p
                className={`contact-status${
                  status.includes("Failed") ? " contact-status-error" : ""
                }${
                  status.includes("successfully")
                    ? " contact-status-success"
                    : ""
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
