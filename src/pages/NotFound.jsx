import { Link } from "react-router-dom";
import Button from "../components/Button";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-content">
        <p className="not-found-label">ERROR</p>
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Page not found</h2>
        <p className="not-found-text">
          The page you are looking for doesn&apos;t exist or may have been
          moved. Return home to continue browsing.
        </p>
        <Link to="/" className="not-found-action">
          <Button>Back to Home</Button>
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
