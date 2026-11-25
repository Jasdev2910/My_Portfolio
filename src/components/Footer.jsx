import { ArrowUp } from "lucide-react";
import SocialIcon from "./SocialIcon.jsx";
import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a className="brand" href="#about">
            {profile.firstName}<span>.</span>
          </a>
          <p>Software engineer building dependable systems and thoughtful interfaces.</p>
        </div>

        <div className="footer-right">
          <div className="hero-socials">
            <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <SocialIcon name="github" size={17} />
            </a>
            <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <SocialIcon name="linkedin" size={17} />
            </a>
            <a className="icon-link" href={profile.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X">
              <SocialIcon name="twitter" size={17} />
            </a>
          </div>
          <a className="back-to-top" href="#about">Back to top <ArrowUp size={15} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>Built with React &amp; Vite</span>
      </div>
    </footer>
  );
}
