export default function Section({ id, eyebrow, title, description, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
          {description && <p className="section-desc">{description}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
