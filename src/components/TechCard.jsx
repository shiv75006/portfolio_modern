import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const TechCard = ({ name, ImgUrl, index = 0 }) => {
  useEffect(() => {
    AOS.init({
      // Enable animations on all devices
      duration: 700,
      easing: "ease-out-cubic",
      // Optimize for mobile performance
      once: true,
      mirror: false,
      offset: 50
    });
  }, []);
  
  // Calculate delay for staggered animations
  const getDelay = () => {
    return 100 + (index * 50);
  };
  
  return (
    <div 
      data-aos="zoom-in" 
      data-aos-duration="1200"
      data-aos-delay={getDelay()}
      className='flex flex-col items-center w-28 md:w-32 mb-8 group'
    >
      <div className='relative mb-5 transition-all duration-300 group-hover:shadow-glass-card rounded-full p-1'>
        {/* Glass background effect */}
        <div className='absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-30 rounded-full blur-sm transition-all duration-300'></div>
        
        {/* Icon container */}
        <div className='relative z-10 p-5 rounded-full bg-white/5 backdrop-blur-glass border border-white/10 
                      transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10
                      flex items-center justify-center shadow-glass-card'>
          <img 
            className='w-14 h-14 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-110' 
            src={ImgUrl} 
            alt={name}
          />
        </div>
      </div>
      
      <p className='font-medium text-white/80 group-hover:text-white transition-all duration-300 text-center'>{name}</p>
    </div>
  );
}

export default TechCard