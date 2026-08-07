import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const eventsList = [
   {
      id: '01',
      title: 'Emotional Reboot',
      subtitle: 'A Multi-Level Emotion Management Workshop',
      status: 'archived',
      date: 'To Be Announced',
      desc: 'Just like our digital devices, our minds sometimes need a complete reset to function at their best. Emotional Reboot is a structured, multi-level workshop designed to take you from emotional overwhelm to emotional resilience.',
      slug: 'emotional-reboot'
   },
   {
      id: '02',
      title: 'मन की बात',
      subtitle: 'An Expressive Open Mic',
      status: 'archived',
      date: 'Oct 2023',
      desc: 'Our minds carry stories, poems, music, and unsaid emotions that deserve to be heard. Man ki Baat is a liberating, judgment-free platform where individuals can step up to the microphone and express themselves creatively.',
      slug: 'man-ki-baat'
   },
   {
      id: '03',
      title: 'सतरंगी मन',
      subtitle: 'An LGBTQIA+ Support Group',
      status: 'archived',
      date: 'Dec 2023',
      desc: 'Navigating identity, acceptance, and mental well-being requires a space that is not just inclusive, but deeply affirming. Satrangi Man is a safe, completely confidential, and empathetic support group dedicated to the LGBTQIA+ community.',
      slug: 'satrangi-man'
   }
];

