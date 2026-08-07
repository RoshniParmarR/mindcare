import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import heroBg from '../assets/herobg.png';

import { treatmentServices } from '../data/services';

const ServiceDetailPage = ({ onOpenModal }) => {
  const { slug } = useParams();

  const service = treatmentServices.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#fcfcfc] text-[#333] flex flex-col justify-center items-center">
        <h1 className="text-[20px] text-gray-900 mb-4 mt-32">Service Not Found</h1>
        <Link to="/services" className="text-primary hover:underline">Return to Services</Link>
        <div className="mt-auto w-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#333] font-['Poppins sans-serif']">

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 lg:pt-40.5 lg:pb-26 px-6 lg:px-12 bg-[#1a1817] text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/70 z-10" />
          <img src={heroBg} alt="Service Background" className="absolute inset-0 w-full h-full object-cover opacity-100" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">

          <div className="flex flex-wrap justify-center items-center gap-4 mb-6 reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="bg-primary px-4 py-1.5 rounded-full text-[12px]  tracking-widest uppercase shadow-sm">
              {service.category}
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[48px] font-medium leading-[1.05] mb-6 reveal opacity-0 tracking-tight" style={{ animationDelay: '0.4s' }}>
            {service.title}
          </h1>
          <Link to="/services" className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full mb-6 reveal opacity-0 shadow-2xl hover:bg-white/10 transition-colors text-white/80" style={{ animationDelay: '0.6s' }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-[0.1em]">Back to Services</span>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:pb-20 lg:pt-42 px-6 lg:px-12 bg-white relative">
        {/* <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#b88c75]/5 rounded-bl-[200px] pointer-events-none" /> */}

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white p-2 lg:p-6 mt-0 lg:-mt-32 relative reveal opacity-0" style={{ animationDelay: '0.8s' }}>
            {service.imageUrl && (
              <div className="mb-12 rounded-[30px] overflow-hidden shadow-xl border border-gray-100">
                <img src={service.imageUrl} alt={service.title} className="w-full h-auto object-cover max-h-[500px]" />
              </div>
            )}
            <h3 className="text-[20px] lg:text-[20px] font-medium text-gray-900 text-justify lg:text-left mb-8 leading-tight">
              {service.shortDesc}
            </h3>

            <div className="w-16 h-1 bg-primary/20 mb-6 rounded-full"></div>

            <div className="space-y-6 prose prose-lg max-w-none text-justify lg:text-left text-gray-600 mb-8">
              {service.fullDesc.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed text-[16px]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Structured Treatment Info */}
            <div className="grid md:grid-cols-2 gap-8 pt-6">

              {/* Symptoms/Signs */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h4 className="text-[20px] font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Common Signs
                </h4>
                <ul className="space-y-4">
                  {service.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[16px] text-gray-600">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Approach */}
              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                <h4 className="text-[20px] font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </span>
                  Treatment Approach
                </h4>
                <ul className="space-y-4">
                  {service.approach.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[16px] text-gray-600">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="mt-12 text-center">
              <button
                onClick={onOpenModal}
                className="inline-block bg-primary text-white tracking-[0.01em] text-[14px] px-[24px] py-[10px] rounded-full hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                Book an Appointment
              </button>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
};

export default ServiceDetailPage;
