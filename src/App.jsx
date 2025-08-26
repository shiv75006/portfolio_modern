import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"
import Contacts from "./components/Footer"
import Extracurriculars from "./components/Extracurriculars"
import { useEffect } from "react"

function App() {
  useEffect(() => {
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