export default function Events({ onOpenModal }) {
   const [activeId, setActiveId] = useState('01');
   const [activeIndex, setActiveIndex] = useState(0);
   const [prevIndex, setPrevIndex] = useState(0);
   const [touchStart, setTouchStart] = useState(0);
   const [touchEnd, setTouchEnd] = useState(0);
   const [scrollForward, setScrollForward] = useState(true);
   const sectionRef = useRef(null);

   useEffect(() => {
      const handleIdUpdate = () => {
         setActiveId(eventsList[activeIndex].id);
      };

      handleIdUpdate();
   }, [activeIndex]);

   // Capture previous index BEFORE moving to new index in the logic below
   const handleSelectionChange = (newIdx) => {
      if (newIdx === activeIndex) return;

      // Maintain logical auto-scroll direction if user interacts
      if (newIdx === 0) setScrollForward(true);
      if (newIdx === eventsList.length - 1) setScrollForward(false);

      setPrevIndex(activeIndex);
      setActiveIndex(newIdx);
      setActiveId(eventsList[newIdx].id);
   };

   // Auto-scroll logic for mobile (Yoyo/Boomerang sequence: 1-2-3-2-1)
   useEffect(() => {
      const interval = setInterval(() => {
         if (window.innerWidth < 1024) {
            let nextIdx;
            if (scrollForward) {
               if (activeIndex === eventsList.length - 1) {
                  setScrollForward(false);
                  nextIdx = activeIndex - 1;
               } else {
                  nextIdx = activeIndex + 1;
               }
            } else {
               if (activeIndex === 0) {
                  setScrollForward(true);
                  nextIdx = activeIndex + 1;
               } else {
                  nextIdx = activeIndex - 1;
               }
            }
            handleSelectionChange(nextIdx);
         }
      }, 4000);
      return () => clearInterval(interval);
   }, [activeIndex, scrollForward]);

   // Swipe Handlers
   const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
   const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
   const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      if (distance > 50) {
         handleSelectionChange((activeIndex + 1) % eventsList.length);
      } else if (distance < -50) {
         handleSelectionChange((activeIndex - 1 + eventsList.length) % eventsList.length);
      }
      setTouchStart(0);
      setTouchEnd(0);
   };

   const activeEvent = eventsList.find(e => e.id === activeId);

   return (
      <section
         id="events"
         ref={sectionRef}
         className="py-20 px-6 lg:px-12 relative bg-[#faf7f5]"
      >
         {/* Decorative Background */}
         <div style={{ position: 'absolute', inset: 0, opacity: 0.02, pointerEvents: 'none', backgroundImage: 'radial-gradient(circle, #976147 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

         <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(48px,8vw,80px)' }}>

            {/* HEADER */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
               <h2 className="text-[28px] lg:text-[32px] text-gray-900 mb-6 font-medium">
                  Inner <span className="text-primary">Architects</span>
               </h2>
               <p className="text-gray-500 text-[16px] max-w-2xl mx-auto leading-relaxed text-center">
                  INNER ARCHITECTS by MindCare is our vibrant community wing. We take mental health care beyond the traditional therapy room to help you reconstruct your well-being from the inside out.
               </p>
            </div>

            {/* MOBILE VIEW — Horizontal Auto-Slide Cards */}
            <div className="lg:hidden w-full relative overflow-hidden pb-8">
               <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
               >
                  {eventsList.map((item) => (
                     <div key={item.id} className="w-full flex-shrink-0 px-2">
                        <div className="bg-white rounded-[32px] p-8 border border-[#f0eae6] shadow-xl shadow-black/5 flex flex-col h-full min-h-[420px]">
                           <div className="flex justify-between items-start mb-10">
                              <span className="text-5xl font-bold text-[#dfd2ca] leading-none opacity-50">{item.id}</span>
                              <div style={{
                                 padding: '6px 14px', borderRadius: 50,
                                 display: 'flex', alignItems: 'center', gap: 6,
                                 background: item.status === 'upcoming' ? '#ecfdf5' : '#f5f5f5',
                              }}>
                                 {item.status === 'upcoming' && (
                                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', animation: 'pulse 2s infinite' }} />
                                 )}
                                 <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: item.status === 'upcoming' ? '#10b981' : '#aaa' }}>
                                    {item.status}
                                 </span>
                              </div>
                           </div>

                           <div className="mb-8">
                              <p className="text-[#976147] text-[10px] font-extrabold tracking-[0.2em] uppercase mb-3">{item.date}</p>
                              <h3 className="text-[26px] font-medium text-gray-900 leading-tight mb-2">{item.title}</h3>
                              <p className="text-[#b4856b] text-[14px] font-medium">{item.subtitle}</p>
                           </div>

                           <p className="text-gray-500 text-[15px] leading-relaxed mb-10 flex-1">{item.desc}</p>

                           <div className="mt-auto">
                              {item.status === 'upcoming' ? (
                                 <button
                                    onClick={onOpenModal}
                                    style={{
                                       display: 'inline-flex', alignItems: 'center', gap: 10,
                                       background: '#976147', color: '#fff', padding: '16px 36px',
                                       borderRadius: 50, fontWeight: 600, fontSize: 13,
                                       letterSpacing: '0.08em', textTransform: 'uppercase', width: '100%', justifyContent: 'center'
                                    }}
                                 >
                                    Register Now
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} style={{ width: 14, height: 14 }}>
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                 </button>
                              ) : (
                                 <Link
                                    to={`/events/${item.slug}`}
                                    className="flex items-center justify-center border-2 border-dashed border-[#f0eae6] text-[#9CA3AF] py-5 px-6 rounded-[24px] text-[11px] font-bold uppercase tracking-[0.1em] bg-[#fafafa] text-center leading-tight hover:bg-[#f0eae6] hover:text-[#976147] transition-colors"
                                 >
                                    Event Completed
                                 </Link>
                              )}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Mobile Indicators */}
               <div className="flex justify-center gap-3 mt-10">
                  {eventsList.map((_, i) => (
                     <button
                        key={i}
                        onClick={() => handleSelectionChange(i)}
                        className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === i ? 'w-8 bg-primary' : 'w-2 bg-primary/20'}`}
                     />
                  ))}
               </div>
            </div>

            {/* DESKTOP VIEW — GRID (Unchanged, hidden on mobile) */}
            <div className="hidden lg:grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>

               {/* LEFT LIST with Layered System */}
               <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}>

                  {/* LAYER 0: Static White Slot Backgrounds */}
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', gap: 12, pointerEvents: 'none' }}>
                     {eventsList.map((item) => (
                        <div key={`slot-${item.id}`} style={{ flex: 1, background: '#fff', border: '1.5px solid #f0eae6', borderRadius: 30 }} />
                     ))}
                  </div>

                  {/* LAYER 1: Sliding Dark Indicator */}
                  <div
                     style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        height: 'calc((100% - 24px) / 3)',
                        background: '#1a0c06',
                        borderRadius: 30,
                        boxShadow: '0 16px 40px rgba(26,12,6,0.15)',
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: `translateY(calc(${activeIndex} * 100% + ${activeIndex} * 12px))`,
                        zIndex: 1,
                        pointerEvents: 'none',
                        border: '1.5px solid #1a0c06'
                     }}
                  />

                  {/* LAYER 2: Interactive Content Buttons */}
                  {eventsList.map((item, idx) => {
                     const isActive = item.id === activeId;
                     return (
                        <button
                           key={item.id}
                           onClick={() => handleSelectionChange(idx)}
                           className="events-btn"
                           style={{
                              all: 'unset',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 'clamp(16px, 3vw, 32px)',
                              padding: 'clamp(20px, 3vw, 32px)',
                              borderRadius: 30,
                              position: 'relative',
                              zIndex: 10,
                              background: 'transparent',
                              transition: 'transform 0.3s ease',
                           }}
                        >
                           <span style={{
                              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                              color: isActive ? '#e5bc99' : '#dfd2ca',
                              transition: 'color 0.4s ease',
                              lineHeight: 1,
                           }}>
                              {item.id}
                           </span>

                           <div style={{ flex: 1, textAlign: 'left' }}>
                              <h3 style={{
                                 fontSize: '20px', fontWeight: 500, margin: '0 0 4px',
                                 color: isActive ? '#fff' : '#111827',
                                 transition: 'color 0.4s ease',
                              }}>
                                 {item.title}
                              </h3>
                              <p style={{
                                 fontSize: '14px', margin: 0,
                                 color: isActive ? 'rgba(255,255,255,0.75)' : '#9CA3AF',
                                 transition: 'color 0.4s ease',
                              }}>
                                 {item.subtitle}
                              </p>
                           </div>

                           <div style={{
                              padding: '5px 12px', borderRadius: 50,
                              display: 'flex', alignItems: 'center', gap: 5,
                              background: item.status === 'upcoming'
                                 ? (isActive ? 'rgba(74,222,128,0.2)' : '#ecfdf5')
                                 : (isActive ? 'rgba(255,255,255,0.1)' : '#f5f5f5'),
                              transition: 'background 0.4s ease',
                           }}>
                              {item.status === 'upcoming' && (
                                 <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', animation: 'pulse 2s infinite' }} />
                              )}
                              <span style={{
                                 fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
                                 color: item.status === 'upcoming'
                                    ? (isActive ? '#4ade80' : '#10b981')
                                    : (isActive ? 'rgba(255,255,255,0.6)' : '#aaa'),
                                 transition: 'color 0.4s ease',
                              }}>
                                 {item.status}
                              </span>
                           </div>
                        </button>
                     );
                  })}
               </div>

               {/* RIGHT DETAIL PANEL */}
               <div style={{
                  background: 'linear-gradient(145deg, #f9ede7, #fdfbfa)',
                  border: '1.5px solid #f2e4db',
                  borderRadius: 30,
                  padding: 'clamp(32px, 5vw, 56px)',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: 400, // Restored old height
               }}>


                  <div style={{ position: 'relative', flex: 1, width: '100%', height: '100%' }}>
                     {eventsList.map((item, idx) => {
                        const isActive = activeId === item.id;
                        const isPrev = idx === prevIndex;
                        const isPast = idx < activeIndex;

                        return (
                           <div
                              key={item.id}
                              style={{
                                 position: 'absolute',
                                 inset: 0,
                                 display: 'flex',
                                 flexDirection: 'column',
                                 transition: (isActive || isPrev) ? 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease' : 'none',
                                 transform: isActive ? 'translateY(0)' : (isPast ? 'translateY(-120%)' : 'translateY(120%)'),
                                 opacity: isActive ? 1 : 0,
                                 pointerEvents: isActive ? 'auto' : 'none',
                                 visibility: (isActive || isPrev) ? 'visible' : 'hidden'
                              }}
                           >
                              <p style={{
                                 color: '#976147', fontSize: '0.75rem', fontWeight: 800,
                                 letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 16px',
                              }}>
                                 {item.date}
                              </p>

                              <h3 style={{ fontSize: '28px', fontWeight: 500, color: '#111827', lineHeight: 1.2, margin: '0 0 10px' }}>
                                 {item.title}
                              </h3>

                              <h4 style={{ color: '#b4856b', fontSize: '15px', margin: '0 0 20px', fontWeight: 500 }}>
                                 {item.subtitle}
                              </h4>

                              <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: 1.8, margin: '0 0 30px', maxWidth: 440, flex: 1 }}>
                                 {item.desc}
                              </p>

                              <div style={{ marginTop: 'auto' }}>
                                 {item.status === 'upcoming' ? (
                                    <button
                                       onClick={onOpenModal}
                                       style={{
                                          display: 'inline-flex', alignItems: 'center', gap: 10,
                                          background: '#976147', color: '#fff', padding: '10px 24px',
                                          borderRadius: 50, fontWeight: 500, fontSize: 12,
                                          letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none',
                                          transition: 'transform 0.3s ease', cursor: 'pointer'
                                       }}
                                       onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                                       onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                                    >
                                       Register Now
                                       <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} style={{ width: 13, height: 13 }}>
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                       </svg>
                                    </button>
                                 ) : (
                                    <Link
                                       to={`/events/${item.slug}`}
                                       style={{
                                          display: 'inline-flex', alignItems: 'center',
                                          border: '1.5px solid #976147', color: '#976147', padding: '10px 24px',
                                          borderRadius: 50, fontWeight: 500, fontSize: 12,
                                          letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none',
                                          transition: 'all 0.3s ease'
                                       }}
                                       onMouseEnter={(e) => {
                                          e.currentTarget.style.backgroundColor = '#976147';
                                          e.currentTarget.style.color = '#fff';
                                       }}
                                       onMouseLeave={(e) => {
                                          e.currentTarget.style.backgroundColor = 'transparent';
                                          e.currentTarget.style.color = '#976147';
                                       }}
                                    >
                                       Event Completed
                                    </Link>
                                 )}
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>

         <style>{`
            .events-btn {
               transition: transform 0.3s ease, border-color 0.5s ease;
            }
            .events-btn:hover {
               transform: translateX(6px);
            }
            .events-btn:active {
               transform: translateX(0px);
            }

            @keyframes riseUp {
               0% {
                  opacity: 0;
                  transform: translateY(80px);
               }
               100% {
                  opacity: 1;
                  transform: translateY(0);
               }
            }

            .event-child {
               opacity: 0;
               animation: riseUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }

            @keyframes pulse {
               0%, 100% { opacity: 1; }
               50% { opacity: 0.4; }
            }
         `}</style>
      </section>
   );
}

