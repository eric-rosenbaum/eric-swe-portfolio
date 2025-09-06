const SkillsSection = () => {
  const groups = [
    {
      label: "Languages",
      items: ["Python", "Javascript", "HTML", "CSS", "SQL", "C++"]
    },
    {
      label: "Frameworks",
      items: ["React", "Bootstrap", "Node.js"]
    },
    {
      label: "Data Libraries",
      items: ["Pandas", "NumPy", "MatplotLib", "scikit-learn", "TensorFlow"]
    },
    {
      label: "Technologies",
      items: ["Git/GitHub", "REST APIs", "Vercel", "Jupyter Notebook", "Visual Studio"]
    },
    {
      label: "AI Tools",
      items: ["OpenAI APIs", "Retool", "Cursor"]
    }
  ];

  return (
    <section id="skills" className="pt-8 pb-16 bg-section-a scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {groups.map((group) => (
            <div key={group.label} className="bg-hero-text/90 text-white rounded-2xl p-6 sm:p-7 shadow-xl h-full border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">{group.label}</h3>
              <div className="space-y-1.5">
                {group.items.map((item) => (
                  <div key={item} className="text-base">{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;