import { GraduationCap, MapPin } from "lucide-react";
import Section from "./Section.jsx";
import { certifications, education } from "../data/portfolio.js";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="04 / Background"
      title="Education & certifications"
      description="Where the fundamentals came from — and how I keep sharpening them."
    >
      <div className="education-layout">
        {education.map((item) => (
          <article className="card education-card reveal" key={item.school}>
            <div className="education-icon"><GraduationCap size={24} /></div>
            <div>
              <h3>{item.degree}</h3>
              <p className="company">{item.school}</p>
              <p className="education-detail">{item.detail}</p>
              <p className="period">
                {item.period} <span className="dot-separator">·</span>
                <MapPin size={13} /> {item.location}
              </p>
            </div>
          </article>
        ))}

        <div className="card cert-card reveal">
          <h3>Certifications</h3>
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert.title}>
                <div>
                  <strong>{cert.title}</strong>
                  <span>{cert.issuer}</span>
                </div>
                <span className="period">{cert.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
