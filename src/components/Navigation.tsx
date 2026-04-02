import { useState } from "react";

const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "62px",
        background: "rgba(247, 248, 245, 0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          padding: "0 5%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "17px",
            fontWeight: 700,
            color: "var(--text)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          Eric Rosenbaum
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: "4px" }}>
          {navItems.map((item) => (
            <NavLink key={item} onClick={() => scrollToSection(item)}>
              {item}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--muted)",
            padding: "4px",
          }}
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" />
                <line x1="3" y1="12" x2="19" y2="12" />
                <line x1="3" y1="17" x2="19" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
            padding: "8px 5% 16px",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "var(--muted)",
                background: "none",
                border: "none",
                borderBottom: "1px solid var(--border)",
                cursor: "pointer",
                padding: "12px 0",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "14px",
        color: hovered ? "var(--accent)" : "var(--muted)",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "6px 14px",
        borderRadius: "6px",
        transition: "color 0.2s",
      }}
    >
      {children}
    </button>
  );
};

export default Navigation;
