import React from "react";

import { Link, useParams } from "react-router-dom";

import useFetchMock from "../hooks/useFetchMock";

import "./ServiceDetails.css";

const ServiceDetails = () => {

  const { serviceId } = useParams();

  const { data: services, loading, error } = useFetchMock(
    "/mockData/services.json"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const service = services.find(
    (item) => String(item.id) === String(serviceId)
  );

  return (
    <div className="service-details-page">

      <main>
        {/* Hero / Service Intro */}
        <section className="service-intro">
          <div className="service-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>{service?.title}</span>
          </div>

          <h1>{service?.title}</h1>

          <p>{service?.description}</p>
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
    </div>
  );
};

export default ServiceDetails;