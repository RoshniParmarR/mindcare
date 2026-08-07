import React, { useState, useRef, useEffect } from 'react';

const allMythsFacts = [
  { myth: 'Only mentally weak people consult to Psychiatrist/Psychologist.', fact: 'Realising the need for help and seeking support is a sign of strength.' },
  { myth: 'You are the one to blame for the mental struggles you go through.', fact: 'Mental health issues are complex and resolving them by healing is more important.' },
  { myth: 'Talking about suicide to someone will make them likely to go through with it.', fact: 'Having an open communication helps them to open up and start a conversation.' },
  { myth: 'Mental health problems are rare.', fact: 'Mental health problems are so common.' },
  { myth: 'Mental health issues are not real issues.', fact: 'Mental struggles are as real as physical health issues. Both are equally important.' },
  { myth: 'Mentally ill people are violent and aggressive.', fact: 'Only 1 in 100 patients might become harmful if they are untreated.' },
  { myth: 'Psychiatric treatments should not be taken for more than few days.', fact: 'Duration of treatment depends on illness severity; follow your doctor\'s advice.' },
  { myth: 'If you take Psychiatric medicines, you will become dependent on it for life.', fact: 'Majority of patients are able to stop treatment if they follow their doctor\'s advice.' }
];

import doctorParth from '../assets/ai_dr_parth.png';
import doctorSavan from '../assets/ai_dr_savan.png';
import purvaBhatt from '../assets/ai_purva.png';
import rainaPatel from '../assets/ai_raina.png';
import testImg from '../assets/test.png';
import aboutHeroImg from '../assets/about-us.png';
import aboutBg from '../assets/herobg.png';
import psychiatryBg from '../assets/psychiatry_bg.png';
import psychiatryNurturing from '../assets/psychiatry_nurturing_final.png';
const AboutPage = ({ onOpenModal }) => {
  const [showAllMyths, setShowAllMyths] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  // Smooth continuous auto-scroll for mobile
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const step = () => {
      if (window.innerWidth < 1024 && !isPaused) {
        scrollContainer.scrollLeft += 0.8; // Smooth movement

        // Seamless loop reset
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);

  const doctors = [
    {
      name: "Dr. Parth Patel",
      role: "Consultant Psychiatrist",
      image: doctorParth,
      objectPos: '49% center',
      contact: "+91 70169 24443",
      bio: "Dr. Parth Patel is a compassionate and thoughtful psychiatrist known for his patient-centered and insight-driven approach to care. His clinical work spans individual, couple, and family therapy, along with areas such as stress management, sexual health, LGBTQ+ mental health and de-addiction. He holds a special interest in individual growth-oriented psychotherapy, with a focus on fostering self-awareness, resilience, and meaningful personal transformation. Alongside his clinical practice, he has actively contributed to mental health awareness initiatives, reflecting his commitment to making care more accessible and stigma-free. With a blend of clinical clarity and empathetic understanding, he creates a refined and supportive space where individuals can explore, heal, and grow.",
      experiences: [
        { role: "Consultant Psychiatrist", org: "MindCare Mental Health Clinic, Vadodara", period: "Present" },
        { role: "Senior Resident Doctor", org: "Medical College, Baroda & SSGH Vadodara", period: "Aug 2024 - Jan 2025" },
        { role: "Senior Resident Doctor", org: "P.D.U. Medical College, Rajkot", period: "July 2023 - July 2024" },
        { role: "Junior Resident Doctor", org: "P.D.U. Medical College, Rajkot", period: "July 2020 - July 2023" }
      ],
      education: [
        { degree: "MD Psychiatry", inst: "P.D.U Government Medical College, Rajkot", period: "2020 - 2023" },
        { degree: "MBBS", inst: "Medical College Baroda & SSGH Vadodara", period: "2014 - 2019" }
      ]
    },
    {
      name: "Dr. Savan Patel",
      role: "Consultant Psychiatrist",
      image: doctorSavan,
      objectPos: '44% center',
      contact: "+91 70169 24443",
      bio: "Dr. Savan Patel is a detail-oriented psychiatrist known for his balanced and structured approach to mental health care. His clinical work integrates medication management with supportive psychotherapy, allowing for a well-rounded and individualized treatment plan. He has considerable experience in managing a wide range of psychiatric conditions, with a particular interest in de-addiction care. His approach emphasizes clarity, safety, and evidence-based decision-making while ensuring patients feel guided and supported throughout their treatment journey. In addition to his clinical role, he contributes to the coordination and execution of mental health programs. He is recognized for his thoughtful clinical judgment and commitment to delivering consistent, patient-centered care.",
      experiences: [
        { role: "Consultant Psychiatrist", org: "MindCare Mental Health Clinic, Vadodara", period: "Present" },
        { role: "Senior Resident Doctor", org: "Medical College, Baroda & SSGH Vadodara", period: "Aug 2024 - Jan 2025" },
        { role: "Senior Resident Doctor", org: "P.D.U. Medical College, Rajkot", period: "July 2023 - July 2024" },
        { role: "Junior Resident Doctor", org: "P.D.U. Medical College, Rajkot", period: "July 2020 - July 2023" }
      ],
      education: [
        { degree: "MD Psychiatry", inst: "P.D.U Government Medical College, Rajkot", period: "2020 - 2023" },
        { degree: "MBBS", inst: "Medical College Baroda & SSGH Vadodara", period: "2013 - 2018" }
      ]
    },
    {
      name: "Raina Patel",
      role: "Clinical & Community Psychologist",
      image: rainaPatel,
      objectPos: 'center top',
      contact: "+91 70169 24443",
      bio: "Raina Patel is a dedicated and compassionate clinical psychologist with over 7 years of experience. Her therapeutic approach is client-centered and evidence-based, integrating techniques from Cognitive Behavioral Therapy (CBT), mindfulness-based approaches, and psychotherapy. She specializes in anxiety, mood disorders, stress management, and relationship therapy, focusing on building long-term emotional resilience and self-awareness in her patients.",
      experiences: [
        { role: "Clinical & Community Psychologist", org: "MindCare Mental Health Clinic, Vadodara", period: "Present" },
        { role: "Clinical Psychologist & Therapist", org: "Clinical Settings", period: "over 7+ years" }
      ],
      education: [
        { degree: "PGDCCP (Clinical and Community Psychologist)", inst: "Psychology Institution", period: "Graduate" },
        { degree: "Applied Behavior Analysis (ABA)", inst: "ABA Course", period: "Completed" }
      ]
    },
    {
      name: "Purva Bhatt",
      role: "Clinical Nurse & Patient Coordinator",
      image: purvaBhatt,
      objectPos: 'center top',
      contact: "+91 70169 24443",
      bio: "Purva Bhatt has comprehensive clinical experience across critical care, patient coordination, psychiatry and mental health, de-addiction services, and pharmacology. She is skilled in delivering patient-centered care with a strong focus on safety, quality, and ethical practice. With a solid foundation in clinical assessment and interdisciplinary collaboration, Purva effectively supports complex patient needs while ensuring clear communication between patients, families, and healthcare teams. Her experience in diverse care settings has strengthened her ability to adapt, prioritize, and maintain high standards of care under pressure. Purva is committed to continuous professional development and aims to contribute to healthcare organizations by combining clinical competence with compassion, efficiency, and a patient-first approach.",
      experiences: [
        { role: "Clinical Nurse", org: "MindCare Mental Health Clinic", period: "Present" },
        { role: "Nurse & Patient Coordinator", org: "Healthcare Profession", period: "over 4+ years" }
      ],
      education: [
        { degree: "Bachelors of Science in Nursing", inst: "Nursing College", period: "Graduate" }
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#333] font-['Poppins sans-serif']">

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-38 px-6 lg:px-12 bg-[#1a1817] text-white h-[100svh] md:h-[70dvh] lg:h-auto overflow-hidden pb-0 lg:pb-28">
        <div className="absolute inset-0 z-0 overflow-hidden text-[#fcfcfc]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/70 z-10" />
          <img src={testImg} alt="About Us Desktop" className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-100" />
          <img src={aboutBg} alt="About Us Mobile" className="md:hidden absolute inset-0 w-full h-full object-cover opacity-100" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl md:max-w-[45%] lg:max-w-2xl">
            <h1 className="pt-8 lg:pt-0 text-[36px] lg:text-[48px] font-medium leading-[1.1] mb-8 reveal opacity-0 tracking-tight text-white" style={{ animationDelay: '0.2s' }}>
              Led by Experts,<br />
              Defined by <span className="text-primary-light italic relative inline-block">
                Compassion
              </span>
            </h1>
            <p className="text-white/70 text-[16px] leading-relaxed reveal opacity-0" style={{ animationDelay: '0.4s' }}>
              We bring together world-class clinical expertise and a shared dedication to compassionate, science-backed mental health care.
            </p>
          </div>

          {/* Mobile Only Image: Displayed below text for mobile/tablet, pinned to bottom */}
          <div className="md:hidden relative mt-10 -mx-6 flex items-end reveal opacity-0" style={{ animationDelay: '0.6s' }}>
            <img
              src={aboutHeroImg}
              alt="Dr. Parth and Dr. Savan"
              className="w-full h-auto opacity-100 scale-[1.05]"
            />
          </div>
        </div>
      </section>

      {/* 2. Psychiatry Section */}
      <section className="pt-16 pb-4 lg:py-24 px-6 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Content Side */}
            <div className="w-full lg:w-1/2 reveal opacity-0">
              <h2 className="text-[28px] lg:text-[32px] font-medium text-gray-900 mb-8 leading-tight">
                What is <span className="text-primary text-serif">Psychiatry?</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-[16px] lg:text-[17px] leading-relaxed">
                <p>
                  Psychiatry is a branch of medicine that focuses on the diagnosis, treatment, and prevention of mental, emotional, and behavioral disorders.
                </p>
                <p>
                  Psychiatrists are medical doctors who are trained to understand the complex relationship between emotional illness and physical health. They use a combination of medical, psychological, and social approaches to help patients manage conditions such as depression, anxiety, schizophrenia, bipolar disorder, and more.
                </p>
                <div className="pt-4">
                  <p className="font-medium text-gray-900 italic border-l-3 border-primary pl-6 py-2">
                    Psychiatry is not just about prescribing medications — it is about understanding the mind,
                    easing suffering, and helping individuals reclaim meaningful lives.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Side - Nurturing Growth Illustration with Subtle Watermark Style */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[600px] lg:-mt-24 opacity-[0.12] hover:opacity-[0.18] transition-opacity duration-700">
                <img
                  src={psychiatryNurturing}
                  alt="Nurturing Mental Growth"
                  className="w-full h-auto object-contain scale-[1.1] rotate-[3deg]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Philosophy Section */}
      <section className="py-20 px-6 lg:px-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-[28px] lg:text-[32px] font-medium text-gray-900 mb-6 reveal opacity-0">Our Core <span className="text-primary">Philosophy</span></h2>
          <p className="text-gray-500 text-[16px] max-w-2xl mx-auto mb-16 leading-relaxed reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            Our mission is rooted in the belief that mental wellness is a fundamental human right. We combine empathy with evidence-based practices to help you navigate life's challenges and find your inner peace.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 reveal-zoom">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 mx-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-[20px] font-bold mb-4">Compassion</h3>
              <p className="text-gray-600 leading-relaxed text-[16px]">Treating every individual with the warmth and respect they deserve, fostering a safe healing space.</p>
            </div>
            <div className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 reveal-zoom" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 mx-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-[20px] font-bold mb-4">Evidence-Based</h3>
              <p className="text-gray-600 leading-relaxed text-[16px]">Combining clinical expertise with the latest scientific research to provide effective, outcome-driven care.</p>
            </div>
            <div className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 reveal-zoom" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 mx-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-[20px] font-bold mb-4">Holistic Wellness</h3>
              <p className="text-gray-600 leading-relaxed text-[16px]">Going beyond symptoms to address the root causes and promote long-term mental and emotional harmony.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Member Loop */}
      {doctors.map((doctor, index) => (
        <DoctorSection key={doctor.name} doctor={doctor} index={index} onOpenModal={onOpenModal} />
      ))}

      {/* 5. Myths and Facts Section */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-[28px] lg:text-[32px] font-medium text-gray-900">Mental Health <span className="text-primary">Awareness</span></h3>
            <p className="text-gray-500 text-[16px] mt-3">Breaking stigmas by separating myths from reality.</p>
          </div>

          {/* Desktop View — Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {allMythsFacts.slice(0, showAllMyths ? allMythsFacts.length : 4).map((item, i) => (
              <div key={i} className="flex flex-col border border-gray-100 rounded-[30px] overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="bg-red-50 p-8 flex gap-4 flex-1">
                  <div className="text-red-500 font-bold text-[12px] mt-1 shrink-0 uppercase tracking-wider">Myth</div>
                  <p className="text-gray-900 font-medium text-[16px] leading-snug">{item.myth}</p>
                </div>
                <div className="bg-green-50/50 p-8 flex gap-4 border-t border-gray-100 flex-1">
                  <div className="text-green-600 font-bold text-[12px] mt-1 shrink-0 uppercase tracking-wider">Fact</div>
                  <p className="text-gray-700 leading-relaxed text-[16px]">{item.fact}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View — Continuous Infinite Scroll (Same as Home Page) */}
          <div
            className="lg:hidden w-full overflow-x-hidden py-4"
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div
              ref={scrollRef}
              className="flex gap-4 px-6 overflow-x-hidden select-none pb-8"
            >
              {/* Duplicating array for seamless loop */}
              {[...allMythsFacts, ...allMythsFacts].map((item, idx) => (
                <div key={idx} className="w-[300px] shrink-0">
                  <div className="border border-gray-100 rounded-[32px] overflow-hidden bg-white shadow-xl shadow-black/5 min-h-[350px] flex flex-col h-full">
                    <div className="bg-red-50 p-7 flex flex-col gap-3 flex-1">
                      <div className="text-red-500 font-bold text-[11px] uppercase tracking-widest">Myth</div>
                      <p className="text-gray-900 font-medium text-[16px] leading-tight">{item.myth}</p>
                    </div>
                    <div className="bg-green-50/50 p-7 flex flex-col gap-3 flex-1 border-t border-gray-100">
                      <div className="text-green-600 font-bold text-[11px] uppercase tracking-widest">Fact</div>
                      <p className="text-gray-700 leading-relaxed text-[15px]">{item.fact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {!showAllMyths && (
            <div className="mt-10 text-center hidden lg:block">
              <button onClick={() => setShowAllMyths(true)} className="text-primary tracking-[0.01em] hover:text-primary/80  bg-transparent border-none cursor-pointer text-base">View All Myths &amp; Facts →</button>
            </div>
          )}
        </div>
      </section>

      {/* 6. CTA section */}
      <section className="py-20 px-6 lg:px-12 bg-primary text-white text-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-[28px] lg:text-[32px] font-medium leading-tight reveal opacity-0">Restore Your Inner Balance Today</h2>
          <p className="text-white/80 text-[16px] reveal opacity-0" style={{ animationDelay: '0.2s' }}>Book a consultation with our experts and start your journey towards mental harmony.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4 reveal opacity-0" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={onOpenModal}
              className="bg-white text-primary px-[24px] py-[10px] rounded-full  hover:bg-gray-100 text-[14px] transition-colors shadow-lg cursor-pointer"
            >
              Make an Appointment
            </button>
            <a href="tel:+917016924443" className="bg-transparent border border-white/30 text-white px-[24px] py-[10px] rounded-full text-[14px] hover:bg-white/10 transition-colors">
              Call Us Now
            </a>
          </div>
        </div>
      </section>


    </div>
  );
};

const DoctorSection = ({ doctor, index, onOpenModal }) => {
  const sectionRef = useRef(null);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Scroll direction detection for sticky centering
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative py-10 lg:py-20 px-6 lg:px-12 ${index % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className={`flex flex-col lg:flex-row gap-8 lg:gap-24 items-center lg:items-stretch justify-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div
              className="lg:sticky transition-[top] duration-500 ease-in-out"
              style={{
                top: isScrollingUp
                  ? 'calc(50vh - 260px)' // Centered with Navbar visible
                  : 'calc(50vh - 300px)' // Centered with Navbar hidden
              }}
            >
              <div className="w-full max-w-[600px] lg:h-[600px] md:h-[600px] h-[380px] mx-auto rounded-[30px] overflow-hidden bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"

                  style={{ objectPosition: doctor.objectPos }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-8 pt-20 text-white">
                  <div className="text-[24px] font-bold leading-tight">{doctor.name}</div>
                  <div className="text-[11px] mt-1">{doctor.role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className="w-full lg:w-1/2 text-left relative"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="pt-2 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-[28px] lg:text-[32px] font-medium text-gray-900 leading-tight">
                {index === 0 || index === 1 || index === 2 ? (
                  <>
                    Our <span className="text-primary">Consultant</span>
                  </>
                ) : (
                  <>
                    Our Clinical <span className="text-primary">Staff</span>
                  </>
                )}
              </h2>

              {!doctor.name.includes("Purva") && (
                <button
                  onClick={onOpenModal}
                  className="hidden sm:inline-flex text-[14px] items-center gap-3 px-[24px] py-[10px] bg-primary text-white rounded-full shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all duration-300 group cursor-pointer whitespace-nowrap"
                >
                  <span>Make an Appointment</span>
                </button>
              )}
            </div>

            <p className="text-gray-600 text-[16px] lg:text-[16px] leading-relaxed italic text-justify">
              {doctor.bio}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-12 pt-8 text-left">
              <div>
                <h4 className="text-[12px] font-bold text-primary uppercase tracking-widest mb-4 pb-2">Professional Experience</h4>
                <div className="space-y-4 text-left">
                  {doctor.experiences.map((exp, i) => (
                    <div key={i} className="border-l-2 border-gray-100 pl-4 py-1">
                      <div className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider">{exp.period}</div>
                      <div className="text-[16px] font-semibold text-gray-800 leading-tight mt-1">{exp.role}</div>
                      <div className="text-[12px] text-gray-500 mt-1">{exp.org}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[12px] font-bold text-primary uppercase tracking-widest mb-4 pb-2">Education</h4>
                <div className="space-y-4 text-left">
                  {doctor.education.map((edu, i) => (
                    <div key={i} className="border-l-2 border-gray-100 pl-4 py-1">
                      <div className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider">{edu.period}</div>
                      <div className="text-[16px] font-semibold text-gray-800 leading-tight mt-1">{edu.degree}</div>
                      <div className="text-[12px] text-gray-500 mt-1">{edu.inst}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {!doctor.name.includes("Purva") && (
              <div className="pt-10 sm:hidden">
                <button
                  onClick={onOpenModal}
                  className="w-full inline-flex justify-center text-[14px] items-center gap-3 px-[24px] py-[12px] bg-primary text-white rounded-full shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all duration-300 group cursor-pointer"
                >
                  <span>Make an Appointment</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
