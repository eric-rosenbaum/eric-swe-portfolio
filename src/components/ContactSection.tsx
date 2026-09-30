import { useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const EMAIL = "ericrosenbaum77@gmail.com";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <section id="contact" className="section">
      <div className="contact-panel reveal">
        <div className="contact-inner">
          <p className="section-label dark">Contact</p>
          <h2 className="contact-title">
            Get in <span>touch.</span>
          </h2>
          <p className="contact-sub">
            Open to new opportunities, collaborations, and interesting
            conversations.
          </p>

          <div className="contact-actions">
            <button className="copy-btn" onClick={copyEmail}>
              <Mail size={17} />
              {EMAIL}
              <em>{copied ? "Copied ✓" : "Copy"}</em>
            </button>
            <a className="contact-link" href="tel:+16107313848">
              <Phone size={16} />
              (610) 731-3848
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/eric-rosenbaum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              className="contact-link"
              href="https://github.com/eric-rosenbaum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Eric Rosenbaum</span>
        <span>Designed & built by Eric</span>
      </footer>
    </section>
  );
};

export default ContactSection;
