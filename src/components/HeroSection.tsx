import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="py-20 bg-background scroll-mt-24">
      <div id="about" className="h-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-2xl order-2 lg:order-1">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              I'm <span className="text-hero-text">Eric Rosenbaum</span>,<br />
              a <span className="text-hero-text">Data Scientist</span>.
            </h1>
            
            <p className="text-lg text-muted-foreground mb-2">
              4+ Years of Academic and Professional Experience in Python and Data Analytics
            </p>
            <p className="text-lg text-muted-foreground mb-2">
              Bachelor of Science in Mechanical Engineering
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Tufts University
            </p>
            
            <div className="flex gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Resume
              </Button>
            </div>
          </div>
          
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="w-72 h-96 lg:w-80 lg:h-96 rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-image)' }}>
              <img
                src="/images/headshot_outdoor.jpg"
                alt="Eric Rosenbaum"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;