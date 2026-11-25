import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import SocialIcon from "./SocialIcon.jsx";
import { profile } from "../data/portfolio.js";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0, 0.25, 0.5] }
    );

    links.forEach(({ href }) => {
      const element = document.getElementById(href.slice(1));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a className="brand" href="#about" onClick={() => setOpen(false)}>
          {profile.firstName}
          <span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={active === href.slice(1) ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-ghost nav-icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <SocialIcon name="github" size={17} />
          </a>
          <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noreferrer">
            <Download size={16} /> Resume
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Resume <Download size={15} />
          </a>
        </nav>
      )}
    </header>
  );
}
