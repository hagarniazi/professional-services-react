import "./SectionWrapper.css";

function SectionWrapper({ children, className = "" }) {
  return (
    <section className={`section-wrapper ${className}`}>
      {children}
    </section>
  );
}

export default SectionWrapper;