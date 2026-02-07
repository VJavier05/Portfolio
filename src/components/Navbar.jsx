import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const latestActiveRef = useRef(active);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  // click handler: prevent default, smooth scroll, set active immediately
  const handleClick = (label, href, e) => {
    if (e && e.preventDefault) e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      // Set active immediately so UI responds instantly
      latestActiveRef.current = label;
      setActive(label);
      setIsOpen(false);

      // Smooth scroll to target; block offset can be adjusted if you have sticky header
      const offset = 0; // change if you have sticky header height
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });

      // As a fallback for browsers/edge cases, ensure active is set after a short delay
      setTimeout(() => {
        latestActiveRef.current = label;
        setActive(label);
      }, 450);
    } else {
      // if target not found, still set active and close
      latestActiveRef.current = label;
      setActive(label);
      setIsOpen(false);
    }
  };

  // Robust IntersectionObserver to set active link without flicker
  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean);
    if (!sections.length) return;

    let debounceTimer;
    const observer = new IntersectionObserver(
      () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          // Get all sections and their positions
          const sectionPositions = sections.map((section) => ({
            id: section.id,
            top: section.getBoundingClientRect().top,
            bottom: section.getBoundingClientRect().bottom,
          }));

          // Find the section closest to the top of viewport (but still visible)
          const current = sectionPositions.find(
            (s) => s.top <= 150 && s.bottom > 150
          ) || sectionPositions.find((s) => s.top > 0);

          if (current) {
            const match = links.find((l) => l.href === `#${current.id}`);
            if (match && latestActiveRef.current !== match.label) {
              latestActiveRef.current = match.label;
              setActive(match.label);
            }
          }
        }, 100);
      },
      { rootMargin: "0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => {
      clearTimeout(debounceTimer);
      observer.disconnect();
    };
  }, [links]);


  // Sync on hashchange (optional; keeps state consistent if navigation changes hash externally)
  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash;
      const match = links.find((l) => l.href === hash);
      if (match) {
        latestActiveRef.current = match.label;
        setActive(match.label);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [links]);

  const NavLink = ({ label, href }) => (
    <a
      href={href}
      onClick={(e) => handleClick(label, href, e)}
      className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
        active === label
          ? "bg-white text-black font-semibold"
          : "hover:bg-gray-800 hover:text-gray-200"
      }`}
    >
      {label}
    </a>
  );

  return (
    <nav className="text-white shadow-md sticky top-0 z-50 backdrop-blur-sm font-gilroy font-medium mt-4">
      <div className="mx-auto px-14 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="App Logo" className="w-20 h-20" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/60 backdrop-blur-md z-40 animate-slideDown">
          <div className="flex flex-col px-8 py-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(link.label, link.href, e)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  active === link.label
                    ? "bg-white text-black font-semibold"
                    : "hover:bg-gray-800 hover:text-gray-200"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
