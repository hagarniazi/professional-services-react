import "./Home.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import SectionWrapper from "../components/SectionWrapper";
import testimonials from "../data/testimonials.json";
import profile1 from "../assets/Profile picture.png";
import profile2 from "../assets/Profile picture (1).png";
import profile3 from "../assets/Profile picture (2).png";
import heroImage from "../assets/image (10).png";
import service1 from "../assets/services/image 1.png";
import service2 from "../assets/services/image 2.png";
import service3 from "../assets/services/image 3.png";
import service4 from "../assets/services/image 4.png";
import storyImage from "../assets/services/image 2.png";
import project1 from "../assets/image (9).png";
import project2 from "../assets/image-container.png";
import project3 from "../assets/image-container (1).png";
import project4 from "../assets/image-container (2).png";
import project5 from "../assets/image (10).png";
import project6 from "../assets/services/image 4.png";
import useFetchMock from "../hooks/useFetchMock";

function Home() {
  const { data: services, loading, error } = useFetchMock(
    "/mockData/services.json"
  );

  if (loading) {
    return <p className="home-loading">Loading...</p>;
  }

  if (error) {
    return <p className="home-error">{error}</p>;
  }

  const serviceImages = [service1, service2, service3, service4];

  return (
    <main className="home">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url("${heroImage}")` }}
      >
        <div className="hero-overlay">
          <h1>Welcome to our website</h1>
          <p>
            We provide professional services designed to help your business grow
            and achieve better results.
          </p>
          <Link to="/contact">
            <Button>Get started</Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <SectionWrapper className="services-section">
        <div className="section-title">
          <p className="section-label">SERVICES</p>
          <h2>What we do best</h2>
        </div>

        <div className="services-grid">
          {services &&
            services.map((service, index) => (
              <Card
                key={service.id}
                title={service.title}
                description={service.description}
                image={serviceImages[index % serviceImages.length]}
              />
            ))}
        </div>
      </SectionWrapper>

      {/* Our Company / Story Section */}
      <SectionWrapper className="story-section">
        <div className="section-title">
          <p className="section-label">OUR COMPANY</p>
          <h2>Guided by principles, driven by results</h2>
        </div>
        <div className="story-content-wrapper">
          <div className="story-image-container">
            <img src={storyImage} alt="Our workspace" className="story-img" />
          </div>
          <div className="story-text-container">
            <h3>Our Story</h3>
            <p>
              With years of dedicated experience, our team focuses on creating
              exceptional spaces and deliver results that consistently exceed
              expectations. We combine precision craftsmanship with modern
              strategic vision.
            </p>
            <p>
              Every project represents a new opportunity to innovate, design with
              purpose, and build lasting relationships with our valued clients.
            </p>
            <p>
              We partner closely with each client to understand their goals,
              refine their vision, and deliver work that stands the test of time.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Projects Section (Dark Band) */}
      <section className="projects-section-dark">
        <div className="projects-container">
          <div className="section-header-flex">
            <div className="section-title left-aligned">
              <h2>Projects</h2>
            </div>
            <Link to="/services" className="view-more-link">
              View more &gt;
            </Link>
          </div>
          <div className="projects-mosaic-grid">
            <div className="mosaic-item item-large">
              <img src={project1} alt="Project 1" />
            </div>
            <div className="mosaic-item item-small">
              <img src={project2} alt="Project 2" />
            </div>
            <div className="mosaic-item item-large">
              <img src={project3} alt="Project 3" />
            </div>
            <div className="mosaic-item item-medium">
              <img src={project5} alt="Project 4" />
            </div>
            <div className="mosaic-item item-large">
              <img src={project4} alt="Project 5" />
            </div>
            <div className="mosaic-item item-small">
              <img src={project6} alt="Project 6" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <SectionWrapper className="testimonials-section">
        <div className="section-title">
          <p className="section-label">TESTIMONIALS</p>
          <h2>What our clients say about us</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials &&
            testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                title={testimonial.name}
                description={testimonial.content}
                image={
                  index === 0 ? profile1 : index === 1 ? profile2 : profile3
                }
              >
                <p className="testimonial-role">{testimonial.role}</p>
              </Card>
            ))}
        </div>

        <div className="testimonials-button">
          <Button variant="secondary">Read more</Button>
        </div>
      </SectionWrapper>

      {/* Get in Touch Section */}
      <section className="contact-cta-section">
        <div className="contact-cta-container">
          <div className="contact-cta-text">
            <h2>Get in touch</h2>
            <p>
              Ready to start your next project with us? Reach out and let&apos;s
              build something great together.
            </p>
          </div>
          <form
            className="contact-cta-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="cta-field">
              <span>Name</span>
              <input type="text" placeholder="Placeholder text" className="cta-input" />
            </label>
            <label className="cta-field">
              <span>Phone number</span>
              <input type="tel" placeholder="Placeholder text" className="cta-input" />
            </label>
            <label className="cta-field">
              <span>Email</span>
              <input type="email" placeholder="Placeholder text" className="cta-input" />
            </label>
            <label className="cta-field">
              <span>Message</span>
              <textarea
                placeholder="Placeholder text"
                className="cta-textarea"
                rows="3"
              ></textarea>
            </label>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Home;
