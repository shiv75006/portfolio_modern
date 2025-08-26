import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div id='about' className='py-16 relative'>
            {/* Background decorative elements */}
            <div className="absolute top-40 left-0 w-96 h-96 bg-muted-purple/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-40 right-10 w-80 h-80 bg-aqua-teal/5 rounded-full blur-3xl -z-10"></div>
            
            <div className='text-center'>
                <h1 data-aos="fade-up" data-aos-duration="1000" className='section-title'>About Me</h1>
            </div>

            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mt-12">
                <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
                    {/* Subtle gradient accents */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-aqua-teal/10 to-muted-purple/10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-sunset-orange/10 to-warm-gold/10 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10">
                        <div className="text-white/80 space-y-4 sm:space-y-6" data-aos="fade-up" data-aos-duration="1000">
                            <p className="text-base sm:text-lg text-justify">
                                Hi, I'm Shivyanshu Saini, an Engineer Trainee at HashedIn by Deloitte, where I'm working on building scalable backend services and interactive frontends for enterprise-grade applications. My work involves developing applications with Java Spring Boot, Angular, and data pipelines using PySpark and Kafka, giving me hands-on experience across the full stack.
                            </p>
                            
                            <p className="text-base sm:text-lg text-justify">
                                I've also built 5+ web applications independently, focusing on performance, real-time API integration, and user experience optimization. My projects include an AI-powered travel itinerary planner and several responsive web platforms, where I combined React.js, Tailwind CSS, and cloud technologies to deliver fast, reliable, and user-friendly solutions.
                            </p>
                            
                            <p className="text-base sm:text-lg text-justify">
                                Beyond coding, I enjoy problem-solving, exploring new technologies, and contributing to the developer community. As Chairperson of the GEU ACM Student Chapter, I organized hackathons and workshops that engaged 500+ participants, fostering collaboration and innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;