import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import heroBg from '../assets/herobg.png';

import { allEventsData } from '../data/events';

const EventDetailPage = ({ onOpenModal }) => {
  const { slug } = useParams();

  const event = allEventsData.find(e => e.slug === slug);

  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (selectedImg) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [selectedImg]);

  const openModal = (img, idx) => {
    setSelectedImg(img);
    setSelectedIdx(idx);
  };

  const closeModal = () => {
    setSelectedImg(null);
    setSelectedIdx(null);
  };

  const goPrev = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (selectedIdx === 0) return;
    const newIdx = selectedIdx - 1;
    setDirection(-1);
    setSelectedImg(event.gallery[newIdx]);
    setSelectedIdx(newIdx);
  };

  const goNext = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (!event || !event.gallery) return;
    if (selectedIdx === event.gallery.length - 1) return;
    const newIdx = selectedIdx + 1;
    setDirection(1);
    setSelectedImg(event.gallery[newIdx]);
    setSelectedIdx(newIdx);
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

  if (!event) {
    return (
      <div className="min-h-screen bg-[#fcfcfc] text-[#333] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-serif text-gray-900 mb-4 mt-32">Event Not Found</h1>
        <Link to="/events" className="text-primary hover:underline">Return to Activities</Link>
        <div className="mt-auto w-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#333] font-['Poppins sans-serif']">

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 px-6 lg:px-12 bg-[#1a1817] text-white overflow-hidden text-center min-h-[300px] lg:min-h-[450px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/70 z-10" />
          <img src={heroBg} alt="Event Background" className="absolute inset-0 w-full h-full object-cover opacity-100" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center reveal opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="px-5 py-2.5 tracking-[0.1em] text-[18px] uppercase font-medium shadow-sm inline-flex items-center gap-2.5 text-white">
            <Link to="/events" className="hover:-translate-x-1 transition-all duration-300 flex items-center justify-center p-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            Activities / {event.category}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:pb-20 lg:pt-42 px-6 lg:px-12 bg-white relative">
        {/* <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#b88c75]/5 rounded-bl-[200px] pointer-events-none" /> */}

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white p-2 lg:p-6 mt-0 lg:-mt-32 relative reveal opacity-0" style={{ animationDelay: '0.8s' }}>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 ">
              <h2 className="text-[28px] lg:text-[32px] font-medium text-gray-900 leading-tight text-left">
                {event.title}
              </h2>
              <div className="flex items-center w-fit gap-2 text-[#976147] font-medium whitespace-nowrap text-[14px] bg-[#fdfbfa] px-4 py-2 rounded-full border border-[#f2e4db]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {event.date}
              </div>
            </div>

            {event.image && (
              <div className="mb-12 rounded-[30px] overflow-hidden shadow-lg  bg-primary/40">
                <img src={event.image} alt={event.title} className="w-full h-auto object-contain max-h-[500px]" />
              </div>
            )}
            <h3 className="text-[20px] lg:text-[20px] font-bold text-justify lg:text-left text-gray-900 mb-6 leading-tight">
              {event.desc}
            </h3>

            <div className="w-16 h-1 bg-primary/20 mb-6 rounded-full"></div>

            <div className="space-y-6 prose text-justify lg:text-left prose-lg max-w-none text-gray-600">
              {event.fullDesc.split('\n').map((paragraph, idx) => (
                paragraph.trim() ? (
                  <p key={idx} className="leading-relaxed text-[16px]">
                    {paragraph}
                  </p>
                ) : null
              ))}
            </div>

            {/* Event Gallery Slider */}
            {event.gallery && event.gallery.length > 0 && (
              <div className="mt-16 pt-10 ">
                <h4 className="text-[28px] lg:text-[32px] font-medium text-gray-900 mb-6">Event Gallery</h4>
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 hide-scrollbar cursor-grab active:cursor-grabbing">
                  {event.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => openModal(img, idx)}
                      className="flex-none w-[85%] sm:w-[320px] h-[240px] snap-center rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
                <style dangerouslySetInnerHTML={{
                  __html: `
                  .hide-scrollbar::-webkit-scrollbar { display: none; }
                  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `}} />
              </div>
            )}
          </div>
        </div>
      </section>


      {/* ── Lightbox Modal ── */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[120] bg-black/96 flex flex-col font-['Poppins'] select-none"
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-[130] text-white/40 cursor-pointer hover:text-white hover:bg-white/10 rounded-full p-3 transition-all"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-[130] text-white/40 text-[10px] font-medium tracking-[0.3em]">
            {String(selectedIdx + 1).padStart(2, '0')} <span className="mx-2 opacity-20">/</span> {String(event.gallery.length).padStart(2, '0')}
          </div>

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
            disabled={selectedIdx === event.gallery.length - 1}
            className={`hidden lg:flex fixed right-8 lg:right-12 top-1/2 -translate-y-1/2 z-[140] text-white/40 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-full p-4 transition-all shadow-2xl active:scale-90 border border-white/10 group
              ${selectedIdx === event.gallery.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
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
              {event.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className={`relative flex-shrink-0 w-[850px] h-full flex items-center justify-center transition-all duration-500 ${idx === selectedIdx ? 'opacity-100 z-10' : 'opacity-100'}`}
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className={`max-w-full max-h-full object-contain transition-all duration-500 ${idx !== selectedIdx ? 'brightness-[0.2]' : 'brightness-100 shadow-2xl'}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex lg:hidden relative flex-1 w-full flex-col items-center justify-center px-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative z-20 flex items-center justify-center flex-1 w-full">
              <img
                key={selectedImg}
                src={selectedImg}
                alt={`Gallery ${selectedIdx + 1}`}
                className={`max-h-[50vh] max-w-full w-auto h-auto object-contain shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/5 ${direction === 1 ? 'slide-right' : direction === -1 ? 'slide-left' : ''}`}
              />
            </div>

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
                <p className="text-white font-medium text-[14px] tracking-tight">Image {selectedIdx + 1}</p>
              </div>

              <button
                onClick={goNext}
                disabled={selectedIdx === event.gallery.length - 1}
                className={`text-white/80 bg-white/5 border border-white/10 rounded-full p-4 active:scale-90 flex-shrink-0 transition-opacity
                  ${selectedIdx === event.gallery.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
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
      `}} />

    </div>
  );
};

export default EventDetailPage;
