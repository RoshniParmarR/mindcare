import React from 'react';
import { Link } from 'react-router-dom';

const servicesContent = [
  {
    id: 4,
    slug: 'meditation',
    title: 'Meditation & Mindfulness',
    desc: 'Meditation is an ancient practice used for thousands of years to promote mental clarity and emotional stability.',
    icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
  },
  {
    id: 5,
    slug: 'stress-management',
    title: 'Stress Management',
    desc: 'Chronic stress can negatively impact physical health. We provide actionable strategies to manage and overcome stress.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    id: 6,
    slug: 'emotion-management',
    title: 'Emotion Management',
    desc: 'Emotions are natural, but learning to manage them effectively is crucial for maintaining personal and professional harmony.',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 7,
    slug: 'anger-management',
    title: 'Anger Management',
    desc: 'Anger is a natural emotion, but overwhelming anger can disrupt life. Learn robust coping and regulatory mechanisms.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    id: 8,
    slug: 'de-addiction-program',
    title: 'De-addiction Program (OPD/ IPD Based)',
    desc: 'Comprehensive care to help individuals break free from addiction through structured OPD and IPD programs.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-[28px] lg:text-[32px] font-medium text-gray-900 mb-3">
            Comprehensive <span className="text-primary">Clinical Programs</span>
          </h2>
          <p className="text-gray-500 text-[16px] max-w-2xl mx-auto leading-relaxed">
            Discover our range of specialized mental health services, from advanced clinical treatments to holistic wellness programs designed for your healing.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesContent.slice(0, 3).map((srv, idx) => (
              <div key={`row1-${idx}`} className="bg-[#fcfcfc] border border-gray-100 p-8 rounded-[30px] shadow-sm hover:shadow-lg hover:-translate-y-2 hover:border-primary/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={srv.icon} />
                  </svg>
                </div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{srv.title}</h3>
                <p className="text-gray-500 mb-6 text-[16px] leading-relaxed">{srv.desc}</p>
                <Link to={`/services/${srv.slug}`} className="text-primary font-semibold text-[14px] flex items-center gap-2 group/link">
                  Read More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:max-w-3xl mx-auto w-full">
            {servicesContent.slice(3).map((srv, idx) => (
              <div key={`row2-${idx}`} className="bg-[#fcfcfc] border border-gray-100 p-8 rounded-[30px] shadow-sm hover:shadow-lg hover:-translate-y-2 hover:border-primary/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={srv.icon} />
                  </svg>
                </div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{srv.title}</h3>
                <p className="text-gray-500 mb-6 text-[16px] leading-relaxed">{srv.desc}</p>
                <Link to={`/services/${srv.slug}`} className="text-primary font-semibold text-[14px] flex items-center gap-2 group/link">
                  Read More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
