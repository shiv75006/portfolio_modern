import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ProjectCard = ({name, techStack, description, href, linkName, index = 0}) => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
    }, []);

    // Calculate delay for staggered animations
    const getDelay = () => {
        return 100 + (index * 100);
    };

    return (
        <div 
            data-aos="fade-up" 
            data-aos-duration="1200"
            data-aos-delay={getDelay()}
            className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl shadow-glass-card h-full group transition-all duration-300 hover:bg-white/8 hover:border-white/15"
        >
            <div className="relative z-10 p-4 md:p-5 h-full flex flex-col">
                {/* Project title */}
                <div className="mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{name}</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack && techStack.split(/[,/]/).map((tech, i) => (
                            <div key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/70 hover:bg-white/10 transition-colors duration-300">
                                {tech.trim()}
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Project description */}
                <p className="text-white/70 text-sm mb-4 flex-grow text-justify">{description}</p>
                
                {/* Project link */}
                <div className="mt-auto pt-3">
                    <a 
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="bg-white/10 backdrop-blur-glass border border-white/10 rounded-full px-4 py-2 text-sm text-white font-medium transition-all duration-300 hover:bg-white/15 hover:border-white/20 inline-flex items-center"
                    >
                        <span>View Project</span>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-3.5 w-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard