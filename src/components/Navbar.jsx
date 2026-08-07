import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/ChatGPT Image Aug 4, 2026, 10_30_58 PM.png';

const Navbar = ({ onOpenModal }) => {
  const [pastHero, setPastHero] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isInnerPage = !isHomePage;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const [navOffset, setNavOffset] = useState(0);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY.current;
      const firstSection = document.querySelector('section');

      if (!firstSection) {
        setPastHero(true);
      } else {
        const { bottom } = firstSection.getBoundingClientRect();
        setPastHero(bottom <= 0);
      }

      // Handle dynamic offset to match scroll speed
      // When scrolling down (deltaY > 0), the navbar moves up (navOffset decreases)
      // When scrolling up (deltaY < 0), the navbar moves down (navOffset increases)
      if (currentScrollY > 100) {
        const height = navRef.current?.offsetHeight || 80;
        setNavOffset(prev => {
          const next = prev - deltaY;
          const capped = Math.max(-height, Math.min(0, next));
          // Only update state if the value actually changed to avoid redundant renders
          return Math.abs(prev - capped) < 0.1 ? prev : capped;
        });
      } else {
        setNavOffset(0);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', href: '/', isHome: true },
    { label: 'About', href: '/about', page: true },
    { label: 'Services', href: '/services', page: true },
    { label: 'Gallery', href: '/gallery', page: true },
    { label: 'Activities', href: '/events', page: true },
    { label: 'Contact', href: '/contact', page: true },
  ];

  const isActive = (link) => {
    if (link.isHome) return location.pathname === '/';
    if (link.page) {
      return location.pathname === link.href || location.pathname.startsWith(link.href + '/');
    }
    return location.pathname === link.href;
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (isInnerPage) {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const handleLinkClick = (link) => {
    closeMenu();
    if (link.page || link.isHome) {
      navigate(link.href);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      if (isInnerPage) {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) el.scrollIntoView({ behavior: 'auto' });
        }, 300);
      } else {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'auto' });
      }
    }
  };

  const positionClass = !pastHero ? 'absolute' : 'fixed';
  const bgClass = pastHero && !isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent';
  const textInverse = !pastHero;
  const isHeroLogo = !pastHero && !isMenuOpen;
  const logoSrc = logo;

  return (
    <>
      <nav
        ref={navRef}
        style={{ transform: `translateY(${navOffset}px)` }}
        className={`${positionClass} top-0 left-0 right-0 z-[60] transition-[background-color,padding,box-shadow,opacity] duration-300 w-full px-6 lg:px-12 py-2 ${bgClass} ${isMenuOpen ? '!shadow-none' : ''}`}
      >
        <div className="max-w-7xl mx-auto flex items-center min-h-[60px] w-full">
          <div className="flex w-auto lg:w-[10rem] flex-shrink-0 items-center justify-start z-[70]">
            <a href="/" onClick={handleHomeClick} className="block outline-none border-none">
              <div className={`transition-all duration-500 ease-in-out flex items-center justify-center overflow-hidden ${isHeroLogo
                ? 'w-14 h-14 md:w-18 md:h-18 rounded-full bg-white border-2 border-primary/25 shadow-md p-2'
                : 'h-11 md:h-12 w-auto border-none bg-transparent shadow-none p-0'
                }`}>
                <img
                  src={logoSrc}
                  alt="MindCare Logo"
                  className="h-full w-auto object-contain transition-all duration-500 outline-none border-none"
                />
              </div>
            </a>
          </div>

          <ul className="hidden lg:flex flex-1 items-center justify-center gap-8 z-10 min-w-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => handleLinkClick(link)}
                  className={` text-[14px] tracking-[0.01em] transition-colors cursor-pointer bg-transparent border-none relative group ${pastHero ? 'text-gray-800 hover:text-primary' : 'text-white/90 hover:text-white drop-shadow-md'}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full transition-all duration-300 transform ${isActive(link) ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'}`} />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex w-10 lg:w-[13.5rem] flex-shrink-0 items-center justify-end gap-4 ml-auto lg:ml-0 z-[70]">
            <button
              type="button"
              onClick={onOpenModal}
              className={`!hidden lg:!inline-block scale-90 tracking-[0.01em] lg:scale-100 cursor-pointer shadow-sm border transition-all duration-300 whitespace-nowrap ${pastHero ? 're-btn-primary border-primary/10' : 'bg-white text-gray-900 px-6 py-2.5 rounded-full text-[14px] hover:bg-primary hover:text-white border-transparent shadow-lg'}`}
            >
              Make an Appointment
            </button>

            <button
              onClick={toggleMenu}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <span className="absolute block w-6 h-[1px] bg-gray-900 rotate-45 transition-transform duration-300"></span>
                  <span className="absolute block w-6 h-[1px] bg-gray-900 -rotate-45 transition-transform duration-300"></span>
                </div>
              ) : (
                <>
                  <span className={`block w-7 h-[1px] transition-all duration-300 ${pastHero ? 'bg-gray-900' : 'bg-white drop-shadow-md'}`}></span>
                  <span className={`block w-5 h-[1px] transition-all duration-300 self-end ${pastHero ? 'bg-gray-900' : 'bg-white drop-shadow-md'}`}></span>
                  <span className={`block w-7 h-[1px] transition-all duration-300 ${pastHero ? 'bg-gray-900' : 'bg-white drop-shadow-md'}`}></span>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-white/90 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col pt-22 pr-6  pl-10 max-w-7xl mx-auto">
          <ul className="space-y-6">
            {navLinks.map((link, idx) => (
              <li key={link.label} className={`transition-all duration-500 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: `${idx * 50}ms` }}>
                <button
                  onClick={() => handleLinkClick(link)}
                  className="text-[16px] font-bold text-gray-900 hover:text-primary transition-colors flex items-center justify-between w-full group"
                >
                  {link.label}
                  <span className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${isActive(link) ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' : 'border-gray-100 group-hover:bg-primary/5'}`}>
                    <svg className={`w-4 h-4 ${isActive(link) ? 'text-white' : 'text-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className={`mt-auto pb-12 transition-all duration-500 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              type="button"
              onClick={() => { closeMenu(); onOpenModal(); }}
              className="re-btn-primary w-full justify-center text-lg py-5"
            >
              Make an Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
