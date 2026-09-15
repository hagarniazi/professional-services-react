import { useParams } from "react-router-dom";
import useFetchMock from "../hooks/useFetchMock";
import testimonials from "../data/testimonials.json";
import service1 from "../assets/services/image 1.png";
import service2 from "../assets/services/image 2.png";
import service3 from "../assets/services/image 3.png";
import service4 from "../assets/services/image 4.png";
import project1 from "../assets/image (9).png";
import project2 from "../assets/image-container.png";
import project3 from "../assets/image-container (1).png";
import project4 from "../assets/image-container (2).png";
import project5 from "../assets/image (10).png";
import project6 from "../assets/services/image 2.png";
import profile1 from "../assets/Profile picture.png";
import profile2 from "../assets/Profile picture (1).png";
import profile3 from "../assets/Profile picture (2).png";
import "./ServiceDetails.css";

const serviceImages = [service1, service2, service3, service4];
const projectImages = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
];
const profileImages = [profile1, profile2, profile3];

function ServiceDetails() {
  const { serviceId } = useParams();
  const { data: services, loading, error } = useFetchMock(
    "/mockData/services.json"
  );

  if (loading) {
    return <p className="service-details-status">Loading...</p>;
  }

  if (error) {
    return <p className="service-details-status">{error}</p>;
  }

  const service = services?.find(
    (item) => String(item.id) === String(serviceId)
  );

  if (!service) {
    return <p className="service-details-status">Service not found.</p>;
  }

  const heroImage =
    serviceImages[(Number(service.id) - 1) % serviceImages.length];
  const stories = testimonials.slice(0, 2);

  return (
    <main className="service-details-page">
      {/* Hero */}
      <section className="sd-hero">
        <div className="sd-container sd-hero-text">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
        <div className="sd-container sd-hero-media">
          <img src={heroImage} alt={service.title} />
        </div>
      </section>

      {/* Our process */}
      <section className="sd-process">
        <div className="sd-container">
          <h2>Our process</h2>
          <div className="sd-process-content">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
      </section>

      {/* Previous projects */}
      <section className="sd-projects">
        <div className="sd-container">
          <h2>Previous projects</h2>
          <div className="sd-projects-grid">
            {projectImages.map((src, index) => (
              <div className="sd-project-item" key={`project-${index}`}>
                <img src={src} alt={`Previous project ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="sd-stories">
        <div className="sd-container">
          <h2>Success stories</h2>
          <div className="sd-stories-list">
            {stories.map((story, index) => (
              <article className="sd-story" key={story.id}>
                <img
                  className="sd-story-avatar"
                  src={profileImages[index % profileImages.length]}
                  alt={story.name}
                />
                <div className="sd-story-body">
                  <div className="sd-story-meta">
                    <h3>{story.name}</h3>
                    <span>{story.role}</span>
                  </div>
                  <p>{story.content}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="sd-contact">
        <div className="sd-container sd-contact-grid">
          <div className="sd-contact-intro">
            <h2>Get in touch</h2>
            <p>
              Have a question? Let us know! We&apos;re dedicated to providing
              the support you need.
            </p>
          </div>

          <form
            className="sd-contact-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sd-field">
              <span>Name</span>
              <input type="text" placeholder="Placeholder text" />
            </label>
            <label className="sd-field">
              <span>Email</span>
              <input type="email" placeholder="Placeholder text" />
            </label>
            <label className="sd-field">
              <span>Phone number</span>
              <input type="tel" placeholder="Placeholder text" />
            </label>
            <label className="sd-field">
              <span>Message</span>
              <textarea rows="4" placeholder="Placeholder text"></textarea>
            </label>
            <button type="submit" className="sd-submit">
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetails;
