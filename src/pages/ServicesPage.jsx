import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import servicesBg from '../assets/herobg.png';
import mindCta from '../assets/mind-cta.png';
import mind from '../assets/MIND.png';
import { treatmentServices } from '../data/services';

const ServicesPage = ({ onOpenModal }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeStyles, setActiveStyles] = useState({ left: 0, width: 0, opacity: 0, isInitial: true });
  const tabsRef = useRef({});
  const navigate = useNavigate();

  useEffect(() => {
    const activeEl = tabsRef.current['All'];
    if (activeEl) {
      setActiveStyles({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1,
        isInitial: true
      });
    }
  }, []);

  const handleFilterClick = (cat) => {
    setActiveFilter(cat);
    const el = tabsRef.current[cat];
    if (el) {
      setActiveStyles({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1,
        isInitial: false
      });
    }
  };

  const categories = ['All', 'Treatment', 'Preventive'];
  const filtered = activeFilter === 'All' ? treatmentServices : treatmentServices.filter(s => s.category === activeFilter);

  const [mobileVisibleCount, setMobileVisibleCount] = useState(5);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset mobile visible count when filter changes
  useEffect(() => {
    setMobileVisibleCount(5);
  }, [activeFilter]);
  // Preload service images once to avoid visible delay when switching categories.
  useEffect(() => {
    treatmentServices.forEach((service) => {
      if (!service.imageUrl) return;
      const img = new Image();
      img.src = service.imageUrl;
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#333] font-['Poppins sans-serif']">

      {/* Hero Section - Simplified and minimal */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-33 px-6 lg:px-12 bg-[#1a1817] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/70 z-10" />
          <div className="absolute top-[10%] right-[-10%] w-[40%] aspect-square bg-primary/20 rounded-full blur-[120px] animate-pulse z-10" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[30%] aspect-square bg-primary/10 rounded-full blur-[100px] z-10" />
          <img src={servicesBg} alt="Services" className="absolute inset-0 w-full h-full object-cover opacity-100" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">

          <h1 className="text-[36px] lg:text-[48px] font-medium leading-[1.05] mb-6 reveal opacity-0 tracking-tight" style={{ animationDelay: '0.2s' }}>
            Mental Health <span className="text-primary-light italic ">Services</span>
          </h1>
          <p className="text-white/60 text-[16px] lg:text-[16px] leading-relaxed max-w-2xl mx-auto reveal opacity-0" style={{ animationDelay: '0.4s' }}>
            Expert psychiatric care, evidence-based therapies, and compassionate support tailored to your journey.
          </p>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .slide-up { animation: slideUp 0.5s ease-out forwards; }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
        .scale-in { animation: scaleIn 0.35s ease-out forwards; }
      `}} />

      {/* Intro Strip */}
      <section className="py-16 px-6 lg:px-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.2 4.5A3.7 3.7 0 005.5 8.2v1.3a3 3 0 001.8 2.8v.2a2.5 2.5 0 002.5 2.5H12V6.8a2.3 2.3 0 00-2.8-2.3zM14.8 4.5A3.7 3.7 0 0118.5 8.2v1.3a3 3 0 01-1.8 2.8v.2a2.5 2.5 0 01-2.5 2.5H12V6.8a2.3 2.3 0 012.8-2.3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.8 9.2h.9M13.3 9.2h.9M9.8 12h.9M13.3 12h.9" />
                  </svg>
                ),
                title: 'Psychiatric Evaluation',
                desc: 'Comprehensive diagnosis by board-certified psychiatrists.'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5.5h16a1.5 1.5 0 011.5 1.5v8A1.5 1.5 0 0120 16.5h-9l-4 3v-3H4A1.5 1.5 0 012.5 15V7A1.5 1.5 0 014 5.5z" />
                    <circle cx="8" cy="11" r="1" fill="currentColor" stroke="none" />
                    <circle cx="12" cy="11" r="1" fill="currentColor" stroke="none" />
                    <circle cx="16" cy="11" r="1" fill="currentColor" stroke="none" />
                  </svg>
                ),
                title: 'Talk Therapy',
                desc: 'Personalized psychotherapy sessions for lasting change.'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 19V8" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 13c-3.6 0-5.8-2.4-5.8-5.8 3.4 0 5.8 2.2 5.8 5.8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 11.5c0-3.1 2.1-5 5.3-5 .1 3.2-1.8 5.3-5.3 5.3" />
                  </svg>
                ),
                title: 'Holistic Approach',
                desc: 'Mind-body wellness through evidence-based integrative care.'
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-8 rounded-[32px] bg-white border border-gray-100 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] transition-all duration-300 group">
                <div className="w-14 h-14 rounded-[18px] bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-1">
                  {React.cloneElement(item.icon, { className: "w-7 h-7" })}
                </div>
                <h3 className="font-bold text-gray-900 text-[20px]">{item.title}</h3>
                <p className="text-gray-500 text-[16px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-6 lg:px-12 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter - Grid on mobile for two lines, flex on desktop */}
          <div className="relative grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 mb-16 reveal opacity-0 no-scrollbar">
            {categories.map((cat) => {
              const el = tabsRef.current[cat];
              const pillOffset = el ? activeStyles.left - el.offsetLeft : 0;

              return (
                <button
                  key={cat}
                  ref={el => tabsRef.current[cat] = el}
                  onClick={() => handleFilterClick(cat)}
                  className={`relative px-[24px] py-[10px] rounded-full text-[14px] font-semibold transition-all duration-300 flex-shrink-0 cursor-pointer whitespace-nowrap active:scale-95 overflow-hidden ${cat === 'Preventive' ? 'col-span-2 md:col-span-1 justify-self-center md:justify-self-auto w-fit' : ''} ${activeFilter === cat
                    ? 'text-white max-sm:bg-primary shadow-lg shadow-primary/25'
                    : 'bg-transparent text-gray-500 border border-gray-100 hover:bg-primary/5 hover:text-primary hover:border-primary/20'
                    }`}
                >
                  {/* Sliding Background Window - Desktop Only */}
                  <div
                    className="absolute inset-0 pointer-events-none hidden sm:block"
                    style={{ opacity: activeStyles.opacity }}
                  >
                    <div
                      className="absolute inset-y-0 bg-primary rounded-full shadow-lg shadow-primary/25"
                      style={{
                        width: activeStyles.width,
                        transform: `translateX(${pillOffset}px)`,
                        transition: activeStyles.isInitial ? 'none' : 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1), width 500ms cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                  </div>
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Service Cards Grid */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal opacity-0"
          >
            {filtered.slice(0, isMobile ? mobileVisibleCount : filtered.length).map((service) => (
              <div
                key={service.slug}
                onClick={() => navigate(`/services/${service.slug}`)}
                className="bg-white rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 cursor-pointer hover:shadow-[0_20px_40px_rgb(151,97,71,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />

                  {/* Category Pill Floating on Image */}
                  <div className="absolute top-5 right-5 z-20">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-gray-900 shadow-sm`}>
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-[20px] font-medium text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-[16px] leading-relaxed mb-6 flex-grow">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2 flex items-center justify-between mt-auto">
                    <span className="text-primary font-semibold text-[14px] flex items-center gap-2 group/link">
                      Learn More
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button for Mobile only */}
          {isMobile && mobileVisibleCount < filtered.length && (
            <div className="flex justify-center mt-12 pb-8">
              <button
                onClick={() => setMobileVisibleCount(filtered.length)}
                className="bg-white border border-primary/20 text-primary px-[24px] py-[10px] rounded-full hover:bg-primary/5 shadow-md transition-all active:scale-95 text-[14px] font-semibold cursor-pointer tracking-wider uppercase"
              >
                View More Services
              </button>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              No services found in this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA section - Open Design without a box */}
      <section className="py-10 px-6 lg:px-12 bg-transparent text-gray-900 text-center overflow-hidden relative border-t border-gray-50">
        <div className="max-w-4xl mx-auto relative z-10 space-y-6 pb-20 pt-4">
          <h2 className="text-[28px] lg:text-[40px] font-medium leading-tight">Ready to explore our services?</h2>
          <p className="text-gray-500 text-[16px]">Book an appointment or call us to find the right treatment plan for you.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <button
              onClick={onOpenModal}
              className="bg-[#976147] text-white px-[24px] py-[10px] rounded-full hover:bg-[#7a4f3a] shadow-lg transition-all active:scale-95 text-[14px] cursor-pointer"
            >
              Make an Appointment
            </button>
            <a href="tel:+917016924443" className="bg-white border border-gray-200 text-gray-700 px-[24px] py-[10px] rounded-full text-[14px] hover:bg-gray-50 transition-all active:scale-95">
              Call Us Now
            </a>
          </div>
        </div>

        {/* Earthy-toned Wildflower Border - Horizontal bottom alignment */}
        <div className="absolute left-0 right-0 bottom-0 h-[220px] md:h-[300px] lg:h-[360px] opacity-[0.14] pointer-events-none select-none overflow-hidden">
          <img
            src="./earthy_floral_border.png"
            alt="earthy flower border"
            className="w-full h-full rotate-180 object-cover object-bottom scale-[1.8] translate-y-[30%] md:scale-[1.4] md:translate-y-[15%] lg:scale-100 lg:translate-y-0 transition-transform duration-1000"
          />
        </div>
      </section>


    </div>
  );
};

export default ServicesPage;
