import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { prefersReducedMotion, useCountUp } from "@/hooks/use-count-up";

// Stagger index for the on-load `.up` animation
const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  const apps = useCountUp(5, { delay: 700 });
  const users = useCountUp(1000, { delay: 700 });

  return (
    <section id="home" className="hero">
      <div className="hero-grid-lines" />

      <div className="hero-copy">
        <h1 className="hero-title up" style={d(1)}>
          Hi, I'm Eric
          <br />
          <span className="hero-underline">
            Rosenbaum.
            <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M3 14 C 60 4, 120 4, 170 10 S 260 17, 297 6" />
            </svg>
          </span>
        </h1>

        <p className="hero-role up" style={d(2)}>
          Full-Stack Software Engineer
        </p>

        <p className="hero-sub up" style={d(3)}>
          3+ years building full-stack and data-driven applications. I specialize
          in Python, JavaScript, SQL, and AI integrations to deliver software
          solutions that empower people to make data-driven decisions.
        </p>

        <div className="hero-ctas up" style={d(4)}>
          <button className="btn btn-dark" onClick={() => scrollToSection("projects")}>
            See my work <ArrowRight size={17} className="arrow" />
          </button>
          <button className="btn btn-light" onClick={() => scrollToSection("contact")}>
            Get in touch
          </button>
        </div>

        <div className="hero-me up" style={d(5)}>
          <img src="/images/headshot_outdoor.jpg" alt="Eric Rosenbaum" />
          <div>
            <strong>Eric Rosenbaum</strong>
            <span>Tufts ’24</span>
          </div>
          <span className="hero-sep" />
          <div className="hero-kpi">
            <b>{apps}</b>
            <span>apps shipped</span>
          </div>
          <span className="hero-sep" />
          <div className="hero-kpi">
            <b>{users.toLocaleString("en-US")}+</b>
            <span>real users</span>
          </div>
        </div>
      </div>

      <ProjectStack />
    </section>
  );
};

/** Auto-cycling 3D stack of project screenshots that tilts with the cursor. */
const ProjectStack = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const n = projects.length;

  // Advance every few seconds; depending on `active` restarts the timer after manual navigation
  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), 3400);
    return () => clearInterval(id);
  }, [paused, active, n]);

  // Eased tilt toward the pointer, written straight to the DOM to avoid re-renders
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    const onMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
    };
    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      if (stageRef.current) {
        stageRef.current.style.transform = `rotateY(${-16 + cx * 18}deg) rotateX(${8 - cy * 12}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const go = (i: number) => setActive((i + n) % n);

  const cardStyle = (i: number): React.CSSProperties => {
    const off = (i - active + n) % n;
    if (off === 0) return { transform: "translate3d(0,0,0) scale(1)", opacity: 1, zIndex: n };
    // The card that just left the front flies out to the side
    if (off === n - 1) {
      return {
        transform: "translate3d(-40%, 30px, 120px) rotateZ(-8deg) scale(.95)",
        opacity: 0,
        zIndex: n + 1,
        pointerEvents: "none",
      };
    }
    return {
      transform: `translate3d(${off * 7}%, ${-off * 9}%, ${-off * 120}px) rotateZ(${off * 2.2}deg) scale(${1 - off * 0.04})`,
      opacity: Math.max(1 - off * 0.2, 0),
      zIndex: n - off,
      filter: `saturate(${1 - off * 0.25})`,
    };
  };

  const current = projects[active];

  return (
    <div
      className="stage-wrap up"
      style={d(2)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="stage" ref={stageRef} style={{ transform: "rotateY(-16deg) rotateX(8deg)" }}>
        {projects.map((p, i) => (
          <article
            key={p.id}
            className="stack-card"
            style={cardStyle(i)}
            onClick={() =>
              i === active ? window.open(p.url, "_blank", "noopener,noreferrer") : go(i)
            }
            title={i === active ? `Visit ${p.title}` : p.title}
          >
            <div className="chrome">
              <i />
              <i />
              <i />
              <span>{p.domain}</span>
            </div>
            <img src={p.imageSrc} alt={p.title} />
          </article>
        ))}
      </div>

      <div className="stack-caption">
        <div className="stack-cap-text" key={active}>
          <strong>{current.title}</strong>
          <span>{current.role}</span>
        </div>
        <div className="stack-dots">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className={i === active ? "on" : ""}
              onClick={() => go(i)}
              aria-label={`Show ${p.title}`}
            />
          ))}
        </div>
        <div className="stack-arrows">
          <button className="glass" onClick={() => go(active - 1)} aria-label="Previous project">
            <ArrowLeft size={16} />
          </button>
          <button className="glass" onClick={() => go(active + 1)} aria-label="Next project">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
