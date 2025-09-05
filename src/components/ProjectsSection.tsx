const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "MySetList",
      subtitle: "Setlist Sharing for Musicians",
      imageSrc: "/images/mysetlist_photo.jpg",
      url: "https://mysetlist.org"
    },
    {
      id: 2,
      title: "SavePlanner",
      subtitle: "Saving and Retirement Tool",
      imageSrc: "/images/saveplanner_photo.jpg",
      url: "https://saveplanner.org"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-project-card rounded-xl p-8 relative overflow-hidden cursor-pointer transition-transform hover:scale-[1.01]">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-16 h-16 border-2 border-current rounded"></div>
                  <div className="absolute top-8 left-8 w-24 h-16 border-2 border-current rounded"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-current rounded"></div>
                  <div className="absolute bottom-8 right-8 w-20 h-12 border-2 border-current rounded"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-56 object-cover object-center"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-center mb-4 text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 text-center leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;