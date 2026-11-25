import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Section from "./Section.jsx";
import SocialIcon from "./SocialIcon.jsx";
import { projects } from "../data/portfolio.js";

const filters = ["All", "Full Stack", "Frontend"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="03 / Work"
      title="Selected projects"
      description="A few things I've designed, built and shipped — side projects and production work alike."
    >
      <div className="filters reveal" role="group" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            type="button"
            key={item}
            className={`filter ${filter === item ? "filter-active" : ""}`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map((project) => (
          <article className="card project-card animate-in" key={project.title}>
            <div className="project-top">
              <div>
                <h3>{project.title}</h3>
                <span className="period">{project.period}</span>
              </div>
              {project.featured && <span className="badge">Featured</span>}
            </div>

            <p className="project-desc">{project.description}</p>

            {project.highlights?.length > 0 && (
              <ul className="project-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}

            <div className="tag-list">
              {project.stack.map((tech) => (
                <span className="tag" key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                <SocialIcon name="github" size={16} /> Code
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> Live demo
                </a>
              )}
              <ArrowUpRight className="project-arrow" size={18} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
