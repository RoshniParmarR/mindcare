import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/ChatGPT Image Aug 4, 2026, 10_30_58 PM.png';

const Footer = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handlePageClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary/5 pt-16 font-['Poppins sans-serif'] border-t border-primary/20 relative overflow-hidden">


      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="mb-20 flex flex-col items-center text-center space-y-10">
          <div className="flex flex-col items-center gap-4">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="h-20 md:h-24 w-auto mb-2 block hover:opacity-80 transition-opacity">
              <img src={logo} alt="MindCare Logo" className="h-full w-auto object-contain" />
            </a>
            <div className="max-w-3xl">
              <p className="text-gray-600 text-[16px] leading-relaxed">
                At MindCare Mental Health Clinic, We provide a calm and compassionate space where every individual is truly heard and understood. Blending clinical expertise with genuine empathy, we offer personalized care that supports emotional healing, resilience, and balance.
              </p>
            </div>
          </div>

          {/* Social Hub - Desktop Only (Original Position) */}
          <div className="hidden lg:flex flex-col items-center gap-4">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em]">Find Us On</span>
            <div className="flex gap-7">
              <a href="https://www.facebook.com/people/Monoharmony-Mental-Health/61573840046292/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-900 hover:text-primary hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-facebook-f" style={{ fontSize: '20px' }} aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/Mindcare_mentalhealth/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-900 hover:text-primary hover:-translate-y-1 transition-all duration-300">
                <i className="fa-brands fa-square-instagram" style={{ fontSize: '24px' }} aria-hidden="true"></i>
              </a>
              <a href="https://www.google.com/search?q=Mindcare+mental+health+clinic&rlz=1C1VDKB_enIN1094IN1094&oq=m&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MgYIABBFGDsyCAgBEEUYJxg7MggIAhBFGCcYOzIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyMjM5ajBqN6gCCLACAfEF2wJaiXXmJuI&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer" aria-label="Google" className="text-gray-900 hover:text-primary hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-google" style={{ fontSize: '20px' }} aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 lg:gap-y-16">

          {/* Column 1: Explore & Socials - Split Column for Mobile */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 space-y-6 order-4 lg:order-1">
            <div className="flex gap-10 pb-0">
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-[16px] border-b border-primary/20 pb-3 inline-block">Explore</h4>
              </div>
              <div className="lg:hidden flex-1">
                <span className="text-[16px] font-bold text-gray-900 border-b border-primary/20 pb-3 inline-block">Find Us On</span>
              </div>
            </div>

            <div className="flex gap-10">
              {/* Explore Links */}
              <ul className="space-y-4 text-gray-600 text-[16px] flex-1">
                <li><a href="/about" onClick={(e) => handlePageClick(e, '/about')} className="hover:text-primary transition-colors block">About</a></li>
                <li><a href="/gallery" onClick={(e) => handlePageClick(e, '/gallery')} className="hover:text-primary transition-colors block">Gallery</a></li>
                <li><a href="/events" onClick={(e) => handlePageClick(e, '/events')} className="hover:text-primary transition-colors block">Activities</a></li>
                <li><a href="/contact" onClick={(e) => handlePageClick(e, '/contact')} className="hover:text-primary transition-colors block">Contact</a></li>
              </ul>

              {/* Mobile Socials - Aligned horizontally */}
              <div className="lg:hidden flex-1">
                <ul className="flex gap-6 pt-1">
                  <li>
                    <a href="https://www.facebook.com/people/Monoharmony-Mental-Health/61573840046292/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-all duration-300">
                      <i className="fab fa-facebook-f" style={{ fontSize: '18px' }}></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/Mindcare_mentalhealth/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-all duration-300">
                      <i className="fa-brands fa-square-instagram" style={{ fontSize: '20px' }}></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/search?q=Mindcare+mental+health+clinic&rlz=1C1VDKB_enIN1094IN1094&oq=m&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MgYIABBFGDsyCAgBEEUYJxg7MggIAhBFGCcYOzIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyMjM5ajBqN6gCCLACAfEF2wJaiXXmJuI&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-all duration-300">
                      <i className="fab fa-google" style={{ fontSize: '18px' }}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 2: Treatment Services */}
          <div className="col-span-1 lg:col-span-3 space-y-6 order-1 lg:order-2">
            <div className="space-y-6">
              <h4 className="font-bold text-gray-900 border-b text-[16px] border-primary/20 pb-3 inline-block">Our Services</h4>
              <div className="space-y-4">
                <p className="text-[12px] font-bold text-primary uppercase tracking-widest">Preventive</p>
                <ul className="space-y-4 text-gray-600 text-[16px] sm:text-[16px] whitespace-nowrap overflow-hidden text-ellipsis">
                  <li><a href="/services/meditation" onClick={(e) => handlePageClick(e, '/services/meditation')} className="hover:text-primary transition-colors block text-ellipsis overflow-hidden">Meditation</a></li>
                  <li><a href="/services/stress-management" onClick={(e) => handlePageClick(e, '/services/stress-management')} className="hover:text-primary transition-colors block text-ellipsis overflow-hidden">Stress Management</a></li>
                  <li><a href="/services/emotion-management" onClick={(e) => handlePageClick(e, '/services/emotion-management')} className="hover:text-primary transition-colors block text-ellipsis overflow-hidden">Emotion Management</a></li>
                  <li><a href="/services/anger-management" onClick={(e) => handlePageClick(e, '/services/anger-management')} className="hover:text-primary transition-colors block text-ellipsis overflow-hidden">Anger Management</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Preventive Services */}
          <div className="col-span-1 lg:col-span-3 space-y-6 order-2 lg:order-3">
            <div className="space-y-6">
              <h4 className="font-bold text-transparent border-b text-[16px] border-transparent pb-3 block opacity-0 select-none pointer-events-none">Our Services</h4>
              <div className="space-y-4">

                <p className="text-[12px] font-bold text-primary uppercase tracking-widest">Treatment</p>
                <ul className="space-y-4 text-gray-600 text-[16px] whitespace-nowrap overflow-hidden text-ellipsis">
                  <li><a href="/services/treating-depression" onClick={(e) => handlePageClick(e, '/services/treating-depression')} className="hover:text-primary transition-colors block text-ellipsis overflow-hidden">Treating Depression</a></li>
                  <li><a href="/services/overcoming-anxiety" onClick={(e) => handlePageClick(e, '/services/overcoming-anxiety')} className="hover:text-primary transition-colors block text-ellipsis overflow-hidden">Overcoming Anxiety</a></li>
                  <li><a href="/services/improve-concentration-memory" onClick={(e) => handlePageClick(e, '/services/improve-concentration-memory')} className="hover:text-primary transition-colors block text-ellipsis overflow-hidden">Concentration & Memory</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Details */}
          <div className="col-span-2 md:col-span-1 lg:col-span-4 space-y-6 order-3 lg:order-4">
            <h4 className="font-bold text-gray-900 border-b text-[16px] border-primary/20 pb-3 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-gray-600 text-[16px]">
              <li className="flex gap-3">
                <span className="shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <span className="leading-relaxed">
                  5th Floor, Red Coral Hamptons,<br className="hidden xl:block" /> In Front of Benjamin World School,<br className="hidden xl:block" /> Gotri - Sevasi Road, Gotri, Vadodara.
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                <a href="tel:+917016924443" className="hover:text-primary transition-colors">+91 70169 24443</a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                <a href="mailto:support@Mindcare.com" className="hover:text-primary transition-colors font-medium">support@Mindcare.com</a>
              </li>
            </ul>
          </div>


        </div>


      </div>

      {/* Bottom Bar: Copyright and Developers with Border */}
      <div className="border-t border-primary/20 mt-12 bg-white/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-5 text-[14px] md:text-[11px] lg:text-[14px] text-gray-500 font-medium tracking-wide text-center md:text-left">
          <p className="w-full md:w-auto">
            © Copyright 2026 | All rights reserved by MindCare.
          </p>
          <div className="order-1 lg:order-3 flex flex-col items-center lg:flex-row lg:gap-1.5 lg:flex-1 lg:justify-end">
            <span className="opacity-80">Developed by</span>
            <a href="https://roshniparmarr.github.io/RPPortfolio/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white font-medium text-gray-400">Roshni</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
