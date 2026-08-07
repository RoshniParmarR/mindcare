import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import galleryBg from '../assets/herobg.png';

import mindCta from '../assets/mind-cta.png';
import mind from '../assets/MIND.png';


const images = [
  // New Real Clinic Images
  { src: "src/assets/Exterior_1.jpg", caption: "Exterior 1", category: "Clinic Spaces", type: 'feature' },
  { src: "src/assets/Reception.jpg", caption: "Reception", category: "Clinic Spaces", type: 'tall' },
  { src: "src/assets/Consultation_Cabin.jpg", caption: "Consultation Cabin", category: "Clinic Spaces", type: 'normal' },
  { src: "src/assets/Waiting__Cafe.jpg", caption: "Waiting & Cafe", category: "Clinic Spaces", type: 'wide' },
  { src: "src/assets/Cafe.jpg", caption: "Cafe", category: "Clinic Spaces", type: 'normal' },
  { src: "src/assets/Day_Care.jpg", caption: "Day Care", category: "Clinic Spaces", type: 'normal' },
  { src: "src/assets/Entry.jpg", caption: "Entry", category: "Clinic Spaces", type: 'tall' },
  { src: "src/assets/Logo & Waiting.jpg", caption: "Logo & Waiting", category: "Clinic Spaces", type: 'wide' },
  { src: "src/assets/Logo.jpg", caption: "Logo", category: "Clinic Spaces", type: 'normal' },
  { src: "src/assets/Exterior_2.jpg", caption: "Exterior 2", category: "Clinic Spaces", type: 'normal' },
  { src: "src/assets/Exterior_3.jpg", caption: "Exterior 3", category: "Clinic Spaces", type: 'normal' },
  { src: "src/assets/Clinic Logo.png", caption: "Clinic Logo", category: "Clinic Spaces", type: 'normal' },
  { src: "src/assets/Ganesh.jpg", caption: "Ganesh", category: "Clinic Spaces", type: 'normal' },
  // Old Original Images

  { src: "src/assets/img11.jpg", category: "Outdoor", caption: "Clinic Exterior", type: 'normal' },
  { src: "src/assets/img8.jpg", caption: "De-Addiction Wing", category: "Clinic Spaces", type: 'feature' },
  { src: "src/assets/about-us.jpg", caption: "Our Team", category: "Clinic Spaces", type: 'tall' },
  // Event Images
  { src: "src/assets/activity4.png", caption: "सतरंगी मन", category: "Events", type: 'normal', slug: "satrangi-man" },
  { src: "src/assets/activity5.jpg", caption: "मन की बात", category: "Events", type: 'normal', slug: "man-ki-baat" },
  { src: "src/assets/emotion-img1.png", caption: "Emotional Reboot", category: "Events", type: 'normal', slug: "emotional-reboot" },
  { src: "src/assets/Inner-architect-1.jpg", caption: "Inner Architect 1", category: "Events", type: 'wide' },
  { src: "src/assets/Inner-architect-2.jpeg", caption: "Inner Architect 2", category: "Events", type: 'normal' },
  { src: "src/assets/Inner-architect-3.jpg", caption: "Inner Architect 3", category: "Events", type: 'normal' },
];


const categories = ['All', 'Clinic Spaces', 'Events'];

