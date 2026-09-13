import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    // Hide success message if user edits the form again
    setSuccess("");
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    }

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("");

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess("Your message has been sent successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

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

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Placeholder text"
                  value={formData.name}
                  onChange={handleChange}
                />

                {errors.name && (
                  <span className="form-error">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Contact phone number</label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Placeholder text"
                  value={formData.phone}
                  onChange={handleChange}
                />

                {errors.phone && (
                  <span className="form-error">{errors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Placeholder text"
                  value={formData.email}
                  onChange={handleChange}
                />

                {errors.email && (
                  <span className="form-error">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Your message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Placeholder text"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                {errors.message && (
                  <span className="form-error">{errors.message}</span>
                )}
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
              </button>

              {success && (
                <p className="form-success">{success}</p>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;