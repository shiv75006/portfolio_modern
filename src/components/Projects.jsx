import ProjectCard from './ProjectCard'
import { projectsList } from '../constants'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

const Projects = () => {
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
    <div id='projects' className='py-16 relative'>
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-sunset-orange/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-warm-gold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className='text-center'>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='section-title'>Projects</h1>
      </div>
      
      <div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mt-12'>
        <div className='relative'>
          <div data-aos="fade-up" data-aos-duration="1200" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {projectsList.map((project, index)=>(
              <ProjectCard 
                key={project.key} 
                {...project} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects