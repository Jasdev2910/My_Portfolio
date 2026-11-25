import { useState } from "react";
import { Check, Mail, Phone, Send } from "lucide-react";
import Section from "./Section.jsx";
import SocialIcon from "./SocialIcon.jsx";
import { profile } from "../data/portfolio.js";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const subject = encodeURIComponent(data.get("subject") || `Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${name}\n${data.get("email")}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="05 / Say hello"
      title="Let's build something"
      description="Have a role, a project or an idea in mind? My inbox is open — let's talk."
    >
      <div className="contact-layout">
        <div className="contact-info reveal">
          <h3>Get in touch</h3>
          <p>
            I'm always interested in backend and full-stack work, especially systems
            that need to be fast and dependable.
          </p>
          <div className="contact-lines">
            <a href={`mailto:${profile.email}`}><Mail size={17} /> {profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}><Phone size={17} /> {profile.phone}</a>
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
          </div>
        </div>

        <form className="card contact-form reveal" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              <span>Your name</span>
              <input name="name" type="text" placeholder="Jane Doe" required />
            </label>
            <label>
              <span>Your email</span>
              <input name="email" type="email" placeholder="jane@example.com" required />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input name="subject" type="text" placeholder="What's this about?" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="5" placeholder="Tell me a little about it..." required />
          </label>
          <button className="btn btn-primary submit-button" type="submit">
            <Send size={16} /> Send message
          </button>
          <p className="form-note">
            This opens your email app with the message pre-filled — nothing is stored on this site.
          </p>
          {submitted && (
            <p className="form-success"><Check size={15} /> Your email app should be opening now.</p>
          )}
        </form>
      </div>
    </Section>
  );
}
