import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Card from "./components/Card";
import SectionWrapper from "./components/SectionWrapper";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <SectionWrapper>
          <h1>Base Components</h1>

          <p>
            Reusable components for the Professional Services project.
          </p>

          <Button>Contact Us</Button>

          <div className="component-grid">
            <Card
              title="Service Card"
              description="Reusable card for services."
            />

            <Card
              title="Team Card"
              description="Reusable card for team members."
            />

            <Card
              title="Project Card"
              description="Reusable card for projects."
            />
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </>
  );
}

export default App;