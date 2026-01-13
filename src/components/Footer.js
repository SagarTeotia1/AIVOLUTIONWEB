import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/aivolutionaries_logo-removebg-preview.png";
import navIcon1 from "../assets/img/nav-icon1.svg"; // LinkedIn
import navIcon3 from "../assets/img/nav-icon3.svg"; // Instagram

export const Footer = () => {
  return (
    <footer className="relative bg-dark pt-24 pb-12 overflow-hidden">
      
      {/* Optional: Background Glow Effect */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-black via-dark to-transparent z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Newsletter Section - Replaces the old placement */}
        <div className="mb-16">
           <MailchimpForm />
        </div>

        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-white/10 pt-8">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="AIvolution Logo" 
              className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" 
            />
          </div>

          {/* Socials & Copyright Section */}
          <div className="text-center sm:text-right">
            
            {/* Social Icons */}
            <div className="flex justify-center sm:justify-end gap-4 mb-4">
              <SocialIcon href="https://www.linkedin.com/company/aivolutionaries/" icon={navIcon1} />
              <SocialIcon href="https://www.instagram.com/ai.volutions_/" icon={navIcon3} />
            </div>
            
            <p className="text-gray-400 font-mono text-sm tracking-wide">
              Copyright 2025 AIvolution. All Rights Reserved
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

// Reusable Social Icon Component (Matches Navbar style)
const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 transition-all duration-300 hover:bg-primary hover:border-primary hover:shadow-[0_0_15px_rgba(163,27,246,0.5)] group"
  >
    <img 
      src={icon} 
      alt="" 
      className="w-4 h-4 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300" 
    />
  </a>
);