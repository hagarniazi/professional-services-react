import "./Services.css";
import { Link } from "react-router-dom";
import useFetchMock from "../hooks/useFetchMock";
import service1 from "../assets/services/image 1.png";
import service2 from "../assets/services/image 2.png";
import service3 from "../assets/services/image 3.png";
import service4 from "../assets/services/image 4.png";

const serviceImages = [service1, service2, service3, service4];

function Services() {
  const { data: services, loading, error } = useFetchMock(
    "/mockData/services.json"
  );

  if (loading) {
    return <p className="services-status">Loading...</p>;
  }

  if (error) {
    return <p className="services-status">{error}</p>;
  }

  return (
    <main className="services-page">
      <section className="services-header">
        <h1>Services</h1>
        <p className="services-subtitle">What we do best</p>
      </section>

      <section className="services-intro">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p>
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim.
        </p>
      </section>

      <section className="services-list">
        {services &&
          services.map((service, index) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="service-link"
            >
              <article className="service-item">
                <div className="service-image">
                  <img
                    src={serviceImages[index % serviceImages.length]}
                    alt={service.title}
                  />
                </div>
                <div className="service-content">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </article>
            </Link>
          ))}
      </section>
    </main>
  );
}

export default Services;
