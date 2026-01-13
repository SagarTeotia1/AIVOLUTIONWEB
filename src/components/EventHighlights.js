import React from 'react';

export const EventHighlights = () => {
  // Data for the moving squares
  const highlights = [
    { title: "Preparation Mantra", label: "webinar", color: "from-purple-500 to-indigo-500" ,imgUrl: "https://ik.imagekit.io/7lzd57wvb/Aivolutions/WEBINAR%202.jpeg" },
    { title: "Algosphere", label: "Conference", color: "from-blue-500 to-cyan-500", imgUrl: "/assets/events/algosphere/img.png" },
    { title: "Enterprises Application Suite", label: "Webinar", color: "from-emerald-500 to-teal-500",imgUrl: "https://ik.imagekit.io/7lzd57wvb/Aivolutions/WEBINAR%203.jpeg" },
    { title: "Orientation 2024", label: "Webinar", color: "from-yellow-500", imgUrl: "https://ik.imagekit.io/7lzd57wvb/Aivolutions/WEBINAR%201.jpeg" },
    { title: "CODEX Hackathon", label: "hackathon", color: "from-orange-500 to-red-500", imgUrl: "https://ik.imagekit.io/7lzd57wvb/Aivolutions/Competiton%201.jpeg" },
    ];

  // Duplicate list to ensure seamless scrolling
  const items = [...highlights, ...highlights, ...highlights];

  return (
    <section className="py-24 bg-dark overflow-hidden relative z-10 border-t border-white/10">
      
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl font-bold font-mono text-white mb-4">
          Event <span className="text-primary">Highlights</span>
        </h2>
        <p className="text-gray-400">Glimpses of our vibrant community in action.</p>
      </div>

     

      {/* --- ROW 2: Moving Right --- */}
      <div className="relative w-full">
        <div className="flex w-max animate-marquee-right hover:pause">
          {items.map((item, index) => (
            <div key={`row2-${index}`} className="mx-4 w-64 h-34 flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-end hover:border-secondary/50 transition-colors group relative overflow-hidden">
               <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
               
               <h3 className="text-2xl font-bold text-white relative z-10">{item.title}</h3>
               <p className="text-gray-400 uppercase tracking-widest text-sm relative z-10">{item.label}</p>
               
               {/* Decorative Circle Icon */}
               <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/10 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for Animations (Inline for simplicity) */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};