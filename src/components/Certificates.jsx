import { badge } from "../assets"
import { certificates } from "../constants"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Certificates = () => {
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div id='certificates' className='py-16 relative'>
            {/* Background decorative elements */}
            <div className="absolute top-40 right-0 w-96 h-96 bg-muted-purple/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-40 left-10 w-80 h-80 bg-aqua-teal/5 rounded-full blur-3xl -z-10"></div>
            
            <div className='text-center'>
                <h1 data-aos="fade-up" data-aos-duration="1000" className='section-title'>Certifications</h1>
                <p data-aos="fade-up" data-aos-duration="1200" className="hero-subtitle mt-4 text-justify">
                    Professional certifications and achievements that validate my expertise and continuous learning journey.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mt-12">
                <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
                    {/* Subtle gradient accents */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-aqua-teal/10 to-muted-purple/10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-sunset-orange/10 to-warm-gold/10 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10">
                        {/* Badge section */}
                        <div className="flex justify-center items-center mb-10">
                            <div 
                                className="relative group" 
                                data-aos="zoom-in" 
                                data-aos-duration="1000"
                            >
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-border opacity-0 group-hover:opacity-30 rounded-full blur-md transition-all duration-500"></div>
                                
                                {/* Badge container */}
                                <div className="relative z-10 p-6 rounded-full bg-white/5 backdrop-blur-glass border border-white/10 
                                              shadow-glass-card group-hover:shadow-gradient-glow transition-all duration-500 
                                              group-hover:border-white/20 group-hover:bg-white/10">
                                    <img 
                                        data-aos="flip-right" 
                                        data-aos-duration="1500" 
                                        data-aos-delay="300"
                                        className="w-64 md:w-72 transition-transform duration-500 group-hover:scale-105" 
                                        src={badge} 
                                        alt="Certification Badge" 
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Certificates grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {certificates.map((item, index) => (
                                <div 
                                    key={item.id} 
                                    className="floating-card glow-border group relative overflow-hidden h-full" 
                                    data-aos="fade-up" 
                                    data-aos-delay={100 + (index * 100)}
                                >
                                    {/* Hover overlay with gradient */}
                                    <div className="absolute inset-0 bg-gradient-button opacity-0 group-hover:opacity-80 transition-all duration-500 rounded-2xl z-10"></div>
                                    
                                    {/* Certificate image */}
                                    <img 
                                        className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110" 
                                        src={item.link} 
                                        alt={`Certificate ${item.id}`}
                                    />
                                    
                                    {/* Hover content */}
                                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                                        <p className="text-xl font-bold text-white mb-3">Certificate #{item.id}</p>
                                        <p className="text-white/90 text-center mb-6 text-justify">Professional achievement in technology and development</p>
                                        <button className="glass-button text-sm">
                                            View Certificate
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificates