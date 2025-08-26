import ExtracurricularsCard from './ExtracurricularsCard'
import { extracurriculars } from '../constants'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Extracurriculars = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div id='extracurriculars' className='py-16 relative'>
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-sunset-orange/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-warm-gold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className='text-center'>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='section-title'>Extracurriculars</h1>
        <p data-aos="fade-up" data-aos-duration="1200" className="hero-subtitle mt-4">
          Leadership roles and activities that showcase my involvement beyond technical skills.
        </p>
      </div>
      
      <div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mt-12'>
        <div className='relative'>
          <div data-aos="fade-up" data-aos-duration="1200" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {extracurriculars.map((item, index) => (
              <ExtracurricularsCard 
                key={item.key} 
                {...item} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Extracurriculars