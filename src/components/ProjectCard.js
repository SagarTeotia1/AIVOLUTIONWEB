import React from 'react';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden cursor-pointer aspect-[1/1] bg-[#151515] border border-white/10 shadow-lg flex items-center justify-center">
      <img 
        src={imgUrl} 
        alt={title} 
        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105" 
      />
    
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end items-center text-center p-6 pb-10 backdrop-blur-[2px]">
        <h4 className="text-xl md:text-2xl font-bold font-mono text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </h4>
        <p className="text-secondary font-mono text-sm uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {description}
        </p>
      </div>
    </div>
  )
}