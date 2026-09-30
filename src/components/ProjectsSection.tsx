import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="reveal section-head">
        <p className="section-label glass">Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">A selection of things I've built and shipped.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="reveal"
            style={{ "--rd": `${(i % 3) * 90}ms` } as React.CSSProperties}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  // Tilt toward the cursor and move the sheen highlight with it
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * 7}deg) rotateY(${(x - 0.5) * 9}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="pcard glass"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="pcard-shot">
        <div className="chrome">
          <i />
          <i />
          <i />
          <span>{project.domain}</span>
        </div>
        <img src={project.imageSrc} alt={project.title} loading="lazy" />
      </div>

      <div className="pcard-body">
        <p className="pcard-role">{project.role}</p>
        <h3 className="pcard-title">
          {project.title}
          <span className="pcard-arrow">
            <ArrowUpRight size={16} />
          </span>
        </h3>
        <p className="pcard-sub">{project.subtitle}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectsSection;
