import { experience } from '../constants'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Experience = () => {
    useEffect(() => {
        AOS.init({
          // Enable animations on all devices
          duration: 700,
          easing: "ease-out-cubic",
          // Reduce animation distance on mobile for better performance
          once: true,
          mirror: false,
          offset: 50
        });
    }, []);

    return (
        <div id='experience' className='py-16 relative'>
            {/* Background decorative elements */}
            <div className="absolute top-40 left-0 w-72 h-72 bg-muted-purple/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-aqua-teal/5 rounded-full blur-3xl -z-10"></div>
            
            <div className='text-center'>
                <h1 data-aos="fade-up" data-aos-duration="1000" className='section-title'>Experience</h1>
            </div>

            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mt-12">
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-white/20 hidden md:block"></div>
                    
                    {experience.map((item, index) => (
                        <div 
                            key={item.key} 
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} 
                            data-aos-duration="1200"
                            className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:ml-0' : 'md:pl-8 md:ml-auto'} mb-10`}
                        >
                            {/* Timeline dot removed as per requirement */}
                            
                            <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl shadow-glass-card relative overflow-hidden">
                                <div className="relative z-10 p-3 sm:p-4 md:p-5">
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-3 mb-4">
                                        <div>
                                            <h2 className="text-xl font-bold text-white mb-1">{item.company}</h2>
                                            <h3 className="text-lg font-medium">
                                                <span className="bg-gradient-to-r from-[#E47A69] via-[#851C3E] to-[#44165B] inline-block text-transparent bg-clip-text">{item.position}</span>
                                            </h3>
                                        </div>
                                        <div className="pill-tag">{item.duration}</div>
                                    </div>
                                    
                                    {item.location && (
                                        <p className="text-white/70 mb-3 flex items-center text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {item.location}
                                        </p>
                                    )}
                                    
                                    <p className="text-white/70 mb-4 text-sm leading-relaxed line-clamp-3 hover:line-clamp-none transition-all duration-300 text-justify">{item.description}</p>
                                    
                                    {item.technologies && (
                                        <div className="mt-4">
                                            <p className="text-xs font-semibold text-white/80 mb-2 flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Technologies
                                            </p>
                                            <div className="flex flex-wrap gap-1">
                                                {item.technologies.slice(0, 5).map((tech, index) => (
                                                    <span 
                                                        key={index} 
                                                        className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-white/5 text-white/70"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {item.technologies.length > 5 && (
                                                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-white/5 text-white/70">
                                                        +{item.technologies.length - 5} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience