import "./Card.css";

function Card({ title, description, image, children }) {
  return (
    <article className="card">
      {image && (
        <img
          className="card-image"
          src={image}
          alt={title || "Card image"}
        />
      )}

      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}

        {description && (
          <p className="card-description">{description}</p>
        )}

        {children}
      </div>
    </article>
  );
}

export default Card;