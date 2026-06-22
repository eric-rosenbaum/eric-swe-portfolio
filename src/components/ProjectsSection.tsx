import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nouriva",
    role: "Solo Founder & Developer",
    subtitle: "AI-Driven Nutritional Tracking",
    imageSrc: "/images/nouriva_photo.png",
    url: "https://nouriva.app/",
    tags: ["Swift", "Node.js", "Firebase", "OpenAI"],
    gradient: "linear-gradient(135deg, #e0eed8, #cce4d4)",
  },
  {
    id: 2,
    title: "FriendsFitnessChallenge",
    role: "Solo Founder & Developer",
    subtitle: "Group Fitness Competition Platform",
    imageSrc: "/images/friendsfitness_photo.png",
    url: "https://apps.apple.com/us/app/friendsfitnesschallenge/id6759629305",
    tags: ["TypeScript", "Swift", "Supabase"],
    gradient: "linear-gradient(135deg, #d8eae0, #c0dcc8)",
  },
  {
    id: 3,
    title: "CampCommand",
    role: "Co-Founder & Lead Engineer",
    subtitle: "Camp Operations Management Software",
    imageSrc: "/images/campcommand_photo.png",
    url: "https://www.campcommand.app/",
    tags: ["React", "TypeScript", "Node.js"],
    gradient: "linear-gradient(135deg, #e8f2ec, #d0e8d8)",
  },
  {
    id: 4,
    title: "Axonome",
    role: "Software Engineer",
    subtitle: "Neurodegeneration Resource Platform for Patients and Caregivers",
    imageSrc: "/images/axonome_photo.png",
    url: "https://axonome.vercel.app/",
    tags: ["React", "TypeScript", "Firebase"],
    gradient: "linear-gradient(135deg, #ddeee5, #c4ddd0)",
  },
];

const ProjectsSection = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.15 }
    );
    [headRef, gridRef].forEach((r) => {
      if (r.current) observer.observe(r.current);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="section-pad"
      style={{ background: "var(--bg)", padding: "90px 5%" }}
    >
      <div ref={headRef} className="reveal section-head">
        <p className="section-label">Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">A selection of things I've built and shipped.</p>
      </div>

      <div
        ref={gridRef}
        className="reveal projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  role,
  subtitle,
  imageSrc,
  url,
  tags,
  gradient,
}: {
  title: string;
  role: string;
  subtitle: string;
  imageSrc: string;
  url: string | null;
  tags: string[];
  gradient: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const cardStyle: React.CSSProperties = {
    display: "block",
    textDecoration: "none",
    background: "var(--surface)",
    border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
    borderRadius: "14px",
    overflow: "hidden",
    transform: hovered ? "translateY(-3px)" : "none",
    boxShadow: hovered
      ? "0 12px 40px rgba(26, 92, 58, 0.10)"
      : "0 8px 40px rgba(26, 92, 58, 0.08)",
    transition: "all 0.25s",
    cursor: url ? "pointer" : "default",
  };

  const body = (
    <>
      {/* Image area */}
      <div
        style={{
          height: "160px",
          background: gradient,
          overflow: "hidden",
        }}
      >
        {!imgError && (
          <img
            src={imageSrc}
            alt={title}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "20px" }}>
        <p
          style={{
            fontSize: "10.5px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 600,
            color: "var(--accent)",
            margin: "0 0 6px",
          }}
        >
          {role}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "16px",
            fontWeight: 600,
            color: "var(--text)",
            margin: "0 0 6px",
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 14px" }}>
          {subtitle}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "11.5px",
                padding: "3px 9px",
                borderRadius: "4px",
                background: "var(--accent-light)",
                color: "var(--accent)",
                border: "1px solid var(--border-strong)",
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link row — only for projects with a URL */}
        {url && (
          <div
            style={{
              marginTop: "16px",
              paddingTop: "14px",
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <ExternalLink size={13} color="var(--muted)" />
            <span
              style={{
                fontSize: "12.5px",
                color: hovered ? "var(--accent)" : "var(--muted)",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
            >
              Visit site
            </span>
          </div>
        )}
      </div>
    </>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={cardStyle}
      >
        {body}
      </a>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={cardStyle}
    >
      {body}
    </div>
  );
};

export default ProjectsSection;
