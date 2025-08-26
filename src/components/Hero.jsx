import { heroContent, socials } from '../constants'

const Hero = () => {
  return (
    <div id="home" className="py-16 mt-8 relative overflow-hidden w-full">
      {/* Fade effect at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent"></div>
      
      {heroContent.map((item, index) =>
        <div key={index} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative flex justify-center">
          <div className="w-full max-w-6xl p-4 sm:p-6 md:p-8 relative overflow-hidden">
            
            <div className="flex flex-col items-center justify-center text-center relative z-10">
              {/* Hero content */}
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="space-y-2">
                  <p className="text-white/70 uppercase tracking-wider text-xs sm:text-sm md:text-base font-medium">Portfolio</p>
                  <h1 className="text-5xl sm:text-6xl md:text-10xl lg:text-[100px] font-black tracking-tight leading-tight">
                    <div className="bg-gradient-to-r from-[#E47A69] via-[#851C3E] to-[#44165B] inline-block text-transparent bg-clip-text">
                      <span className="block font-ophelia">{item.firstName}</span>
                      <span className="block font-ophelia">{item.lastName}</span>
                    </div>
                  </h1>
                </div>
                
                <div className="h-px w-32 bg-white/20 my-6 mx-auto"></div>
                
                <p className="inline-block px-3 sm:px-4 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 mx-auto">
                  Web Technologies / Machine Learning / Cloud Computing
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mt-3 sm:mt-4">{item.bio}</p>
                
                <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center">
                  <a 
                    href="https://drive.google.com/uc?export=download&id=1XJoH_YMvppF7oHadNWGovLFt7CIlpF12" 
                    className="bg-white/10 border border-white/10 rounded-full px-3 sm:px-4 py-1.5 text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-white/15 hover:border-white/20 group"
                    download="Shivyanshu_Saini_Resume.pdf"
                  >
                    <span className="flex items-center">
                      Download CV 
                      <svg className="ml-1 sm:ml-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                  
                  <a 
                    href="#contacts" 
                    className="bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-1.5 text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                  >
                    Contact Me
                  </a>
                </div>

                <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 items-center justify-center">
                  {socials.map((soc, idx) =>
                  <a 
                    key={idx} 
                    className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                    href={soc.ScmUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src={soc.ImgUrl} height={16} width={16} alt={soc.name} className="w-4 h-4 sm:w-5 sm:h-5 invert opacity-80 hover:opacity-100 transition-opacity duration-300" />
                  </a>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero