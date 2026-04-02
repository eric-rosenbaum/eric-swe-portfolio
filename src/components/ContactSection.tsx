import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.15 }
    );
    [headRef, bodyRef].forEach((r) => {
      if (r.current) observer.observe(r.current);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: "var(--bg)", padding: "90px 5%" }}
    >
      <div ref={headRef} className="reveal section-head">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-sub" style={{ maxWidth: "480px" }}>
          Open to new opportunities, collaborations, and interesting
          conversations.
        </p>
      </div>

      <div
        ref={bodyRef}
        className="reveal"
        style={{ display: "flex", flexDirection: "column", gap: "24px" }}
      >
        {/* Contact chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          <ContactChip href="mailto:ericrosenbaum77@gmail.com" label="ericrosenbaum77@gmail.com">
            <Mail size={14} />
          </ContactChip>
          <ContactChip href="tel:+16107313848" label="(610) 731-3848">
            <Phone size={14} />
          </ContactChip>
        </div>

        {/* Social icon buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          <SocialIconButton href="https://github.com/eric-rosenbaum" label="GitHub">
            <Github size={17} />
          </SocialIconButton>
          <SocialIconButton
            href="https://www.linkedin.com/in/eric-rosenbaum/"
            label="LinkedIn"
          >
            <Linkedin size={17} />
          </SocialIconButton>
          <SocialIconButton href="mailto:ericrosenbaum77@gmail.com" label="Email">
            <Mail size={17} />
          </SocialIconButton>
        </div>
      </div>
    </section>
  );
};

const ContactChip = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 16px",
        borderRadius: "8px",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border-strong)"}`,
        background: hovered ? "var(--accent-light)" : "var(--surface)",
        color: hovered ? "var(--accent)" : "var(--muted)",
        fontSize: "14px",
        textDecoration: "none",
        transition: "all 0.2s",
      }}
    >
      {children}
      {label}
    </a>
  );
};

const SocialIconButton = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "8px",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border-strong)"}`,
        background: hovered ? "var(--accent-light)" : "var(--surface)",
        color: hovered ? "var(--accent)" : "var(--muted)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s",
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
};

export default ContactSection;
