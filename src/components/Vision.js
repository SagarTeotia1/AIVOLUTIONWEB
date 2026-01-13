import React from 'react';

export const Vision = () => {
    return (
        <section className="py-24 bg-dark relative border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    
                    {/* Card 1 */}
                    <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-primary/50 transition-all duration-300">
                        <div className="text-5xl mb-4">🚀</div>
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-400">To democratize AI education and provide every student at MAIT the resources to build futuristic tech.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-secondary/50 transition-all duration-300 scale-105 shadow-xl bg-white/5">
                        <div className="text-5xl mb-4">👁️</div>
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-gray-400">To become North India's leading student-run AI community, fostering innovation and open-source contributions.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-primary/50 transition-all duration-300">
                        <div className="text-5xl mb-4">💡</div>
                        <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                        <p className="text-gray-400">Collaboration over competition. Practical learning over rote memorization. Community above all.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};