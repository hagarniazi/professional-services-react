import "./About.css";

import SectionWrapper from "../components/SectionWrapper";
import team from "../data/team.json";
import aboutImage from "../assets/about-image.svg";

function About() {
  return (
    <SectionWrapper className="about">
      <div className="about-hero">
        <p className="breadcrumb">Home /</p>

        <h1 className="about-title">Our company</h1>

        <p className="about-subtitle">
          Guided by principles, driven by results
        </p>
      </div>
      
      <img
  src={aboutImage}
  alt="Our Company"
  className="about-image"
/>

<section className="about-content">
  <h2>Our Story</h2>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
    dis parturient montes, nascetur ridiculus.
  </p>

  <p>
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
    Nulla consequat massa quis enim.
  </p>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
    dis parturient montes, nascetur ridiculus.
  </p>
</section>

<section className="about-content">
  <h2>What we do</h2>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
    dis parturient montes, nascetur ridiculus.
  </p>

  <p>
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
    Nulla consequat massa quis enim.
  </p>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
    dis parturient montes, nascetur ridiculus.
  </p>
</section>


    </SectionWrapper>
  );
}

export default About;