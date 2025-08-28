import { Database, BarChart3, Code } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      name: "Python",
      icon: Code,
      link: "#"
    },
    {
      name: "Data Visualization", 
      icon: BarChart3,
      link: "#"
    },
    {
      name: "SQL",
      icon: Database,
      link: "#"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div key={skill.name} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                    <IconComponent className="w-12 h-12 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">{skill.name}</h3>
                
                <a 
                  href={skill.link}
                  className="text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                >
                  Link to course or bootcamp
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;