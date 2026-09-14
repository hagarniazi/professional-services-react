
import "./Services.css";

import { Link } from "react-router-dom";
import useFetchMock from "../hooks/useFetchMock";
import service1 from "../assets/services/image 1.png";
import service2 from "../assets/services/image 2.png";
import service3 from "../assets/services/image 3.png";
import service4 from "../assets/services/image 4.png";

const serviceImages = [
  service1,
  service2,
  service3,
  service4,
];

function Services() {
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
    <main className="services-page">

      {/* Page Header */}
      <section className="services-header">
        <span className="services-label">Home/</span>

        <h1>Services</h1>

        <p>What we do best</p>
      </section>

      {/* Intro */}
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

      {/* Services */}
      <section className="services-list">
        {services.map((service, index) => (
          <Link to={`/services/${service.id}`} className="service-link">
            <article className="service-item" key={service.id}>
              <div className="service-image">
                <img
                  src={serviceImages[index]}
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