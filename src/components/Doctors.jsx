import React from 'react';
import doctorParth from '../assets/ai_dr_parth.png';
import doctorSavan from '../assets/ai_dr_savan.png';

const doctors = [
  {
    name: 'Dr. Parth Patel',
    title: 'Consultant Psychiatrist',
    image: doctorParth,
    specialty: 'Mental Health Specialist'
  },
  {
    name: 'Dr. Savan Patel (Sapovadia)',
    title: 'Consultant Psychiatrist',
    image: doctorSavan,
    specialty: 'De-Addiction specialist'
  },
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-20 bg-[#fcfcfc] px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 reveal">
          {/* <span className="re-label mb-2">Our Experts</span> */}
          <h2 className="text-gray-900 ">Meet Our Specialists</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Our expert team specializes in diagnosing and treating various psychological concerns, ensuring a holistic approach to mental well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto reveal" style={{ animationDelay: '0.2s' }}>
          {doctors.map((dr, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[40px] shadow-lg bg-white border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500">
              <div className="w-full aspect-square rounded-[30px] overflow-hidden mb-8 transition-transform duration-700 group-hover:scale-105">
                <img
                  src={dr.image}
                  alt={dr.name}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="space-y-2">
                <span className="re-label uppercase tracking-[0.2em]">{dr.specialty}</span>
                <h3 className="font-serif text-gray-900" style={{ fontSize: '28px' }}>{dr.name}</h3>
                <p className="text-gray-500 font-medium">{dr.title}</p>
              </div>

              <div className="mt-8 flex gap-4">
                <a href="/contact#contact-form" className="re-btn-primary scale-90 px-6 py-3">Book Appointment</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
