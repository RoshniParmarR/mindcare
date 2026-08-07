import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import doctorParth from '../assets/ai_dr_parth.png';
import doctorSavan from '../assets/ai_dr_savan.png';
import rainaPatel from '../assets/ai_raina.png';
import purvaBhatt from '../assets/ai_purva.png';

const OurTeam = ({ onOpenModal }) => {
  const location = useLocation();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const team = [
    {
      id: 1,
      slug: 'dr-parth-patel',
      name: 'Dr. Parth Patel',
      role: 'Consultant Psychiatrist',
      image: doctorParth,
      bio: 'Dr. Parth Patel is a compassionate and thoughtful psychiatrist known for his patient-centered and insight-driven approach to care. His clinical work spans individual, couple, and family therapy, along with areas such as stress management, sexual health, LGBTQ+ mental health and de-addiction. He holds a special interest in individual growth-oriented psychotherapy, with a focus on fostering self-awareness, resilience, and meaningful personal transformation. Alongside his clinical practice, he has actively contributed to mental health awareness initiatives, reflecting his commitment to making care more accessible and stigma-free. With a blend of clinical clarity and empathetic understanding, he creates a refined and supportive space where individuals can explore, heal, and grow.',
      education: 'MBBS, MD Psychiatry',
      experience: 'Over 6+ Years',
      specialty: 'Psychotherapy, De-Addiction, Child & Adolescent Psychiatry, Geriatric Mental Health',
      shortBio: 'Compassionate psychiatrist with a patient-centered approach to individual, couple, and family psychotherapy.',
      objectPos: '34% center'
    },
    {
      id: 2,
      slug: 'dr-savan-patel',
      name: 'Dr. Savan Patel',
      role: 'Consultant Psychiatrist',
      image: doctorSavan,
      bio: 'Dr. Savan Patel is a detail-oriented psychiatrist known for his balanced and structured approach to mental health care. His clinical work integrates medication management with supportive psychotherapy, allowing for a well-rounded and individualized treatment plan. He has considerable experience in managing a wide range of psychiatric conditions, with a particular interest in de-addiction care. His approach emphasizes clarity, safety, and evidence-based decision-making while ensuring patients feel guided and supported throughout their treatment journey. In addition to his clinical role, he contributes to the coordination and execution of mental health programs. He is recognized for his thoughtful clinical judgment and commitment to delivering consistent, patient-centered care.',
      education: 'MBBS, MD Psychiatry',
      experience: 'Over 6+ Years',
      specialty: 'Pharmacotherapy, De-Addiction Psychiatry, Comprehensive Mental Health Care',
      shortBio: 'Detail-oriented psychiatrist specializing in balanced pharmacotherapy and structured de-addiction care.',
      objectPos: '44% center'
    },
    {
      id: 3,
      slug: 'raina-patel',
      name: 'Raina Patel',
      role: 'Clinical and Community Psychologist',
      image: rainaPatel,
      bio: 'With over 7 years of clinical experience, she is a dedicated and compassionate clinical psychologist and therapist committed to helping individuals navigate emotional, behavioral, and psychological challenges. She has worked extensively in clinical settings, supporting clients across a wide range of concerns including anxiety, depression, stress, relationship issues, and obsessive-compulsive tendencies. Her therapeutic approach is client-centered, evidence-based, and tailored to each individual\'s unique needs. She integrates techniques from Cognitive Behavioral Therapy (CBT), mindfulness-based approaches like PMR, supportive counselling, and psychotherapy to promote healing, resilience, and personal growth. She strongly believes in creating a safe, non-judgemental space where clients feel heard, understood, and empowered. Her goal is not just symptom relief, but helping individuals build long-term emotional strength and self-awareness and thereby leading more balanced and fulfilling lives. Her areas of expertise include anxiety disorders, mood disorders, stress related concerns, couple and relationship therapy, women\'s mental health, and many more. Over the years, she has developed a keen interest in helping individuals build assertiveness, manage chronic guilt, and improve overall emotional resilience with her sessions which are structured yet flexible, adapting to the pace and comfort of each client. In addition to her clinical psychology practice, she has also contributed to mental health awareness through conducting workshops and training programs, psychoeducation sessions, and community outreach initiatives. A further accomplishment also includes completing Applied Behavior Analysis treatment course for autistic children.',
      education: 'PGDCCP (Clinical and Community Psychologist)',
      experience: 'Over 7+ Years',
      specialty: 'CBT, PMR, Psychotherapy, Anxiety and Mood Disorders',
      shortBio: 'Dedicated clinical psychologist with 7+ years of experience in evidence-based therapy and emotional resilience.',
      objectPos: 'center top'
    },
    {
      id: 4,
      slug: 'purva-bhatt',
      name: 'Purva Bhatt',
      role: 'Clinical Nurse & Patient Coordinator',
      image: purvaBhatt,
      bio: 'Purva Bhatt has comprehensive clinical experience across critical care, patient coordination, psychiatry and mental health, de-addiction services, and pharmacology. She is skilled in delivering patient-centered care with a strong focus on safety, quality, and ethical practice. With a solid foundation in clinical assessment and interdisciplinary collaboration, Purva effectively supports complex patient needs while ensuring clear communication between patients, families, and healthcare teams. Her experience in diverse care settings has strengthened her ability to adapt, prioritize, and maintain high standards of care under pressure. Purva is committed to continuous professional development and aims to contribute to healthcare organizations by combining clinical competence with compassion, efficiency, and a patient-first approach.',
      education: 'Bachelors of Science in Nursing',
      experience: 'Over 4+ Years',
      specialty: 'Critical Care, Patient Coordination, Mental Health Support, De-Addiction, Pharmacology',
      shortBio: 'Dedicated nursing professional specializing in patient-centered care and clinical coordination.',
      objectPos: '34% center'
    }
  ];

  // Open modal from URL hash on page load
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const doctor = team.find(d => d.slug === hash);
      if (doctor) setSelectedDoctor(doctor);
    }
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedDoctor) {
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
  }, [selectedDoctor]);

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    // Update URL hash without full navigation
    window.history.pushState(null, '', `${location.pathname}#${doctor.slug}`);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
    // Remove the hash from the URL
    window.history.pushState(null, '', location.pathname);
  };

  return (
    <section id="team" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 reveal-zoom">
          <h2 className="text-[28px] lg:text-[32px] font-medium text-gray-900 mb-3">
            Meet the <span className="text-primary">Expert Team</span>
          </h2>
          <p className="text-gray-500 text-[16px] max-w-2xl mx-auto leading-relaxed">
            Our clinic is home to highly qualified psychiatry and mental health professionals dedicated to providing personalized, evidence-based care with deep empathy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {team.map((dr, idx) => {
            // Unique organic shapes for each doctor
            const shapes = [
              "rounded-[50%]",
              "rounded-[50%]",
              "rounded-[50%]",
              "rounded-[50%]"
            ];

            return (
              <div
                key={dr.id}
                className="group reveal opacity-0 flex flex-col items-center text-center"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  onClick={() => openModal(dr)}
                  className="relative w-56 h-56 md:w-64 md:h-64 lg:w-full lg:aspect-square mx-auto mb-8 overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 transform rounded-[50%]"
                >
                  <img
                    src={dr.image}
                    alt={dr.name}
                    className="w-full h-full object-cover transition-transform duration-1000 "
                    style={{ objectPosition: dr.objectPos }}
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                <div className="space-y-2">
                  <div className="text-primary font-bold uppercase tracking-widest text-[11px] scale-95 opacity-80">{dr.role}</div>
                  <h3 className="text-[24px] font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">{dr.name}</h3>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Doctor Profile Modal */}
      {selectedDoctor && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center sm:p-8 p-0 bg-black/80 backdrop-blur-sm animate-simpleFade"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-none md:rounded-[40px] w-full md:max-w-4xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto md:overflow-hidden relative mobile-slide-up desktop-fade-in flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="fixed md:absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-gray-900 cursor-pointer transition-colors z-50 bg-white/90 md:bg-white rounded-full p-2.5 backdrop-blur-md shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-full md:w-1/2 h-[45vh] md:h-auto flex-shrink-0 relative">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: selectedDoctor.objectPos }}
              />
            </div>
            <div className="w-full md:w-1/2 p-8 lg:p-12 md:overflow-y-auto custom-scrollbar md:max-h-[90vh]">
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{selectedDoctor.role}</p>
              <h2 className="text-[28px] lg:text-[32px] text-gray-900 font-bold leading-tight mb-6">{selectedDoctor.name}</h2>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-[12px] uppercase tracking-wider text-gray-400 font-bold mb-1">Education</h4>
                  <p className="text-gray-700 font-medium">{selectedDoctor.education}</p>
                </div>
                <div>
                  <h4 className="text-[12px] uppercase tracking-wider text-gray-400 font-bold mb-1">Experience</h4>
                  <p className="text-gray-700 font-medium">{selectedDoctor.experience}</p>
                </div>
                <div className="col-span-2">
                  <h4 className="text-[12px] uppercase tracking-wider text-gray-400 font-bold mb-1">Specialty</h4>
                  <p className="text-gray-700 font-medium">{selectedDoctor.specialty}</p>
                </div>
              </div>

              <div >
                <h4 className="text-[12px] uppercase tracking-wider text-gray-400 font-bold mb-3">About Doctor</h4>
                <p className="text-gray-600 leading-relaxed text-justify">{selectedDoctor.bio}</p>
              </div>

              {!selectedDoctor.name.includes("Purva") && (
                <div className="mt-8">
                  <button
                    onClick={() => {
                      closeModal(); // Close profile modal
                      onOpenModal(); // Open appointment modal
                    }}
                    className="inline-block bg-primary text-white px-8 py-4 rounded-full text-sm hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/20 cursor-pointer"
                  >
                    Book Appointment
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurTeam;