const GalleryImage = React.memo(({ img, idx, onImageClick }) => {
  return (
    <div
      onClick={() => onImageClick(img, idx)}
      className="group relative overflow-hidden rounded-[24px] cursor-pointer border border-gray-100 w-full h-full"
    >
      <img
        src={img.src}
        alt={img.caption}
        className={`w-full h-full object-cover`}
        loading={idx < 4 ? "eager" : "lazy"}
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-white font-medium text-[16px] tracking-tight">{img.caption}</p>
          <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
            <span className="text-white/80 text-[11px] font-medium uppercase tracking-wider">Expand View</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default function GalleryPage({ onOpenModal }) {
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeStyles, setActiveStyles] = useState({ left: 0, width: 0, opacity: 0, isInitial: true });
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const tabsRef = useRef({});

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

  const handleCategoryChange = React.useCallback((cat) => {
    setActiveCategory(cat);
    const el = tabsRef.current[cat];
    if (el) {
      setActiveStyles({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1,
        isInitial: false
      });
    }
  }, []);

  const filteredImages = React.useMemo(() => {
    return images.filter(img => activeCategory === 'All' || img.category === activeCategory);
  }, [activeCategory]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImg) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [selectedImg]);

  // Images are handled via native browser loading for maximum performance.

  const openModal = React.useCallback((img, idx) => {
    setSelectedImg(img);
    setSelectedIdx(idx);
  }, []);

  const handleImageClick = React.useCallback((img, idx) => {
    if (img.category === 'Events' && img.slug) {
      navigate(`/events/${img.slug}`);
    } else {
      openModal(img, idx);
    }
  }, [navigate, openModal]);

  const closeModal = React.useCallback(() => {
    setSelectedImg(null);
    setSelectedIdx(null);
  }, []);

  const goPrev = React.useCallback((e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (selectedIdx === 0) return;
    const newIdx = selectedIdx - 1;
    setDirection(-1);
    setSelectedImg(filteredImages[newIdx]);
    setSelectedIdx(newIdx);
  }, [selectedIdx, filteredImages]);

  const goNext = React.useCallback((e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (selectedIdx === filteredImages.length - 1) return;
    const newIdx = selectedIdx + 1;
    setDirection(1);
    setSelectedImg(filteredImages[newIdx]);
    setSelectedIdx(newIdx);
  }, [selectedIdx, filteredImages]);

  // Swipe Support
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) goNext();
    if (isRightSwipe) goPrev();

    // Reset state
    setTouchStart(null);
    setTouchEnd(null);
  };



  return (
    <div className="min-h-screen bg-[#fcfcfc]">


      {/* ── Hero Banner ── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-33 px-6 lg:px-12 bg-[#1a1817] text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/70 z-10" />
          <div className="absolute inset-0 opacity-30 z-10" style={{ backgroundImage: 'radial-gradient(circle, #976147 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <img src={galleryBg} alt="Gallery" className="absolute inset-0 w-full h-full object-cover opacity-100" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">

          <h1 className="text-[36px] lg:text-[48px] font-medium leading-[1.05] mb-6 reveal opacity-0 tracking-tight text-white" style={{ animationDelay: '0.2s' }}>
            Clinic <span className="text-primary-light italic ">Gallery</span>
          </h1>
          <p className="text-white/60 text-[16px] lg:text-[16px] leading-relaxed max-w-2xl mx-auto reveal opacity-0 font-light" style={{ animationDelay: '0.4s' }}>
            Take a look inside our calming, professional environment designed specifically for your comfort and healing.
          </p>
        </div>
      </section>

      {/* ── Category Filter + Grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">


        {/* Filters - Forced 2-row grid for mobile, sliding pill for desktop */}
        <div className="relative grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 mb-16  no-scrollbar">
          {categories.map((cat) => {
            const el = tabsRef.current[cat];
            const pillOffset = el ? activeStyles.left - el.offsetLeft : 0;

            return (
              <button
                key={cat}
                ref={el => tabsRef.current[cat] = el}
                onClick={() => handleCategoryChange(cat)}
                className={`relative px-[12px] sm:px-[24px] py-[10px] rounded-full text-[12px] sm:text-[14px] font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 overflow-hidden ${activeCategory === cat
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
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[240px] grid-flow-dense">
          {filteredImages.map((img, idx) => {
            const spanClass = img.type === 'feature'
              ? 'md:col-span-2 md:row-span-2'
              : img.type === 'tall'
                ? ((img.src.includes('Reception.jpg') || img.src.includes('img1.jpg')) ? 'lg:row-span-2' : 'row-span-2')
                : img.type === 'wide'
                  ? 'md:col-span-2'
                  : 'col-span-1';

            return (
              <div key={img.src} className={`${spanClass}`}>
                <GalleryImage img={img} idx={idx} onImageClick={handleImageClick} />
              </div>
            );
          })}
        </div>


        {/* ── Bottom CTA ── */}
        <div className="mt-20 relative bg-white rounded-[40px] shadow-[0_2px_30px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col items-center">
          {/* Decorative Left Background */}
          <div className="absolute left-[-15%] md:left-0 top-0 bottom-0 w-[130%] md:w-[45%] opacity-[0.1] md:opacity-[0.12] pointer-events-none select-none">
            <img src={mindCta} alt="" className="w-full h-full object-contain object-left-bottom scale-[1.1] md:scale-[1.3] origin-bottom-left pt-18" />
          </div>

          {/* Decorative Right Bottom Background - Desktop Only to avoid mobile artifacts */}
          <div className="hidden md:block absolute -right-50 -bottom-1 w-[440px] h-[420px] opacity-[0.15] pointer-events-none select-none overflow-hidden">
            <img
              src={mind}
              alt=""
              className="w-full h-full object-contain object-right-bottom scale-x-[-1] scale-[1.2] opacity-50"
            />
          </div>

          <div className="relative z-10 text-center px-8 py-16 w-full max-w-2xl mx-auto">
            <p className="text-gray-500 text-[16px] mb-3">Ready to visit our clinic?</p>
            <h3 className="text-[28px] lg:text-[32px] font-medium text-gray-900 mb-8 leading-tight">
              Experience <span className="text-[#976147]">MindCare</span> in person
            </h3>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center justify-center gap-3 bg-[#976147] cursor-pointer text-white px-[24px] py-[10px] md:py-[10px] rounded-full text-[14px] md:text-[15px] hover:bg-[#7a4f3a] transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 active:scale-95 group w-full sm:w-auto"
            >
              <span className="whitespace-nowrap">Book a Consultation</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[120] bg-black/96 flex flex-col font-['Poppins'] select-none"
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close - Moved higher */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-[130] text-white/40 cursor-pointer hover:text-white hover:bg-white/10 rounded-full p-3 transition-all"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Top Center Image Count */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-[130] text-white/40 text-[10px] font-medium tracking-[0.3em]">
            {String(selectedIdx + 1).padStart(2, '0')} <span className="mx-2 opacity-20">/</span> {String(filteredImages.length).padStart(2, '0')}
          </div>

          {/* Desktop Navigation Arrows (Moved to Screen Edges - Visible on LG+) */}
          <button
            onClick={goPrev}
            disabled={selectedIdx === 0}
            className={`hidden lg:flex fixed left-8 lg:left-12 top-1/2 -translate-y-1/2 z-[140] text-white/40 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-full p-4 transition-all shadow-2xl active:scale-90 border border-white/10 group
              ${selectedIdx === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
          >
            <svg className="w-6 h-6 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goNext}
            disabled={selectedIdx === filteredImages.length - 1}
            className={`hidden lg:flex fixed right-8 lg:right-12 top-1/2 -translate-y-1/2 z-[140] text-white/40 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-full p-4 transition-all shadow-2xl active:scale-90 border border-white/10 group
              ${selectedIdx === filteredImages.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
          >
            <svg className="w-6 h-6 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="hidden lg:flex relative flex-1 w-full overflow-hidden items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div
              className="flex items-center transition-transform duration-500 ease-out h-[75vh]"
              style={{
                gap: '0px',
                transform: `translateX(calc(50% - 425px - (${selectedIdx} * 850px)))`,
                willChange: 'transform'
              }}
            >
              {filteredImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`relative flex-shrink-0 w-[850px] h-full flex items-center justify-center transition-all duration-500 ${idx === selectedIdx ? 'opacity-100 z-10' : 'opacity-100'}`}
                >
                  <img
                    src={img.src}
                    alt={img.caption || "Gallery"}
                    className={`max-w-full max-h-full object-contain transition-all duration-500 ${idx !== selectedIdx ? 'brightness-[0.2]' : 'brightness-100 shadow-2xl'}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Version: Original Single Centered Image */}
          <div className="flex lg:hidden relative flex-1 w-full flex-col items-center justify-center px-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative z-20 flex items-center justify-center flex-1 w-full">
              <img
                key={selectedImg.src}
                src={selectedImg.src}
                alt={selectedImg.caption}
                className={`max-h-[50vh] max-w-full w-auto h-auto object-contain shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/5 ${direction === 1 ? 'slide-right' : direction === -1 ? 'slide-left' : ''}`}
              />
            </div>

            {/* Mobile Controls (Centered - Visible only on mobile) */}

            {/* Mobile Controls (Centered - Visible only on mobile) */}
            <div className="flex lg:hidden items-center justify-between w-full mt-2 mb-4 px-4">
              <button
                onClick={goPrev}
                disabled={selectedIdx === 0}
                className={`text-white/80 bg-white/5 border border-white/10 rounded-full p-4 active:scale-90 flex-shrink-0 transition-opacity
                  ${selectedIdx === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="text-center px-4">
                <p className="text-white font-medium text-[14px] tracking-tight">{selectedImg.caption}</p>
              </div>

              <button
                onClick={goNext}
                disabled={selectedIdx === filteredImages.length - 1}
                className={`text-white/80 bg-white/5 border border-white/10 rounded-full p-4 active:scale-90 flex-shrink-0 transition-opacity
                  ${selectedIdx === filteredImages.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex absolute bottom-10 left-0 right-0 px-20 items-end justify-between pointer-events-none">
            <div className="text-left pointer-events-auto">
              <h4 className="text-white font-medium text-[14px] tracking-tight">{selectedImg.caption}</h4>
            </div>
          </div>
        </div>
      )}



      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; filter: blur(0px); }
          to { transform: translateX(0); opacity: 1; filter: blur(0); }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; filter: blur(0px); }
          to { transform: translateX(0); opacity: 1; filter: blur(0); }
        }
        .slide-right {
          animation: slideInRight 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .slide-left {
          animation: slideInLeft 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes revealCard {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal-card {
          animation: revealCard 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
