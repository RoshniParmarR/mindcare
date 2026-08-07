import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Gallery = ({ onOpenModal }) => {
  const navigate = useNavigate();
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [selectedIdx]);

  const images = [
    "src/assets/img1.jpg",
    "src/assets/img2.jpg",
    "src/assets/img3.jpg",
    "src/assets/img4.jpg",
    "src/assets/img5.jpg",
    "src/assets/img6.jpg",
    "src/assets/img7.jpg",
    "src/assets/img8.jpg",
    "src/assets/img9.jpg",
    "src/assets/img10.jpg",
    "src/assets/img11.jpg",
    "src/assets/about-us.jpg"
  ];

  // Show first 4 images in the section
  const displayedImages = images.slice(0, 4);

  const goPrev = (e) => {
    if (e) e.stopPropagation();
    if (selectedIdx > 0) setSelectedIdx(selectedIdx - 1);
  };

  const goNext = (e) => {
    if (e) e.stopPropagation();
    if (selectedIdx < displayedImages.length - 1) setSelectedIdx(selectedIdx + 1);
  };

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
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="gallery" className="py-20 bg-[#faf7f5] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-[61.96px] reveal-left">
          <div className="text-center sm:text-left w-full sm:w-auto">
            <h2 className="text-[28px] lg:text-[32px] text-gray-900 mb-3 font-medium">
              Clinic <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-gray-500 text-[16px] max-w-lg leading-relaxed">
              Step inside our compassionate and calm environment designed to make your journey towards mental wellness as peaceful as possible.
            </p>
          </div>
          <button
            onClick={() => navigate('/gallery')}
            className="hidden sm:block text-primary font-semibold text-sm tracking-widest uppercase hover:text-primary/80 mt-6 sm:mt-0 cursor-pointer"
          >
            View More
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {displayedImages.map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className="bg-gray-200 rounded-[20px] md:rounded-[30px] hover:opacity-95 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center relative overflow-hidden group col-span-1 row-span-1"
            >
              <img
                src={imgUrl}
                alt={`Clinic Space ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out will-change-transform"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Mobile View More Button */}
        <div className="mt-10 text-center sm:hidden">
          <button
            onClick={() => navigate('/gallery')}
            className="text-primary font-semibold hover:text-primary/80  text-sm tracking-widest uppercase  cursor-pointer"
          >
            View More
          </button>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[500] bg-black/92 flex flex-col items-center justify-center select-none overflow-hidden"
          onClick={() => setSelectedIdx(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all cursor-pointer z-[510]"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Desktop Navigation Arrows (Fixed at Edges) */}
          <button
            onClick={goPrev}
            disabled={selectedIdx === 0}
            className={`hidden lg:flex fixed left-10 top-1/2 -translate-y-1/2 z-[520] text-white/40 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-full p-4 transition-all shadow-2xl active:scale-90 border border-white/10
              ${selectedIdx === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goNext}
            disabled={selectedIdx === displayedImages.length - 1}
            className={`hidden lg:flex fixed right-10 top-1/2 -translate-y-1/2 z-[520] text-white/40 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-full p-4 transition-all shadow-2xl active:scale-90 border border-white/10
              ${selectedIdx === displayedImages.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Content */}
          <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div
              className="flex items-center transition-transform duration-500 ease-out h-[65vh] lg:h-[70vh]"
              style={{
                gap: '20px',
                transform: `translateX(calc(50% - (var(--item-width) / 2) - (${selectedIdx} * (var(--item-width) + 20px))))`,
                willChange: 'transform',
                '--item-width': typeof window !== 'undefined' && window.innerWidth < 1024 ? '85vw' : '800px'
              }}
            >
              {displayedImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`relative flex-shrink-0 w-[var(--item-width)] h-full flex items-center justify-center transition-all duration-500 ${idx === selectedIdx ? 'opacity-100 z-10' : 'opacity-100 z-0'}`}
                >
                  <img
                    src={img}
                    alt={`Clinic Space ${idx + 1}`}
                    className={`max-w-full max-h-full object-contain transition-all duration-500 ${idx !== selectedIdx ? 'brightness-[0.2]' : 'brightness-100 shadow-2xl'}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Indicator (Mobile Only navigation, Desktop only text) */}
          <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4 text-white p-4">
            <div className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-medium">
              {selectedIdx + 1} <span className="mx-2 opacity-20">/</span> {displayedImages.length}
            </div>

            {/* Mobile-only Arrow Controls */}
            <div className="flex lg:hidden gap-10">
              <button
                onClick={goPrev}
                disabled={selectedIdx === 0}
                className={`p-3 rounded-full bg-white/5 border border-white/10 active:scale-95 transition-opacity ${selectedIdx === 0 ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={goNext}
                disabled={selectedIdx === displayedImages.length - 1}
                className={`p-3 rounded-full bg-white/5 border border-white/10 active:scale-95 transition-opacity ${selectedIdx === displayedImages.length - 1 ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;