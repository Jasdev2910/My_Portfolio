import { Briefcase } from "lucide-react";
import Section from "./Section.jsx";
import { experience } from "../data/portfolio.js";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 / Career"
      title="Experience"
      description="Engineering work across warehouse automation and real-time chat — focused on reliability, performance and clean systems."
    >
      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline-item reveal" key={`${job.company}-${job.period}`}>
            <div className="card timeline-card">
              <div className="card-top">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">
                    <Briefcase size={15} /> {job.company}
                    <span className="company-context"> · {job.context}</span>
                  </p>
                </div>
                <span className="period">{job.period}</span>
              </div>

              <div className="tag-list">
                {job.stack.map((tech) => (
                  <span className="tag" key={tech}>{tech}</span>
                ))}
              </div>

              <ul className="highlights">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
