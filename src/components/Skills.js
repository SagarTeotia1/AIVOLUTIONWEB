import EM from "../assets/icons/Event.png";
import Tech from "../assets/icons/tech.png";
import SM from "../assets/icons/social-media.png";
import photo from "../assets/icons/photo.png";
import content from "../assets/icons/Content.png";
import pr from "../assets/icons/pr.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  // Data array for cleaner code and easy updates
  const departments = [
    { title: "Tech & Development", icon: Tech },
    { title: "Social Media Management", icon: SM },
    { title: "Photography & Videography", icon: photo },
    { title: "Event Management", icon: EM },
    { title: "Design & Creative", icon: content },
    { title: "Public Relations", icon: pr },
  ];

  return (
    <section className="relative py-20 pb-36" id="skills">
      <div className="container mx-auto px-4">
        {/* Main Glass Container */}
        <div className="text-center bg-dark/60 backdrop-blur-md rounded-[50px] p-8 md:p-16 border border-glass-border shadow-2xl relative z-10">
          
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6 text-white">
            Departments
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
            AIvolution's departments focus on AI research, machine learning, neural networks, project development, and industry collaboration, working together to drive AI innovation and education.
          </p>

          {/* Responsive Grid System */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {departments.map((dept, index) => (
              <div 
                key={index} 
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(163,27,246,0.3)] hover:border-primary/50 cursor-default"
              >
                {/* Icon Wrapper with Glow Effect */}
                <div className="h-24 mb-6 flex items-center justify-center relative">
                  {/* Subtle glow behind icon on hover */}
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <img 
                    src={dept.icon} 
                    alt={dept.title} 
                    className="h-full w-auto object-contain relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h5 className="text-xl font-bold text-white font-mono group-hover:text-secondary transition-colors duration-300">
                  {dept.title}
                </h5>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Background Decor Image */}
      <img 
        className="absolute top-[25%] left-0 w-[40%] opacity-40 -z-10 pointer-events-none mix-blend-screen" 
        src={colorSharp} 
        alt="Background Gradient" 
      />
    </section>
  );
};