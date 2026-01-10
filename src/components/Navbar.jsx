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
  const sectionEls = links
    .map((l) => {
      const section = document.querySelector(l.href);
      if (!section) return null;
      // observe section and its children
      return [section, ...Array.from(section.querySelectorAll("div"))];
    })
    .flat()
    .filter(Boolean);

  if (!sectionEls.length) return;

  const MIN_RATIO = 0.05;
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length === 0) return;

      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const best = visible[0];

      if (best.intersectionRatio < MIN_RATIO) return;

      const sec = best.target.closest("section[id]");
      if (!sec) return;

      const match = links.find((l) => l.href === `#${sec.id}`);
      if (match && latestActiveRef.current !== match.label) {
        latestActiveRef.current = match.label;
        setActive(match.label);
      }
    },
    {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: [0, 0.05, 0.1, 0.25, 0.5, 0.75, 1],
    }
  );

  sectionEls.forEach((el) => observer.observe(el));

  // initial check
  const initCheck = () => {
    const x = window.innerWidth / 2;
    const y = window.innerHeight * 0.45;
    const el = document.elementFromPoint(x, y);
    const sec = el?.closest && el.closest("section[id]");
    if (sec) {
      const m = links.find((l) => l.href === `#${sec.id}`);
      if (m) {
        latestActiveRef.current = m.label;
        setActive(m.label);
      }
    }
  };
  initCheck();

  return () => observer.disconnect();
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
