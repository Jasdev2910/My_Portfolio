import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react";
import SocialIcon from "./SocialIcon.jsx";
import { profile, stats } from "../data/portfolio.js";

function useTypewriter(words, speed = 65, pause = 1700) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }

    const word = words[wordIndex];
    const fullyTyped = !deleting && text === word;
    const fullyDeleted = deleting && text === "";
    const delay = fullyTyped ? pause : deleting ? speed / 2 : speed;

    const timer = window.setTimeout(() => {
      if (fullyTyped) setDeleting(true);
      else if (fullyDeleted) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typedRole = useTypewriter(profile.roles);

  return (
    <section id="about" className="hero">
      <div className="container hero-grid">
        <div className="hero-heading reveal">
          <span className="eyebrow">{profile.availability}</span>
          <h1>
            Hi, I'm <span className="accent">{profile.firstName}</span>
            <br />
            {profile.title}.
          </h1>

          <p className="hero-role">
            <span className="hero-role-label">I build as a&nbsp;</span>
            <span className="typed">{typedRole}</span>
            <span className="cursor" aria-hidden="true" />
          </p>
        </div>

        <div className="hero-visual reveal">
          <img
            className="portrait"
            src={profile.imageCutout}
            onError={(event) => {
              event.currentTarget.src = profile.image;
            }}
            alt={`Portrait of ${profile.name}`}
          />
          <div className="status-card">
            <span className="status-dot" aria-hidden="true" />
            <div>
              <strong>Currently building</strong>
              <span>Erlang, Kafka &amp; web apps</span>
            </div>
          </div>
          <a className="scroll-cue" href="#skills" aria-label="Scroll to skills">
            <ArrowDown size={16} /> Scroll
          </a>
        </div>

        <div className="hero-body reveal">
          <p className="hero-desc">{profile.description}</p>

          <div className="hero-meta">
            <span><MapPin size={15} /> {profile.location}</span>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View projects <ArrowUpRight size={17} />
            </a>
            <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">
              Download resume
            </a>
          </div>

          <div className="hero-socials">
            <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <SocialIcon name="github" size={18} />
            </a>
            <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <SocialIcon name="linkedin" size={18} />
            </a>
            <a className="icon-link" href={profile.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X">
              <SocialIcon name="twitter" size={18} />
            </a>
            <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="container stats-strip reveal">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
