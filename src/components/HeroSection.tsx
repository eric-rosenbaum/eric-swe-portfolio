import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const techStack = ["Python", "JavaScript", "TypeScript", "SQL", "React", "Node.js"];

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "90px 5% 60px",
      }}
    >
      {/* Mesh blobs */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-80px",
          width: "580px",
          height: "480px",
          background: "rgba(26, 92, 58, 0.13)",
          borderRadius: "50%",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          width: "400px",
          height: "380px",
          background: "rgba(42, 122, 79, 0.09)",
          borderRadius: "50%",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "320px",
          height: "320px",
          background: "rgba(184, 212, 194, 0.35)",
          borderRadius: "50%",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* Main layout */}
      <div
        className="hero-layout"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "48px",
        }}
      >
        {/* Content */}
        <div style={{ flex: 1, minWidth: "280px", maxWidth: "620px" }}>
          {/* H1 */}
          <h1
            className="fade-up"
            style={{
              animationDelay: "0ms",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(50px, 8vw, 84px)",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1.05,
              color: "var(--text)",
              margin: "0 0 20px",
            }}
          >
            Hi, I'm{" "}
            <span style={{ color: "var(--accent)" }}>Eric</span>
            <br />
            Rosenbaum.
          </h1>

          {/* Subtitle */}
          <p
            className="fade-up"
            style={{
              animationDelay: "120ms",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(18px, 2.5vw, 22px)",
              fontWeight: 600,
              color: "var(--text)",
              margin: "0 0 14px",
            }}
          >
            Full-Stack Software Engineer
          </p>

          {/* Description */}
          <p
            className="fade-up"
            style={{
              animationDelay: "240ms",
              fontSize: "15px",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "520px",
              margin: "0 0 28px",
            }}
          >
            2+ years building full-stack and data-driven applications.
            I specialize in Python, JavaScript, SQL, and AI integrations
            to deliver software solutions that empower people to make data-driven decisions.
          </p>

          {/* Tech pills */}
          <div
            className="fade-up"
            style={{
              animationDelay: "360ms",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "36px",
            }}
          >
            {techStack.map((tech) => (
              <TechPill key={tech} label={tech} />
            ))}
          </div>

          {/* Buttons */}
          <div
            className="fade-up hero-buttons"
            style={{
              animationDelay: "480ms",
              display: "flex",
              gap: "12px",
              marginBottom: "32px",
              flexWrap: "wrap",
            }}
          >
            <PrimaryButton onClick={() => scrollToSection("projects")}>
              View Projects
            </PrimaryButton>
            <OutlineButton onClick={() => scrollToSection("contact")}>
              Get in Touch
            </OutlineButton>
          </div>

          {/* Social icons */}
          <div
            className="fade-up"
            style={{ animationDelay: "600ms", display: "flex", gap: "10px" }}
          >
            <SocialIconButton
              href="https://github.com/eric-rosenbaum"
              label="GitHub"
            >
              <Github size={17} />
            </SocialIconButton>
            <SocialIconButton
              href="https://www.linkedin.com/in/eric-rosenbaum/"
              label="LinkedIn"
            >
              <Linkedin size={17} />
            </SocialIconButton>
            <SocialIconButton
              href="mailto:ericrosenbaum77@gmail.com"
              label="Email"
            >
              <Mail size={17} />
            </SocialIconButton>
          </div>
        </div>

        {/* Photo */}
        <div
          className="fade-up hero-photo"
          style={{ animationDelay: "240ms", flexShrink: 0 }}
        >
          <img
            src="/images/headshot_outdoor.jpg"
            alt="Eric Rosenbaum"
            style={{
              borderRadius: "16px",
              width: "clamp(240px, 24vw, 340px)",
              height: "clamp(310px, 31vw, 440px)",
              objectFit: "cover",
              objectPosition: "center top",
              border: "3px solid var(--accent-light)",
              boxShadow: "0 8px 32px rgba(26, 92, 58, 0.12)",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
};

const TechPill = ({ label }: { label: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "5px 13px",
        borderRadius: "100px",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border-strong)"}`,
        background: hovered ? "var(--accent-light)" : "var(--surface)",
        color: hovered ? "var(--accent)" : "var(--muted)",
        fontSize: "12.5px",
        transition: "all 0.2s",
        cursor: "default",
      }}
    >
      {label}
    </span>
  );
};

const PrimaryButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#154d30" : "var(--accent)",
        color: "#fff",
        border: "none",
        padding: "11px 24px",
        borderRadius: "8px",
        fontFamily: "var(--font-body)",
        fontSize: "14px",
        fontWeight: 500,
        boxShadow: hovered
          ? "0 4px 20px rgba(26, 92, 58, 0.3)"
          : "0 2px 12px rgba(26, 92, 58, 0.25)",
        transform: hovered ? "translateY(-1px)" : "none",
        transition: "all 0.2s",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

const OutlineButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--accent-light)" : "var(--surface)",
        color: hovered ? "var(--accent)" : "var(--text)",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border-strong)"}`,
        padding: "11px 24px",
        borderRadius: "8px",
        fontFamily: "var(--font-body)",
        fontSize: "14px",
        fontWeight: 500,
        transition: "all 0.2s",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export const SocialIconButton = ({
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

export default HeroSection;
