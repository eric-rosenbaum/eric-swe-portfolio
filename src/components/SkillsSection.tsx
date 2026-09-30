import { useLayoutEffect, useRef, useState } from "react";

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
    items: [
      "OpenAI APIs",
      "Cursor",
      "Retool",
      "Claude Code",
      "Connectors",
      "Skills",
      "AI API Integrations",
      "Prompt Engineering",
    ],
  },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState<React.CSSProperties>({ opacity: 0 });

  // Slide the dark pill under the active tab (re-measured on resize and font load)
  useLayoutEffect(() => {
    const update = () => {
      const tab = tabRefs.current[activeTab];
      if (!tab) return;
      setIndicator({
        left: tab.offsetLeft,
        top: tab.offsetTop,
        width: tab.offsetWidth,
        height: tab.offsetHeight,
      });
    };
    update();
    document.fonts?.ready.then(update);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeTab]);

  return (
    <section id="skills" className="section">
      <div className="reveal section-head">
        <p className="section-label glass">Expertise</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-sub">The tools and languages I use to build things.</p>
      </div>

      <div className="panel glass reveal">
        <div className="seg" role="tablist">
          <span className="seg-ind" style={indicator} />
          {skillGroups.map((group, i) => (
            <button
              key={group.label}
              ref={(el) => (tabRefs.current[i] = el)}
              role="tab"
              aria-selected={activeTab === i}
              className={activeTab === i ? "on" : ""}
              onClick={() => setActiveTab(i)}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div className="skill-grid">
          {skillGroups[activeTab].items.map((item, i) => (
            <div
              key={`${activeTab}-${item}`}
              className="skill"
              style={{ "--i": i } as React.CSSProperties}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
