import React from 'react';

export const Sponsors = () => {
  return (
    <section className="py-20 bg-dark relative z-10 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-mono text-white mb-12">
            Previous Sponsors
        </h2>
        
        <div className="flex justify-center items-center">
            {/* Sponsor Item */}
            <div className="group flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2">
                <div className="w-48 h-48 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[0_0_30px_rgba(163,27,246,0.3)] group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                    {/* Make sure to upload the logo to this path */}
                    <img 
                        src="/assets/events/img/neighbourly.jpg" 
                        alt="Neighborly" 
                        className="w-32 h-32 object-contain "
                    />
                </div>
                <h3 className="text-2xl font-bold text-gray-400 font-mono tracking-widest group-hover:text-white transition-colors">
                    NEIGHBORLY
                </h3>
            </div>
        </div>
      </div>
    </section>
  )
}