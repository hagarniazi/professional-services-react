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
import service1 from "../assets/image (9).png";
import service2 from "../assets/image-container.png";
import service3 from "../assets/image-container (1).png";
import service4 from "../assets/image-container (2).png";
import "./Home.css";
import useFetchMock from "../hooks/useFetchMock";

function Home() {
  const { data: services, loading, error } = useFetchMock(
    "/mockData/services.json"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="home">

      {/* Hero */}
<section
  className="hero"
  style={{ backgroundImage: `url("${heroImage}")` }}
>
  <div className="hero-overlay">
    <h1>Welcome to our website</h1>

    <p>
      We provide professional services designed to help your
      business grow and achieve better results.
    </p>

    <Link to="/services">
      <Button>Explore Services</Button>
    </Link>
  </div>
</section>
      {/* Services */}
<SectionWrapper className="services-section">
  <div className="section-title">
    <p className="section-label">SERVICES</p>
    <h2>What we do best</h2>
  </div>

  <div className="services-grid">
    {services.map((service, index) => {
      const images = [service1, service2, service3, service4];

      return (
        <Card
          key={service.id}
          title={service.title}
          description={service.description}
          image={images[index]}
        />
      );
    })}
  </div>
</SectionWrapper>
{/* Testimonials */}
<SectionWrapper className="testimonials-section">

  <div className="section-title">
    <p className="section-label">TESTIMONIALS</p>
    <h2>What our clients say about us</h2>
  </div>

  <div className="testimonials-grid">

    {testimonials.map((testimonial, index) => (
      <Card
        key={testimonial.id}
        title={testimonial.name}
        description={testimonial.content}
        image={
          index === 0
            ? profile1
            : index === 1
            ? profile2
            : profile3
        }
      >
        <p className="testimonial-role">
          {testimonial.role}
        </p>
      </Card>
    ))}

  </div>

  <div className="testimonials-button">
    <Button>Read more</Button>
  </div>

</SectionWrapper>
      
    </main>
  );
}

export default Home;