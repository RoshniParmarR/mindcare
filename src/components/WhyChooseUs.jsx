import React, { useEffect, useRef, useState } from 'react';
import whyImg from '../assets/why choose.jpg';

/* ─── animated counter ─── */
function useCounter(target, duration = 2000, started = false) {
   const [val, setVal] = useState(0);
   useEffect(() => {
      if (!started) return;
      let t0 = null;
      const raf = (ts) => {
         if (!t0) t0 = ts;
         const p = Math.min((ts - t0) / duration, 1);
         setVal(Math.floor(p * target));
         if (p < 1) requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
   }, [target, duration, started]);
   return val;
}

/* ─── reasons list ─── */
const reasons = [
   {
      label: 'Expert & Compassionate Care',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
   },
   {
      label: 'Evidence-Based Treatments',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" /></svg>
   },
   {
      label: 'Holistic Approach',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
   },
   {
      label: 'Complete Confidentiality',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
   },
   {
      label: 'Comprehensive Services',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
   },
   {
      label: 'Flexible Scheduling',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
   },
   {
      label: 'Supportive Community',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
   },
];

const PRIMARY = '#976147';
const PRIMARY_DARK = '#7a4f3a';
const PRIMARY_LIGHT = '#b4856b';
const CREAM = '#fdf9f6';
const DARK = '#1c0f08';

export default function WhyChooseUs({ onOpenModal }) {
   const ref = useRef(null);
   const [on, setOn] = useState(false);
   const [hoveredIdx, setHoveredIdx] = useState(null);

   useEffect(() => {
      const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.1 });
      if (ref.current) io.observe(ref.current);
      return () => io.disconnect();
   }, []);

   const c1 = useCounter(6, 1600, on);
   const c2 = useCounter(2000, 2000, on);
   const c3 = useCounter(4, 1800, on);

   return (
      <section
         id="why-choose-us"
         ref={ref}
         className="py-20 px-6 lg:px-12 relative overflow-hidden"
         style={{ background: CREAM }}
      >
         {/* ── decorative blobs ── */}
         <div style={{ position: 'absolute', top: -120, left: -120, width: 380, height: 380, borderRadius: '50%', background: `radial-gradient(circle, rgba(151,97,71,0.07) 0%, transparent 70%)`, pointerEvents: 'none' }} />
         <div style={{ position: 'absolute', bottom: -80, right: -60, width: 280, height: 280, borderRadius: '50%', background: `radial-gradient(circle, rgba(151,97,71,0.06) 0%, transparent 70%)`, pointerEvents: 'none' }} />

         <div style={{ maxWidth: 1200, margin: '0 auto' }}>

            {/* ── HEADER ── */}
            <div style={{
               textAlign: 'center', marginBottom: 'clamp(40px,5vw,72px)',
               opacity: on ? 1 : 0, transform: on ? 'translateY(0)' : 'translateY(30px)',
               transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}>
               {/* <span style={{
                  display: 'inline-block',
                  background: `linear-gradient(135deg, rgba(151,97,71,0.12) 0%, rgba(180,133,107,0.08) 100%)`,
                  border: `1px solid rgba(151,97,71,0.2)`,
                  color: PRIMARY, padding: '7px 22px', borderRadius: 50,
                  fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase',
                  marginBottom: 20,
               }}>
                  Why Choose Us
               </span> */}
               <h2 className="text-[28px] lg:text-[32px] text-gray-900 mb-3 font-medium">
                  A Clinic Built Around <span className="text-primary">Your Wellbeing</span>
               </h2>
               <p className="text-gray-500 text-[16px] sm:text-[16px] max-w-2xl mx-auto leading-relaxed pt-1">
                  Every decision we make, from our therapists to our treatment plans, is shaped by one goal: your lasting recovery and peace of mind.
               </p>
            </div>

            {/* ── BENTO GRID ── */}
            {/* ── BENTO GRID ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-min lg:auto-rows-auto">

               {/* CELL 1 — Large photo tile */}
               <div className="col-span-1 md:row-span-3 lg:col-span-4 lg:row-span-2">
                  <BentoCell on={on} delay={0} radius={32} padding={0} style={{ overflow: 'hidden', height: '100%', minHeight: (window.innerWidth >= 768 && window.innerWidth < 1024) ? 380 : 380 }}>
                     <img src={whyImg} alt="MindCare clinic" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
                     <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg, transparent 40%, rgba(28,15,8,0.82) 100%)` }} />
                     <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28, textAlign: 'right' }}>
                        <p style={{ fontSize: '20px', fontWeight: 600, color: '#fff', lineHeight: 1.35, margin: 0 }}>
                           Healing is possible — <br />and it starts here.
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginTop: 8, fontWeight: 500 }}>— Team MindCare</p>
                     </div>
                  </BentoCell>
               </div>

               {/* CELL 2 — Years stat */}
               <div className="col-span-1 lg:col-span-3 lg:row-span-1">
                  <BentoCell delay={0.1} on={on} className="text-center flex flex-col items-center lg:text-left lg:items-start" style={{ background: `linear-gradient(135deg,#f9e8dd,#f0d5c4)`, justifyContent: 'center', height: '100%', minHeight: '160px' }}>
                     <p style={{ color: PRIMARY_DARK, fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 6px' }}>Experience</p>
                     <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4 }}>
                        <span style={{ fontSize: '3rem', fontWeight: 900, color: PRIMARY_DARK, lineHeight: 1 }}>{c1}</span>
                        <span style={{ fontSize: '2.5rem', fontWeight: 700, color: PRIMARY_LIGHT, lineHeight: 1.15 }}>+</span>
                     </div>
                     <p style={{ color: PRIMARY_LIGHT, fontSize: '0.85rem', marginTop: 10, lineHeight: 1.6 }}>Years of dedicated<br />mental health care</p>
                  </BentoCell>
               </div>

               {/* CELL 3 — Patients stat */}
               <div className="col-span-1 lg:col-span-3 lg:row-span-1">
                  <BentoCell delay={0.15} on={on} className="text-center flex flex-col items-center lg:text-left lg:items-start" style={{ background: PRIMARY, justifyContent: 'center', height: '100%', minHeight: '160px' }}>
                     <p style={{ color: '#fff', fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 6px' }}>Patients Helped</p>
                     <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4 }}>
                        <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{c2}</span>
                        <span style={{ fontSize: '2rem', fontWeight: 700, color: 'rgba(255,255,255,0.55)', lineHeight: 1.2 }}>+</span>
                     </div>
                     <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', marginTop: 10, lineHeight: 1.6 }}>Lives transformed<br />through expert care</p>
                  </BentoCell>
               </div>

               {/* CELL 4 — Satisfaction */}
               <div className="col-span-1 lg:col-span-2 lg:row-span-1">
                  <BentoCell delay={0.2} on={on} style={{ background: DARK, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%', minHeight: '160px' }}>

                     <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
                        <span style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{c3}</span>
                        <span style={{ fontSize: '1.8rem', fontWeight: 900, color: PRIMARY_DARK, lineHeight: 1.2 }}>+</span>
                     </div>
                     <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: 10, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', margin: '10px 0 6px' }}>Locations</p>
                  </BentoCell>
               </div>

               {/* CELL 5 & 6 COMBINED — Reasons list */}
               <div className="md:col-span-2 lg:col-span-8 lg:row-span-1">
                  <BentoCell delay={0.25} on={on} style={{ background: '#fff', height: '100%' }}>
                     <div className="flex flex-col h-full">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                           <p style={{ color: PRIMARY, fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0 }}>Our Strengths</p>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-6 md:mb-0">
                           {reasons.map((r, i) => (
                              <ReasonRow key={i} r={r} idx={i} hovered={hoveredIdx === i} onEnter={() => setHoveredIdx(i)} onLeave={() => setHoveredIdx(null)} />
                           ))}
                        </div>

                     </div>
                  </BentoCell>
               </div>

               {/* CELL 7 — Tagline banner */}
               <div className="md:col-span-2 lg:col-span-12">
                  <BentoCell delay={0.35} on={on} style={{
                     background: `linear-gradient(120deg, ${DARK} 0%, ${PRIMARY_DARK} 100%)`,
                     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                     flexWrap: 'wrap', gap: 20,
                  }}>
                     <p className="text-[20px] lg:text-[24px] font-medium text-white m-0 max-w-[600px]">
                        Mental health is not a destination, but<br /> <em style={{ color: '#e8b99a', textTransform: 'capitalize' }}>a journey we take together.</em>
                     </p>
                     <button
                        onClick={onOpenModal}
                        className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 text-white px-[24px] py-[10px] rounded-full text-sm tracking-wider uppercase backdrop-blur-md transition-all hover:bg-white/20 cursor-pointer"
                     >
                        Discover Our Approach
                     </button>
                  </BentoCell>
               </div>

            </div>
         </div>
      </section>
   );
}

/* ─── Bento Cell wrapper ─── */
function BentoCell({ col, row, delay, on, children, padding, radius, className = "", style = {} }) {
   return (
      <div
         className={className}
         style={{
            gridColumn: col,
            gridRow: row,
            background: '#fff',
            borderRadius: radius ?? 30,
            padding: padding !== undefined ? padding : 'clamp(20px,2.5vw,32px)',
            position: 'relative',
            overflow: 'hidden',
            opacity: on ? 1 : 0,
            transform: on ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.98)',
            transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
            boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
            ...style,
         }}>
         {children}
      </div>
   );
}

/* ─── Reason row ─── */
function ReasonRow({ r, hovered, onEnter, onLeave }) {
   return (
      <div
         onMouseEnter={onEnter}
         onMouseLeave={onLeave}
         style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '9px 12px', borderRadius: 30,
            background: hovered ? 'rgba(151,97,71,0.07)' : 'transparent',
            transition: 'background 0.25s ease',
            cursor: 'default',
         }}
      >
         {/* 2D SVG Icon on LEFT */}
         <div style={{
            width: 34, height: 34, borderRadius: 10, flexShrink: 0,
            background: hovered ? '#976147' : 'rgba(151,97,71,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: hovered ? '#fff' : '#976147',
            transition: 'background 0.25s ease, color 0.25s ease',
         }}>
            {r.icon}
         </div>

         {/* Label — left-aligned, fills remaining space */}
         <span style={{
            flex: 1,
            fontSize: '14px', fontWeight: 400,
            color: hovered ? '#976147' : '#1c0f08',
            transition: 'color 0.25s ease',
         }}>
            {r.label}
         </span>

         {/* Checkmark on RIGHT */}
         <div style={{
            width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
            background: hovered ? '#976147' : 'rgba(151,97,71,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.25s ease',
         }}>
            <svg viewBox="0 0 24 24" fill="none" stroke={hovered ? '#fff' : '#976147'} strokeWidth={2.5} style={{ width: 10, height: 10 }}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
         </div>
      </div>
   );
}
