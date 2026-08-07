import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#fcfcfc] px-6 lg:px-12 relative overflow-hidden">
      {/* Subtle background decorative blurs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
        <div className="absolute top-[-10%] right-[-10%] w-[30%] aspect-square bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[20%] aspect-square bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Top Header Reveal */}
        <div className="space-y-3 mb-[61.96px] reveal">
          {/* <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-primary">Our Legacy & Mission</span>
          </div> */}
          <h2 className="text-[28px] lg:text-[32px] font-medium text-gray-900 leading-tight">
            Nurturing Minds,
            <span className="text-primary"> Restoring Harmony</span>
          </h2>
          <p className="text-gray-500 text-[16px] sm:text-[16px] max-w-2xl mx-auto leading-relaxed pt-1">
            A trusted sanctuary in Gotri providing compassionate psychiatric care and science-backed mental health solutions.
          </p>
        </div>

        {/* Content Blocks Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 reveal" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white p-12 rounded-[30px] shadow-xl shadow-gray-200/50 text-left group hover:translate-y-[-5px] transition-all duration-300 border border-primary">
            <h3 className="text-[20px] font-serif text-gray-900 mb-6 font-medium ">The MindCare Space</h3>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              We offer more than treatment—we offer a space where every story is heard with care and respect. We understand that each person who walks through our doors carries unique experiences. Here, you are not defined by a diagnosis, but understood as a whole individual.
            </p>
          </div>
          <div className="bg-primary p-12 rounded-[30px] shadow-xl shadow-primary/20 text-left text-white group hover:translate-y-[-5px] transition-all duration-300 border border-primary">
            <h3 className="text-[20px] font-serif mb-6 font-medium ">Our Clinical Philosophy</h3>
            <p className="text-white/90 text-[16px] leading-relaxed">
              Our approach combines clinical expertise with genuine empathy, allowing healing to unfold in a calm, nurturing environment. Through thoughtful conversations and personalized care, we support you in finding clarity, resilience, and balance—helping you move forward with confidence.
            </p>
          </div>
        </div>

        {/* Stats Section with Divider */}
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-y-10 gap-x-6 lg:gap-8 reveal text-center" style={{ animationDelay: '0.4s' }}>
          <div className="flex-1 min-w-[130px] lg:flex-none lg:min-w-0">
            <div className="text-[24px] font-medium text-gray-900 mb-1">Gotri</div>
            <div className="text-[11px] lg:text-[12px] font-bold uppercase tracking-widest text-primary">Premier Location</div>
          </div>
          <div className="w-[1px] h-12 hidden lg:block bg-gradient-to-b from-gray-100 via-gray-300 to-gray-100"></div>
          <div className="flex-1 min-w-[130px] lg:flex-none lg:min-w-0">
            <div className="text-[24px] font-medium text-gray-900 mb-1">Nizampura</div>
            <div className="text-[11px] lg:text-[12px] font-bold uppercase tracking-widest text-primary">Sub centers</div>
          </div>
          <div className="w-[1px] h-12 hidden lg:block bg-gradient-to-b from-gray-100 via-gray-300 to-gray-100"></div>
          <div className="flex-1 min-w-[130px] lg:flex-none lg:min-w-0">
            <div className="text-[24px] font-medium text-gray-900 mb-1">Halol</div>
            <div className="text-[11px] lg:text-[12px] font-bold uppercase tracking-widest text-primary">Sub center</div>
          </div>
          <div className="w-[1px] h-12 hidden lg:block bg-gradient-to-b from-gray-100 via-gray-300 to-gray-100"></div>
          <div className="flex-1 min-w-[130px] lg:flex-none lg:min-w-0">
            <div className="text-[24px] font-medium text-gray-900 mb-1">Borsad</div>
            <div className="text-[11px] lg:text-[12px] font-bold uppercase tracking-widest text-primary">Sub center</div>
          </div>
          <div className="w-[1px] h-12 hidden lg:block bg-gradient-to-b from-gray-100 via-gray-300 to-gray-100"></div>
          <div className="flex-1 min-w-[130px] lg:flex-none lg:min-w-0">
            <div className="text-[24px] font-medium text-gray-900 mb-1">Khambhat</div>
            <div className="text-[11px] lg:text-[12px] font-bold uppercase tracking-widest text-primary">Sub center</div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        {/* <div className="mt-12 reveal" style={{ animationDelay: '0.6s' }}>
          <a href="#services" className="re-btn-primary group py-4 px-8 text-center sm:text-left">
            <span>Discover Our <br className="sm:hidden" /> Comprehensive Approach</span>
            <svg className="hidden sm:block w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default About;

