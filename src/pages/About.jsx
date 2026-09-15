import "./About.css";
import officeImage from "../assets/services/image 2.png";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-container about-hero-text">
          <p className="about-label">ABOUT</p>
          <h1 className="about-title">Our company</h1>
          <p className="about-subtitle">
            Guided by principles, driven by results
          </p>
        </div>

        <div className="about-container about-hero-media">
          <img
            src={officeImage}
            alt="Our company workspace"
            className="about-image"
          />
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus.
          </p>
          <p>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus.
          </p>
        </div>
      </section>

      <section className="about-section about-section-last">
        <div className="about-container">
          <h2>What we do</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus.
          </p>
          <p>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
