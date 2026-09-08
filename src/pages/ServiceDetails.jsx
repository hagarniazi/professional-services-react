import React from "react";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  return (
    <div className="service-details-page">
      {/* Navbar */}
      <header className="service-navbar">
        <div className="service-logo">Logo</div>

        <nav className="service-nav-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* Hero / Service Intro */}
        <section className="service-intro">
          <div className="service-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Strategic Planning Services</span>
          </div>

          <h1>Strategic Planning Services</h1>

          <p>
            Our Strategic Planning Services are designed to help you set clear
            goals and map out a path to achieve them. We work closely with you
            to develop actionable strategies that align with your vision and
            priorities, ensuring every step moves you closer to success.
          </p>
        </section>

        {/* Process */}
        <section className="service-process">
          <h2>Our process</h2>

          <div className="process-content">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </section>

        {/* Previous Projects */}
        <section className="previous-projects">
          <h2>Previous projects</h2>

          <div className="project-images">
            <div className="project-image project-image-one"></div>
            <div className="project-image project-image-two"></div>
            <div className="project-image project-image-three"></div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="success-stories">
          <h2>Success stories</h2>

          <div className="stories-grid">
            <article className="story-card">
              <p className="story-text">
                As a small business owner, finding a reliable cleaning service
                was a top priority. Ever since I started using this service, my
                office has never looked better! The team is punctual, thorough,
                and always goes the extra mile. They’ve truly taken the hassle
                out of maintaining a clean and professional workspace. I can’t
                recommend them enough!
              </p>

              <h3>James Rodriguez</h3>
              <span>Owner - Rodriguez &amp; Co. Consulting</span>
            </article>

            <article className="story-card">
              <p className="story-text">
                I was struggling to keep up with the demands of managing
                multiple properties, but this service has been a lifesaver. The
                team is always reliable, professional, and responsive to
                last-minute requests. They’ve made my life so much easier, and I
                can focus on other priorities knowing my properties are in good
                hands.
              </p>

              <h3>Emily Nguyen</h3>
              <span>Property Manager - Nguyen Realty Group</span>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section className="get-in-touch">
          <div className="contact-intro">
            <h2>Get in touch</h2>
            <p>
              Have a question? Let us know! We’re dedicated to providing the
              support you need.
            </p>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Placeholder text" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" type="tel" placeholder="Placeholder text" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Placeholder text" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Placeholder text"
              ></textarea>
            </div>

            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="service-footer">
        <div className="footer-top">
          <div className="footer-column footer-about">
            <h3>About us</h3>
            <p>
              Helping businesses thrive with tailored solutions and expert
              guidance. Driven by innovation, we focus on real results and
              lasting partnerships.
            </p>

            <h4>Follow us on Social media</h4>
          </div>

          <div className="footer-column">
            <h3>More</h3>
            <a href="/faq">FAQ</a>
            <a href="/shipping-returns">Shipping &amp; returns</a>
            <a href="/contact">Contact</a>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>

          <div className="footer-column">
            <h3>Email list</h3>
            <a href="/faq">FAQ</a>
            <a href="/shipping-returns">Shipping &amp; returns</a>
            <a href="/contact">Contact</a>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Copyright 2024</span>
          <span className="footer-logo">Logo</span>
        </div>
      </footer>
    </div>
  );
};

export default ServiceDetails;