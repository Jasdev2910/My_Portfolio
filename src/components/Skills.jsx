import { Code2, Database, Server, Wrench } from "lucide-react";
import Section from "./Section.jsx";
import { skillGroups } from "../data/portfolio.js";

const icons = [Code2, Server, Database, Wrench];

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="01 / Toolkit"
      title="Skills & technologies"
      description="The tools I reach for day to day — from distributed backends to interfaces people actually enjoy using."
    >
      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article className="card skill-card reveal" key={group.title}>
              <div className="skill-head">
                <span className="skill-icon"><Icon size={19} /></span>
                <h3>{group.title}</h3>
              </div>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
