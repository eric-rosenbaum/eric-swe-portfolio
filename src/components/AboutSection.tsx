import { useEffect, useRef, useState } from "react";
import { Briefcase, Users, Smartphone } from "lucide-react";

const stats = [
  { icon: Briefcase, number: "2+", label: "Years Experience" },
  { icon: Users,     number: "1000+", label: "Users" },
  { icon: Smartphone, number: "2",  label: "Apps Launched" },
];

const timeline = [
  {
    date: "July 2025 – Present",
    role: "Solutions Engineer",
    company: "LinkIt!, New York, NY",
  },
  {
    date: "July 2024 – July 2025",
    role: "Data Analyst",
    company: "LinkIt!, New York, NY",
  },
  {
    date: "May 2024",
    role: "B.S. Mechanical Engineering",
    company: "Tufts University · GPA 3.83 · Summa Cum Laude",
  },
];

const AboutSection = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.15 }
    );
    [headRef, contentRef].forEach((r) => {
      if (r.current) observer.observe(r.current);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: "var(--surface)", padding: "90px 5%" }}
    >
      <div ref={headRef} className="reveal section-head">
        <p className="section-label">About Me</p>
        <h2 className="section-title">Background & Experience</h2>
        <p className="section-sub" style={{ maxWidth: "560px" }}>
          Engineer who bridges software development and data-driven thinking.
        </p>
      </div>

      <div
        ref={contentRef}
        className="reveal about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "start",
        }}
      >
        {/* Left: bio + stat cards */}
        <div>
          <p
            style={{
              fontSize: "15px",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            I'm a software engineer with 2+ years of professional experience
            building full-stack and data-driven applications. At LinkIt!, I
            build enterprise reporting solutions that support hundreds of K-12
            school districts across the country.
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            I also founded and launched two iOS apps — Nouriva and
            FriendsFitnessChallenge — from concept to App Store. I hold a B.S.
            in Mechanical Engineering from Tufts University (GPA 3.83, Summa
            Cum Laude), and served as Music Director of Public Harmony, a
            400-student community service group.
          </p>

          {/* Stat cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "14px",
            }}
          >
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>

        {/* Right: experience timeline */}
        <div>
          <p className="section-label" style={{ marginBottom: "20px" }}>
            Career Timeline
          </p>
          {timeline.map((item, i) => (
            <div
              key={i}
              style={{
                borderBottom:
                  i < timeline.length - 1 ? "1px solid var(--border)" : "none",
                padding: "20px 0",
              }}
            >
              <p
                style={{
                  fontSize: "11.5px",
                  color: "var(--accent)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "5px",
                }}
              >
                {item.date}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: "4px",
                }}
              >
                {item.role}
              </p>
              <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>
                {item.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  icon: Icon,
  number,
  label,
}: {
  icon: React.ElementType;
  number: string;
  label: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--accent-light)" : "var(--bg)",
        border: `1px solid ${hovered ? "var(--accent-muted)" : "var(--border)"}`,
        borderRadius: "14px",
        padding: "22px 20px",
        transition: "all 0.2s",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          borderRadius: "8px",
          background: "var(--accent-light)",
          border: "1px solid var(--border-strong)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "12px",
        }}
      >
        <Icon size={16} color="var(--accent)" />
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "30px",
          fontWeight: 700,
          color: "var(--text)",
          lineHeight: 1,
          marginBottom: "6px",
        }}
      >
        {number}
      </div>
      <div
        style={{
          fontSize: "10.5px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--muted)",
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default AboutSection;
