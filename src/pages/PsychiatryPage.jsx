import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MythsFacts from '../components/MythsFacts';

const PsychiatryPage = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#333] font-['Outfit']">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-52 lg:pb-40 px-6 lg:px-12 bg-[#1a1a1a] text-white overflow-hidden">
        {/* Abstract Background Art */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] aspect-square bg-primary/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] aspect-square bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#1a1a1a]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block border border-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 reveal opacity-0">
              <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-white/60">The Science of Well-being</span>
            </div>
            <h1 className="text-32px lg:text-32px font-medium leading-[1.1] mb-8 reveal opacity-0" style={{ animationDelay: '0.2s' }}>
              Understanding <br />
              <span className="text-primary-light italic font-serif">Psychiatry</span>
            </h1>
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl reveal opacity-0" style={{ animationDelay: '0.4s' }}>
              Bridging the gap between medical science and emotional well-being to help you lead a more fulfilling life.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-12 hidden lg:flex items-center gap-4 rotate-90 origin-right opacity-30 reveal opacity-0" style={{ animationDelay: '0.6s' }}>
          <span className="text-[10px] uppercase tracking-[0.3em] whitespace-nowrap">Keep Scrolling</span>
          <div className="w-16 h-[1px] bg-white" />
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal opacity-0">
              <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-8 max-w-md leading-tight">
                What exactly is <span className="text-primary">Psychiatry?</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Psychiatry is a branch of medicine that focuses on the diagnosis, treatment, and prevention of mental, emotional, and behavioral disorders.
                </p>
                <p>
                  Psychiatrists are medical doctors who are trained to understand the complex relationship between emotional illness and physical health. They use a combination of medical, psychological, and social approaches to help patients manage conditions such as depression, anxiety, schizophrenia, bipolar disorder, and more.
                </p>
                <p className="font-medium text-gray-900">
                  Unlike psychologists, psychiatrists can prescribe medications and often work closely with other mental health professionals to provide comprehensive care.
                </p>
              </div>
            </div>

            <div className="relative reveal" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-square rounded-[60px] bg-primary overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 flex items-center justify-center p-12 text-white text-center">
                  <div className="space-y-6">
                    <svg className="w-16 h-16 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.67.335a2 2 0 01-1.789 0l-.67-.335a6 6 0 00-3.86-.517l-2.388.477a2 2 0 00-1.022.547l-.34.34a2 2 0 000 2.828l.34.34a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.517l.67-.335a2 2 0 011.789 0l.67.335a6 6 0 003.86.517l2.388-.477a2 2 0 001.022-.547l.34-.34a2 2 0 000-2.828l-.34-.34z" />
                    </svg>
                    <h3 className="text-2xl font-serif">A Balanced Approach</h3>
                    <p className="text-white/80 leading-relaxed text-sm">
                      We treat the mind, understand the brain, and care for the person as a whole.
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-light/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Myths & Facts Section - Linking to the existing component or recreation */}
      <div className="bg-gray-50 border-y border-gray-100">
        <MythsFacts />
      </div>

      {/* Educational Features Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4">When to Consult a Psychiatrist?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">Early intervention is key to long-term mental wellness. Understanding these signs can help you make the right choice.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Persistent Mood Changes", desc: "Long periods of sadness, extreme irritability, or uncontrolled highs." },
              { title: "Social Withdrawal", desc: "Sudden loss of interest in people or activities once enjoyed." },
              { title: "Sleep & Appetite Issues", desc: "Significant changes in sleeping patterns or eating habits." },
              { title: "Excessive Worry", desc: "Anxiety that feels overwhelming and interferes with daily life." },
              { title: "Thinking Difficulties", desc: "Problems with concentration, memory, or logical speech." },
              { title: "Substance Use", desc: "Using alcohol or drugs as a way to cope with emotional pain." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow reveal-zoom" style={{ animationDelay: `${i * 0.1}s` }}>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 px-6 lg:px-12 bg-primary text-white text-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-8">
          <h2 className="text-3xl lg:text-5xl font-medium leading-tight reveal">Take the First Step Towards Wellness</h2>
          <p className="text-white/80 text-lg reveal" style={{ animationDelay: '0.1s' }}>Seeking help is a sign of strength. We are here to support you every step of the way.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4 reveal" style={{ animationDelay: '0.2s' }}>
            <a href="/contact#contact-form" className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-xl">
              Make an Appointment
            </a>
            <a href="tel:+917016924443" className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PsychiatryPage;
