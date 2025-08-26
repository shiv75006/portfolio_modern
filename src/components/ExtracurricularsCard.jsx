import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ExtracurricularsCard = ({ title, position, description, index = 0 }) => {
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
      <div className="relative z-10 p-5 md:p-6 h-full flex flex-col">
        {/* Position tag */}
        <div className="mb-4">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/70 mb-3">
            {position}
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-3">
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-white/70 text-sm mb-6 flex-grow text-justify">
          {description}
        </p>
        
      </div>
    </div>
  );
}

export default ExtracurricularsCard