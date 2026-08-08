import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import eventsBg from '../assets/herobg.png';
import { blogPosts, pastEvents, upcomingEvents } from '../data/events';

const EventsPage = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeStyles, setActiveStyles] = useState({ left: 0, width: 0, opacity: 0, isInitial: true });
  const tabsRef = useRef({});
  const navigate = useNavigate();

  // Initialize position on mount
  useEffect(() => {
    const activeEl = tabsRef.current['all'];
    if (activeEl) {
      setActiveStyles({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1,
        isInitial: true
      });
    }
  }, []);

  const handleTabClick = (id) => {
    setActiveTab(id);
    const el = tabsRef.current[id];
    if (el) {
      setActiveStyles({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1,
        isInitial: false
      });
    }
  };

  const getActiveData = () => {
    switch (activeTab) {
      case 'all': return [...blogPosts, ...upcomingEvents, ...pastEvents];
      case 'blog': return blogPosts;
      case 'inner': return [...upcomingEvents, ...pastEvents];
      default: return blogPosts;
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#333] font-['Poppins sans-serif']">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-33 px-6 lg:px-12 bg-[#1a1817] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/70 z-10" />
          <div className="absolute top-[10%] left-[-10%] w-[40%] aspect-square bg-primary/20 rounded-full blur-[120px] animate-pulse z-10" />
          <img src={eventsBg} alt="Events" className="absolute inset-0 w-full h-full object-cover opacity-100" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">

          <h1 className="text-[36px] lg:text-[48px] font-medium leading-[1.05] mb-6 reveal opacity-0 tracking-tight" style={{ animationDelay: '0.2s' }}>
            Activities & <span className="text-primary-light italic font-serif">Events</span>
          </h1>
          <p className="text-white/60 text-[16px] lg:text-[16px] leading-relaxed max-w-2xl mx-auto reveal opacity-0 font-light" style={{ animationDelay: '0.4s' }}>
            Insights, updates, and community events from the team at MindCare to help you navigate mental wellness.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 lg:px-12 bg-[#fcfcfc] min-h-[600px]">
        <div className="max-w-7xl mx-auto">

          {/* Tabs - Forced 2-row grid for mobile, sliding pill for desktop */}
          <div className="relative grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 mb-16  no-scrollbar">
            {[
              { id: 'all', label: 'All' },
              { id: 'blog', label: 'Blog Articles' },
              { id: 'inner', label: 'Inner Architect' }
            ].map((tab) => {
              const el = tabsRef.current[tab.id];
              const pillOffset = el ? activeStyles.left - el.offsetLeft : 0;

              return (
                <button
                  key={tab.id}
                  ref={el => tabsRef.current[tab.id] = el}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative px-[12px] sm:px-[24px] py-[10px] rounded-full text-[12px] sm:text-[14px] font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 overflow-hidden ${activeTab === tab.id
                    ? 'text-white sm:text-white max-sm:bg-primary shadow-lg shadow-primary/25'
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
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal opacity-0"
          >
            {getActiveData().map((item, idx) => (
              <div
                key={item.slug}
                onClick={() => navigate(`/events/${item.slug}`)}
                className="bg-white rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group hover:shadow-[0_20px_40px_rgb(151,97,71,0.12)] flex flex-col cursor-pointer"
              >
                {/* Image Box */}
                <div className="relative h-[240px] overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => { e.target.src = 'https://MindCare.com/assets/images/backgrounds/pattern-1.png' }}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white text-primary rounded-full shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-[12px] font-semibold text-gray-400 mb-3 uppercase tracking-widest flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.date}
                  </div>

                  <h3 className="text-[20px] font-medium text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight font-serif">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-[16px] leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>

                  <div className="self-start text-[14px] hover:text-primary/80 font-bold text-primary flex items-center gap-2 group/btn pb-1 transition-all mt-auto">
                    Read More
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {getActiveData().length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-[18px]">No items found for this category at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Activity Section CTA - Synchronized with Services */}
      <section className="py-10 px-6 lg:px-12 bg-transparent text-gray-900 text-center overflow-hidden relative border-t border-gray-50">
        <div className="max-w-4xl mx-auto relative z-10 space-y-6 pb-20 pt-4">
          <h2 className="text-[28px] lg:text-[40px] font-medium leading-tight">Ready to join our activities?</h2>
          <p className="text-gray-500 text-[16px]">Get in touch to register for camps, workshops, or upcoming community events.</p>
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

        {/* Earthy-toned Wildflower Border - Mirrored from Services */}
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

export default EventsPage;
