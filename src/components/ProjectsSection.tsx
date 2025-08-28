import { BarChart3 } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nisl erat. Sed at purus ornare, eleifend tellus ut, fermentum arcu. Maecenas lacinia scelerisque arcu a eleifend. Suspendisse imperdiet arcu ex, vel feugiat enim lacinia tincidunt.",
      blogLink: "#",
      sourceLink: "#"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nisl erat. Sed at purus ornare, eleifend tellus ut, fermentum arcu. Maecenas lacinia scelerisque arcu a eleifend. Suspendisse imperdiet arcu ex, vel feugiat enim lacinia tincidunt.",
      blogLink: "#",
      sourceLink: "#"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nisl erat. Sed at purus ornare, eleifend tellus ut, fermentum arcu. Maecenas lacinia scelerisque arcu a eleifend. Suspendisse imperdiet arcu ex, vel feugiat enim lacinia tincidunt.",
      blogLink: "#",
      sourceLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-project-card rounded-xl p-8 relative overflow-hidden">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-16 h-16 border-2 border-current rounded"></div>
                <div className="absolute top-8 left-8 w-24 h-16 border-2 border-current rounded"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-current rounded"></div>
                <div className="absolute bottom-8 right-8 w-20 h-12 border-2 border-current rounded"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <a href={project.sourceLink} className="block hover:scale-110 transition-transform duration-200">
                      <BarChart3 className="w-12 h-12 text-accent" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-center mb-4 text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 text-center leading-relaxed">
                  {project.description}
                </p>
                
                <div className="text-center">
                  <a 
                    href={project.blogLink}
                    className="text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                  >
                    Blog Post
                  </a>
                  <span className="mx-2 text-muted-foreground">|</span>
                  <a 
                    href={project.sourceLink}
                    className="text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;