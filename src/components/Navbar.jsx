import { navLinks } from '../constants'
import { useState, useEffect } from 'react';
import Menu from './menu_bars.png'

const Navbar = () => {
  const [navShow, setnavShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handlenavShow = () => {
    setnavShow(!navShow);
  }
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      scrolled ? 'bg-white/5 backdrop-blur-strong shadow-glass py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 flex justify-between items-center">
        {/* Empty div for layout balance on mobile */}
        <div className="md:hidden w-10"></div>
        
        {/* Desktop menu - centered */}
        <ul className="hidden md:flex gap-6 items-center mx-auto">
          {navLinks.map((item) => (
            <li className='group relative' key={item.label}>
              <a 
                className='font-medium text-white/70 hover:text-white block text-center transition-all duration-300' 
                href={item.href}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-white/30 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={handlenavShow}
            className="p-2 rounded-full bg-white/5 backdrop-blur-glass border border-white/10 transition-all duration-300 hover:bg-white/10"
          >
            <img 
              src={Menu} 
              width={18} 
              className='invert opacity-80' 
              alt="Menu"
            />
          </button>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        navShow ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-lg shadow-glass-card mx-3 mt-3 mb-2">
          <ul className="p-3 space-y-2">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a 
                  className='font-medium text-white/70 hover:text-white block py-2 text-center transition-all duration-300' 
                  href={item.href}
                  onClick={() => setnavShow(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar