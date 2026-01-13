import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';

export const Events = () => {
    // --- 1. STATE MANAGEMENT ---
    const [activeTab, setActiveTab] = useState('first'); // For Webinars/Competitions
    const [expandedEvent, setExpandedEvent] = useState(null); // For Gallery

    // --- 2. DATA: UPCOMING EVENTS ---
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

    // --- 3. DATA: PAST WEBINARS (Previously in Projects.js) ---
    const webProjects = [
        { title: "Preparation Mantra", description: "Webinar Event", imgUrl: "https://ik.imagekit.io/7lzd57wvb/Aivolutions/WEBINAR%202.jpeg" },
        { title: "Orientation 2024", description: "Webinar Event", imgUrl: "https://ik.imagekit.io/7lzd57wvb/Aivolutions/WEBINAR%201.jpeg" },
        { title: "Enterprises Application Suite", description: "Webinar Event", imgUrl: "https://ik.imagekit.io/7lzd57wvb/Aivolutions/WEBINAR%203.jpeg" },
    ];

    // --- 4. DATA: PAST COMPETITIONS (Previously in Projects.js) ---
    const mobileProjects = [
        { title: "Algosphere", description: "Competition Event", imgUrl: "/assets/events/algosphere/img.png" },
        { title: "Codex Hackathon", description: "Hackathon", imgUrl: "https://ik.imagekit.io/7lzd57wvb/Aivolutions/Competiton%201.jpeg" },
    ];

    // --- 5. DATA: PHOTO GALLERY ---
    const previousEvents = [
        {
            title: "Codex Hackathon 2025",
            description: "60+ teams competed at MAIT. Winners: RADICALS (1st), Digital Destroyers (2nd), and NexaGen (3rd).",
            imgUrl: "/assets/events/codex_thumbnail.jpg",
            gallery: [
               "/assets/events/codex/pic_1.jpg",
               "/assets/events/codex/pic-3.jpg",
               "/assets/events/codex/pic_4.jpg",
               "/assets/events/codex/pic_6.jpg",
               "/assets/events/codex/pic_17.jpg",
               "/assets/events/codex/pic_5.jpg",
               "/assets/events/codex/pic_13.jpg",
               "/assets/events/codex/pic_2.jpg",
               "/assets/events/codex/pic_12.jpg",
               "/assets/events/codex/pic_15.jpg",
               "/assets/events/codex/pic_14.jpg",
               "/assets/events/codex/pic_16.jpg",
               "/assets/events/codex/pic_18.jpg",
               "/assets/events/codex/pic_19.jpg",
               "/assets/events/codex/pic_20.jpg",
            ]
        },
        {
            title: "Algosphere",
            description: "Participants tackled real-world challenges over multiple rigorous rounds, testing not only their technical skills but also their creativity, ethics, and ability to work as a team.",
            imgUrl: "/assets/events/algosphere/pic_1.jpg",
            gallery: [
                "/assets/events/algosphere/pic_1.jpg",
                "/assets/events/algosphere/pic_2.jfif",
                "/assets/events/algosphere/pic_3.jfif",
                "/assets/events/algosphere/pic_4.jfif",
            ]
        },
        {
            title: "Enterprises Application Suite",
            description: "An expert from STMicroelectronics came for sharing her deep knowledge about ERP software.",
            imgUrl: "/assets/events/webinar/pic-1.jfif",
            gallery: [
                "/assets/events/webinar/pic-1.jfif",
                "/assets/events/webinar/pic-2.jfif",
                "/assets/events/webinar/pic-3.jfif",
                "/assets/events/webinar/pic-4.jfif",
                "/assets/events/webinar/pic-5.jfif",
            ]
        },
        
    ];

    const toggleGallery = (index) => {
        setExpandedEvent(expandedEvent === index ? null : index);
    };

    return (
        <section className="relative py-24 pb-40" id="events">
            <div className="container mx-auto px-4 relative z-10">
                
                {/* ==============================
                    SECTION 1: UPCOMING EVENTS 
                   ============================== */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-6">
                        Upcoming Events
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Explore AIvolution's latest workshops, hackathons, and tech summits.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {events.map((event, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(163,27,246,0.2)]">
                            <div className="w-24 h-24 mb-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 transition-colors duration-300">
                                <img src={event.imgUrl} alt={event.title} className="w-12 h-12 object-contain"/>
                            </div>
                            <h3 className="text-2xl font-bold text-white font-mono mb-4">{event.title}</h3>
                            <p className="text-gray-400 mb-8 flex-grow leading-relaxed">{event.description}</p>
                            <button className="px-8 py-3 border border-white/30 text-white rounded-lg hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-bold tracking-wide">
                                Register Now
                            </button>
                        </div>
                    ))}
                </div>


                {/* ==============================
                    SECTION 2: PAST ACTIVITIES (Consolidated from Projects)
                   ============================== */}
                <div className="text-center mb-12 border-t border-white/10 pt-20">
                     <h2 className="text-4xl font-bold font-mono text-white mb-6">Activity Archive</h2>
                     <p className="text-gray-400 text-lg">Our past webinars and competitions.</p>
                </div>

                {/* Tab Buttons */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/5 border border-white/10 rounded-full p-1 flex backdrop-blur-md">
                        <button onClick={() => setActiveTab('first')} className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'first' ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' : 'text-gray-400'}`}>
                        📺 Webinars
                        </button>
                        <button onClick={() => setActiveTab('second')} className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'second' ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' : 'text-gray-400'}`}>
                        🏆 Competitions
                        </button>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 animate__animated animate__fadeInUp">
                    {(activeTab === 'first' ? webProjects : mobileProjects).map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>


                {/* ==============================
                    SECTION 3: PHOTO GALLERY 
                   ============================== */}
                <div className="text-center mb-12 border-t border-white/10 pt-20">
                    <h2 className="text-4xl font-bold font-mono text-white mb-4">Event Gallery</h2>
                    <p className="text-gray-400">Click on an event to see the photos.</p>
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
                                    <img src={event.imgUrl} alt="Event Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.3] group-hover:brightness-[0.4]" />
                                    
                                    <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                                        <h3 className="text-3xl md:text-5xl font-bold font-mono text-white mb-4 uppercase tracking-widest drop-shadow-lg">{event.title}</h3>
                                        <p className="hidden md:block text-gray-200 text-lg mb-8 max-w-2xl drop-shadow-md">{event.description}</p>
                                        <div className="px-6 py-2 border border-white/50 rounded-full backdrop-blur-md bg-black/30 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                                            {isExpanded ? "Close Gallery ✕" : "View Gallery 📷"}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {isExpanded && event.gallery && (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 animate__animated animate__fadeIn">
                                    {event.gallery.map((img, idx) => (
                                        <div key={idx} className="rounded-xl overflow-hidden shadow-lg h-48 border border-white/5">
                                            <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
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