import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"
import Contacts from "./components/Footer"
import Extracurriculars from "./components/Extracurriculars"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    // Initialize AOS globally with better settings
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false, // Changed to false to allow multiple triggers
      mirror: true, // Allow animations to trigger on scroll down and up
      offset: 50, // Trigger when element is 50px from viewport
      disable: false // Enable on all devices
    });

    // Debounced scroll handler to refresh AOS
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        AOS.refresh();
      }, 100); // Debounce for 100ms
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Add classes to the body for global styling with gradient background
    document.body.classList.add('min-h-screen', 'text-white', 'bg-site-background', 'bg-no-repeat', 'bg-center-top', 'bg-fixed', 'bg-auto-contain');
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Clean up function
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('min-h-screen', 'text-white', 'bg-site-background', 'bg-no-repeat', 'bg-center-top', 'bg-fixed', 'bg-auto-contain');
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        });
      });
    };
  }, []);

  return (
   <div className="min-h-screen overflow-hidden">
      {/* Main content */}
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <AboutMe />
          <Experience />
          <Projects />
          <TechStack />
          <Extracurriculars />
          <Contacts />
        </main>
      </div>
   </div>
  )
}

export default App
