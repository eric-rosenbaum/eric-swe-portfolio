import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Swift", "C++", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    items: ["React", "Node.js", "Express", "Django", "Bootstrap"],
  },
  {
    label: "Data & ML",
    items: ["Pandas", "NumPy", "scikit-learn", "TensorFlow", "Matplotlib"],
  },
  {
    label: "Tools",
    items: ["Git / GitHub", "REST APIs", "Firebase", "Supabase", "Vercel", "Jupyter Notebook"],
  },
  {
    label: "AI",
    items: ["OpenAI APIs", "Cursor", "Retool"],
  },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
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
      id="skills"
      className="section-pad"
      style={{ background: "var(--surface)", padding: "90px 5%" }}
    >
      <div ref={headRef} className="reveal section-head">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-sub">The tools and languages I use to build things.</p>
      </div>

      <div ref={bodyRef} className="reveal">
        {/* Tab pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "28px",
          }}
        >
          {skillGroups.map((group, i) => (
            <TabPill
              key={group.label}
              label={group.label}
              active={activeTab === i}
              onClick={() => setActiveTab(i)}
            />
          ))}
        </div>

        {/* Skill items grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "10px",
          }}
        >
          {skillGroups[activeTab].items.map((item) => (
            <SkillItem key={item} label={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TabPill = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const highlighted = active || hovered;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "8px 18px",
        borderRadius: "100px",
        fontSize: "13px",
        border: `1px solid ${highlighted ? "var(--accent)" : "var(--border-strong)"}`,
        background: highlighted ? "var(--accent)" : "transparent",
        color: highlighted ? "#fff" : "var(--muted)",
        cursor: "pointer",
        transition: "all 0.2s",
        fontFamily: "var(--font-body)",
      }}
    >
      {label}
    </button>
  );
};

const SkillItem = ({ label }: { label: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "9px",
        padding: "9px 16px",
        borderRadius: "8px",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        background: hovered ? "var(--accent-light)" : "var(--bg)",
        color: hovered ? "var(--accent)" : "var(--text)",
        fontSize: "13.5px",
        transition: "all 0.2s",
        cursor: "default",
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "var(--accent)",
          flexShrink: 0,
        }}
      />
      {label}
    </div>
  );
};

export default SkillsSection;
