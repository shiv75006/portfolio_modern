import React from 'react'
import { techStack } from '../constants'
import TechCard from './TechCard'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

const TechStack = () => {
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

  return (
    <div id='tech-Stack' className='py-16 relative'>
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-bluish-violet/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-muted-purple/5 rounded-full blur-3xl -z-10"></div>
      
      <div className='text-center'>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='section-title'>Tech Stack</h1>
      </div>
      
      <div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mt-12'>
        <div className='glass-panel p-6 md:p-8 relative overflow-hidden'>
          {/* Subtle gradient accent */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-aqua-teal/10 to-muted-purple/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-sunset-orange/10 to-warm-gold/10 rounded-full blur-2xl"></div>
          
          <div className='relative z-10'>
            <p data-aos="fade-up" data-aos-duration="1200" className="text-center text-white/70 max-w-2xl mx-auto mb-8">
              My technical toolkit includes a diverse range of languages, frameworks, and tools that I've mastered to create exceptional digital experiences.
            </p>
            
            <div data-aos="fade-up" data-aos-duration="1400" className='flex justify-center flex-wrap gap-6 md:gap-8'>
              {techStack.map((tech, index) => (
                <TechCard 
                  key={tech.key} 
                  {...tech} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack