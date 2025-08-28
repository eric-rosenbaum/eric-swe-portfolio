import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-nav-background shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-nav-foreground">My Portfolio</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-nav-foreground hover:text-nav-foreground/80 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-nav-foreground hover:text-nav-foreground/80">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;