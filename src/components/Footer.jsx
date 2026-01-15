import { socials, navLinks } from '../constants'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState, useRef } from 'react';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [showIframe, setShowIframe] = useState(false);
    const iframeRef = useRef(null);

    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
    }, []);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        // Google Apps Script API endpoint for form submission
        const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbxR3CG6BLek44YewrDkwTC1Flym6iuRFGkqeaFB7FjAeSd47px89I_FvUVPgU03eXgG/exec';
        
        try {
            // First try the fetch approach with JSON data as per the script requirements
            const jsonData = JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message
            });
            
            // Use fetch with no-cors mode since cross-origin requests may be restricted
            const response = await fetch(googleScriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: jsonData
            });
            
            // Log submission attempt for debugging
            console.log('Form submission attempt with fetch:', {
                url: googleScriptUrl,
                formData: {
                    name: formData.name,
                    email: formData.email,
                    messageLength: formData.message.length
                }
            });
            
            // Reset form after successful submission
            setFormData({ name: '', email: '', message: '' });
            setSubmitStatus('success');
            setIsSubmitting(false);
        } catch (error) {
            console.error('Error submitting form with fetch:', error);
            
            // If fetch fails, try the iframe approach as fallback
            try {
                setShowIframe(true);
                
                // Create a hidden iframe for form submission
                if (iframeRef.current) {
                    // Create a form element
                    const form = document.createElement('form');
                    form.method = 'POST';
                    form.action = googleScriptUrl;
                    form.target = 'hidden-iframe';
                    form.enctype = 'text/plain'; // Important for JSON data
                    
                    // For JSON data, we need to create a single input field with the JSON string
                    // The name should be empty so it doesn't interfere with the JSON parsing
                    const jsonDataField = document.createElement('input');
                    jsonDataField.type = 'hidden';
                    jsonDataField.name = ''; // Empty name
                    
                    // Create the JSON data as expected by the Google Apps Script
                    const jsonData = JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        message: formData.message
                    });
                    
                    jsonDataField.value = jsonData;
                    form.appendChild(jsonDataField);
                    
                    // Log iframe submission attempt for debugging
                    console.log('Form submission attempt with iframe:', {
                        url: googleScriptUrl,
                        formData: {
                            name: formData.name,
                            email: formData.email,
                            messageLength: formData.message.length
                        }
                    });
                    
                    // Append form to body, submit it, then remove it
                    document.body.appendChild(form);
                    form.submit();
                    document.body.removeChild(form);
                    
                    // Reset form after successful submission
                    setFormData({ name: '', email: '', message: '' });
                    setSubmitStatus('success');
                } else {
                    setSubmitStatus('error');
                }
            } catch (iframeError) {
                console.error('Error submitting form with iframe:', iframeError);
                setSubmitStatus('error');
            } finally {
                setIsSubmitting(false);
            }
        }
    };
      
    return (
        <div id="contacts" className='py-16 relative'>
            {/* Hidden iframe for form submission fallback */}
            <iframe 
                name="hidden-iframe"
                ref={iframeRef}
                style={{display: 'none'}}
                title="Google Form Submission"
            ></iframe>
            {/* Background decorative elements */}
            <div className="absolute top-40 right-0 w-96 h-96 bg-muted-purple/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-40 left-10 w-80 h-80 bg-bluish-violet/5 rounded-full blur-3xl -z-10"></div>
            
            <div className='text-center mb-10'>
                <h1 data-aos="fade-up" data-aos-duration="1000" className='section-title'>Connect with Me</h1>
            </div>
            
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
                <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
                    {/* Subtle gradient accents */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-aqua-teal/10 to-muted-purple/10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-sunset-orange/10 to-warm-gold/10 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-3 sm:mb-4" data-aos="fade-up" data-aos-duration="1200">Get In Touch</h3>
                        
                        <p className="text-white/80 text-sm sm:text-base mb-8 md:mb-10" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">Let's connect and discuss how we can work together on your next project</p>
                        
                        {/* Contact Information Section */}
                        <div className="space-y-6 sm:space-y-8 mb-8 md:mb-10" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div className="flex items-start">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4 sm:mr-5 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-aqua-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white/60 text-xs sm:text-sm mb-1">Email</p>
                                    <p className="text-white text-sm sm:text-base font-medium">shivsaini75006@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4 sm:mr-5 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-sunset-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white/60 text-xs sm:text-sm mb-1">Location</p>
                                    <p className="text-white text-sm sm:text-base font-medium">Bangalore, India</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4 sm:mr-5 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-sunset-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white/60 text-xs sm:text-sm mb-1">Phone</p>
                                    <p className="text-white text-sm sm:text-base font-medium">+91-7017585059</p>
                                </div>
                            </div>
                            
                            <div className="pt-6 sm:pt-8">
                                <p className="text-white/60 text-xs sm:text-sm mb-4">Connect with Me</p>
                                <div className="flex gap-4 sm:gap-5">
                                    {socials.map((item) => (
                                        <a 
                                            key={item.key}
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center 
                                                    transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20 hover:shadow-glass-button" 
                                            href={item.ScmUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img src={item.ImgUrl} width={20} height={20} alt={item.name} className="w-5 h-5 sm:w-6 sm:h-6 object-contain filter brightness-0 invert" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Quick Links */}
                        <div className="border-t border-white/10 pt-4 sm:pt-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <div className="mb-4 md:mb-0">
                                    <h4 className="text-lg sm:text-xl font-bold gradient-text mb-2 sm:mb-3 text-center md:text-left">Quick Links</h4>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
                                        {navLinks.map((item) => (
                                            <a 
                                                key={item.label}
                                                className="text-sm sm:text-base text-white/70 hover:text-white transition-colors duration-300 hover:scale-105 transform inline-block" 
                                                href={item.href}
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="text-center md:text-right">
                                    <p className="text-white/50 text-xs sm:text-sm">
                                        &copy; {new Date().getFullYear()} Shivyanshu Saini. All rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts