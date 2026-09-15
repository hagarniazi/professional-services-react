import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      <main>
        <section className="contact-hero">
          <div className="contact-breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Contact us</span>
          </div>

          <h1>Contact us</h1>
          <p>Have questions? We're just a message away.</p>
        </section>

        <section className="contact-content">
          <div className="contact-information">
            <div className="office-section">
              <h2>Our office</h2>
              <p>
                101 Main street, Townsville, NY
                <br />
                40987
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-detail">
                <h3>Phone</h3>
                <p>(000) 123 4567</p>
              </div>

              <div className="contact-detail">
                <h3>Email</h3>
                <p>hello@ourwebsite.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Get in touch</h2>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Placeholder text"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Contact phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Placeholder text"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Placeholder text"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Placeholder text"
                ></textarea>
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;