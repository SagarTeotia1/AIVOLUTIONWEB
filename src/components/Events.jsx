import { useState } from "react";
import 'animate.css';

export const Events = () => {
    // NOTE: Make sure these paths match your actual folder structure
    const events = [
        {
            title: "AI & Future Tech Summit",
            description: "Join us for a deep dive into the future of Artificial Intelligence and what it means for humanity.",
            imgUrl: "/assets/events/event1.svg", 
        },
        {
            title: "Generative AI Hackathon",
            description: "Build the next generation of AI tools in this 48-hour intense coding challenge.",
            imgUrl: "/assets/events/event2.svg",
        },
        {
            title: "Machine Learning Workshop",
            description: "A hands-on workshop to get you started with ML models and data processing.",
            imgUrl: "/assets/events/event3.svg",
        },
    ];

    const previousEvents = [
        {
            title: "Codex Hackathon 2025",
            description: "60+ teams competed at MAIT. Winners: RADICALS (1st), Digital Destroyers (2nd), and NexaGen (3rd).",
            imgUrl: "/assets/events/codex_thumbnail.jpg",
            gallery: [
                // Simulating gallery images - ensure you have these files or placeholders
               "https://via.placeholder.com/300x200?text=Event+Photo+1",
               "https://via.placeholder.com/300x200?text=Event+Photo+2",
               "https://via.placeholder.com/300x200?text=Event+Photo+3",
               "https://via.placeholder.com/300x200?text=Event+Photo+4",
            ]
        },
    ];

    const [expandedEvent, setExpandedEvent] = useState(null);

    const toggleGallery = (index) => {
        setExpandedEvent(expandedEvent === index ? null : index);
    };

    return (
        <section className="relative py-24 pb-40" id="events">
            <div className="container mx-auto px-4 relative z-10">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-6">
                        Upcoming Events
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Explore AIvolution's latest workshops, hackathons, and tech summits designed to push the boundaries of innovation.
                    </p>
                </div>

                {/* Upcoming Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {events.map((event, index) => (
                        <div 
                            key={index} 
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(163,27,246,0.2)]"
                        >
                            {/* Image Wrapper */}
                            <div className="w-24 h-24 mb-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 transition-colors duration-300">
                                <img 
                                    src={event.imgUrl} 
                                    alt={event.title}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            
                            {/* Content */}
                            <h3 className="text-2xl font-bold text-white font-mono mb-4">{event.title}</h3>
                            <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                                {event.description}
                            </p>
                            
                            <button className="px-8 py-3 border border-white/30 text-white rounded-lg hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-bold tracking-wide">
                                Register Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* Previous Events Section */}
                <div className="text-center mb-12 border-t border-white/10 pt-20">
                    <h2 className="text-4xl font-bold font-mono text-white mb-4">Event Archive</h2>
                    <p className="text-gray-400">A legacy of innovation. Click on an event below to view the gallery.</p>
                </div>

                {previousEvents.map((event, index) => {
                    const isExpanded = expandedEvent === index;
                    return (
                        <div key={index} className="mb-16">
                            <div className="flex justify-center">
                                <div 
                                    className="w-full max-w-5xl relative rounded-3xl overflow-hidden cursor-pointer group h-[400px] border border-white/10 shadow-2xl"
                                    onClick={() => toggleGallery(index)}
                                >
                                    {/* Cover Image */}
                                    <img 
                                        src={event.imgUrl} 
                                        alt="Event Cover"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.3] group-hover:brightness-[0.4]"
                                    />
                                    
                                    {/* Text Overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                                        <h3 className="text-3xl md:text-5xl font-bold font-mono text-white mb-4 uppercase tracking-widest drop-shadow-lg">
                                            {event.title}
                                        </h3>
                                        <p className="hidden md:block text-gray-200 text-lg mb-8 max-w-2xl drop-shadow-md">
                                            {event.description}
                                        </p>
                                        
                                        <div className="px-6 py-2 border border-white/50 rounded-full backdrop-blur-md bg-black/30 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                                            {isExpanded ? "Close Gallery ✕" : "View Gallery 📷"}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Gallery Grid Animation */}
                            {isExpanded && event.gallery && (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 animate__animated animate__fadeIn">
                                    {event.gallery.map((img, idx) => (
                                        <div key={idx} className="rounded-xl overflow-hidden shadow-lg h-48 border border-white/5">
                                            <img 
                                                src={img} 
                                                alt={`Gallery ${idx}`}
                                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}