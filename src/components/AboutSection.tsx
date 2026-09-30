import { Briefcase, Users, Smartphone } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { useInView } from "@/hooks/use-in-view";

const stats = [
  { icon: Briefcase, value: 3, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 1000, suffix: "+", label: "Users" },
  { icon: Smartphone, value: 5, suffix: "", label: "Apps Launched With Real Users" },
];

const timeline = [
  {
    date: "July 2025 – Present",
    role: "Software Engineer",
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
    company: "Tufts University · Summa Cum Laude (Highest Honors)",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="reveal section-head">
        <p className="section-label glass">About Me</p>
        <h2 className="section-title">Background & Experience</h2>
        <p className="section-sub">
          Engineer who bridges software development and data-driven thinking.
        </p>
      </div>

      <div className="about-grid">
        <div className="panel glass about-bio reveal">
          <p>
            I'm a software engineer with 3+ years of professional experience
            building full-stack and data-driven applications. At LinkIt!, I
            build enterprise reporting solutions that support hundreds of K-12
            school districts across the country.
          </p>
          <p>
            I've founded and launched five apps with real users — across iOS
            and the web — from concept to production. I hold a B.S. in
            Mechanical Engineering from Tufts University (Summa Cum Laude), and
            served as Music Director of Public Harmony, a 400-student community
            service group.
          </p>

          <div className="stats">
            {stats.map((s) => (
              <StatTile key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="panel glass reveal" style={{ "--rd": "120ms" } as React.CSSProperties}>
          <p className="panel-label">Career Timeline</p>
          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.date} className="tl-item">
                <p className="tl-date">{item.date}</p>
                <p className="tl-role">{item.role}</p>
                <p className="tl-co">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatTile = ({
  icon: Icon,
  value,
  suffix,
  label,
}: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}) => {
  const [ref, inView] = useInView<HTMLDivElement>();
  const count = useCountUp(value, { start: inView, delay: 200 });

  return (
    <div ref={ref} className="stat">
      <div className="stat-icon">
        <Icon size={16} />
      </div>
      <div className="stat-num">
        {count.toLocaleString("en-US")}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default AboutSection;
