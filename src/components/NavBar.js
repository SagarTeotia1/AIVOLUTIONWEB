import { useState, useEffect } from "react";
import logo from "../assets/img/aivolutionaries_logo-removebg-preview.png";
import navIcon1 from "../assets/img/nav-icon1.svg"; // LinkedIn
import navIcon3 from "../assets/img/nav-icon3.svg"; // Instagram
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Update active link based on URL path if needed
  useEffect(() => {
    if (location.pathname === '/events') {
      setActiveLink('events');
    }
  }, [location]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setIsOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-dark/90 backdrop-blur-md py-2 shadow-lg border-b border-white/10" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <HashLink to="/#home" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-105" />
        </HashLink>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <NavLink to="/#home" active={activeLink === 'home'} onClick={() => onUpdateActiveLink('home')}>Home</NavLink>
            <NavLink to="/#skills" active={activeLink === 'skills'} onClick={() => onUpdateActiveLink('skills')}>Departments</NavLink>
            <NavLink to="/#projects" active={activeLink === 'projects'} onClick={() => onUpdateActiveLink('projects')}>Projects</NavLink>
            {/* Standard Link for Events page */}
            <a 
              href="/events" 
              className={`text-lg font-medium tracking-wide transition-colors duration-300 ${activeLink === 'events' ? "text-secondary font-bold" : "text-gray-300 hover:text-white"}`}
              onClick={() => onUpdateActiveLink('events')}
            >
              Events
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <SocialIcon href="https://www.linkedin.com/company/aivolutionaries/" icon={navIcon1} />
              <SocialIcon href="https://www.instagram.com/ai.volutions_/" icon={navIcon3} />
            </div>
            <HashLink to="/#connect">
              <button className="px-6 py-2 border border-white text-white font-bold text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300">
                Let’s Connect
              </button>
            </HashLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-6 flex flex-col items-center space-y-6 animate__animated animate__fadeInDown">
          <NavLink to="/#home" active={activeLink === 'home'} onClick={() => onUpdateActiveLink('home')} mobile>Home</NavLink>
          <NavLink to="/#skills" active={activeLink === 'skills'} onClick={() => onUpdateActiveLink('skills')} mobile>Departments</NavLink>
          <NavLink to="/#projects" active={activeLink === 'projects'} onClick={() => onUpdateActiveLink('projects')} mobile>Projects</NavLink>
          <a href="/events" className="text-xl text-white font-medium" onClick={() => onUpdateActiveLink('events')}>Events</a>
          
          <div className="flex space-x-4 mt-4">
            <SocialIcon href="https://www.linkedin.com/company/aivolutionaries/" icon={navIcon1} />
            <SocialIcon href="https://www.instagram.com/ai.volutions_/" icon={navIcon3} />
          </div>
          <HashLink to="/#connect" onClick={() => setIsOpen(false)}>
            <button className="px-8 py-3 border border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300">
              Let’s Connect
            </button>
          </HashLink>
        </div>
      )}
    </nav>
  );
};

// Helper Components for cleaner code
const NavLink = ({ to, active, onClick, children, mobile }) => (
  <HashLink 
    smooth 
    to={to} 
    className={`${mobile ? "text-xl" : "text-lg"} font-medium tracking-wide transition-colors duration-300 ${active ? "text-secondary font-bold" : "text-gray-300 hover:text-white"}`}
    onClick={onClick}
  >
    {children}
  </HashLink>
);

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/40 hover:bg-primary hover:border-primary transition-all duration-300 group"
  >
    <img src={icon} alt="" className="w-4 h-4 filter brightness-0 invert" />
  </a>
);