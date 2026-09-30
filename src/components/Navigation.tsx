import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
];

const Navigation = () => {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Highlight the last section whose top has passed the middle of the viewport
  useEffect(() => {
    const ids = [...navItems.map((n) => n.id), "contact"];
    const onScroll = () => {
      const mid = window.innerHeight * 0.45;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= mid) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="nav glass">
        <button
          className="nav-mono"
          onClick={() => scrollToSection("home")}
          aria-label="Back to top"
        >
          ER
        </button>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-link ${active === item.id ? "active" : ""}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
        <button className="nav-cta" onClick={() => scrollToSection("contact")}>
          Connect
        </button>
        <button
          className="nav-menu-btn"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="nav-sheet glass">
          {[...navItems, { id: "contact", label: "Contact" }].map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Navigation;
