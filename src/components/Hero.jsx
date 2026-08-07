import React from 'react';
import clinicBg from '../assets/herobg.png';

const Hero = ({ onOpenModal }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <section id="home" className="relative h-[100dvh] min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-[#111]">
      {/* Background Image with smooth fade-on-load */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Cinematic dark overlay focusing on center readability - darkened to make text pop over the busy wall pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/70 z-10" />
        <img
          src={clinicBg}
          alt="MindCare Clinic Interior"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-[93%_center] lg:object-center transition-all duration-[2500ms] ease-out ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
        />
      </div>

      {/* Centered Content Container */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 w-full relative z-20 text-center flex flex-col items-center">

        {/* Font size set to exactly 56px with improved line-height and hard shadows for clarity */}
        <h1 className="text-white lg:mb-6 mb-2 lg:text-[48px] text-[28px] font-bold leading-[1.2] tracking-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] reveal opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          MindCare <br />
          <span className="text-primary-light italic font-medium lg:text-[36px] text-[24px]">De-Addiction, Mental Health & Wellness Clinic</span>
        </h1>

        <p className="text-gray-200 text-[14PX] lg:text-[16px] leading-relaxed lg:mb-12 mb-6 max-w-3xl mx-auto reveal opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          At MindCare, we provide a calm and compassionate space where every individual is truly heard and understood.<span className="hidden lg:inline"> Blending clinical expertise with genuine empathy, we offer personalized care that supports emotional healing, resilience, and balance.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center reveal opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <a href="#about" className="re-btn-outline border-white/30 text-white hover:bg-white hover:text-gray-900 px-10 py-[18px] text-sm lg:text-[14px] font-semibold tracking-[0.1em] backdrop-blur-sm transition-all duration-300 transform ">
            Discover Our Clinic
          </a>
          <button
            type="button"
            onClick={onOpenModal}
            className="!hidden lg:!inline-flex re-btn-primary px-10 py-[18px] text-sm lg:text-[14px] font-semibold tracking-[0.1em] transition-all duration-300 transform cursor-pointer"
          >
            Make an Appointment
          </button>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow">
        <a href="#about" aria-label="Scroll Down">
          <svg className="w-8 h-6 text-white/50 hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;
