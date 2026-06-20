import React from "react";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import './footer.css';
export default function Footer({ scrollTo }) {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-copy">© 2026Guna Sekhar. All Rights Reserved.</div>
      
        <div className="footer-socials">
          <a href="https://github.com/gunasekharravada" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/guna-sekhar-ravada-060653320 " target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="mailto:gunasekharravada@gmail.com" className="social-btn" aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}