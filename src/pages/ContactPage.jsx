import React, { useState } from 'react';
import SuccessPopup from '../components/SuccessPopup';
import contactBg from '../assets/herobg.png'; const ContactPage = ({ onOpenModal }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning',
    consultationType: 'Online',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const requiredFields = ['name', 'phone', 'email', 'message'];

  const validateForm = () => {
    const nextErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        nextErrors[field] = true;
      }
    });
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 15);
      setFormData(prev => ({ ...prev, phone: digitsOnly }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name] && value.trim()) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    // Simulate form submission
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', preferredDate: '', preferredTime: 'Morning', consultationType: 'Online', message: '' });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#333] font-['Poppins sans-serif']">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-33 px-6 lg:px-12 bg-[#1a1817] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/70 z-10" />
          <img src={contactBg} alt="Contact" className="absolute inset-0 w-full h-full object-cover opacity-100" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">

          <h1 className="text-[36px] lg:text-[48px] font-medium leading-[1.05] mb-6 reveal opacity-0 tracking-tight" style={{ animationDelay: '0.2s' }}>
            Contact <span className="text-primary-light italic ">Us</span>
          </h1>
          <p className="text-white/60 text-[16px] lg:text-[16px] leading-relaxed max-w-2xl mx-auto reveal opacity-0 font-light" style={{ animationDelay: '0.4s' }}>
            Whether you have a question, need to book an appointment, or are seeking support, our friendly team is here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Contact Info */}
            <div className="flex flex-col gap-5 reveal opacity-0">
              <div>
                <h2 className="text-[28px] lg:text-[32px] font-medium text-gray-900 mb-4 tracking-tight leading-tight">
                  Reach Out & <span className="text-primary italic font-serif">Connect</span>
                </h2>
                <p className="text-gray-500 text-[16px] leading-relaxed max-w-lg mb-2">
                  Your mental health is a priority. Reach out directly via phone or email, or drop by our clinic using the map below.
                </p>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-8 rounded-[32px] bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group text-center lg:text-left shadow-sm">
                  <div className="w-10 h-10 bg-primary/5 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-2 lg:mb-0 shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold  tracking-[0.1em] text-gray-900 mb-3">Our Clinic</h4>
                    <p className="text-gray-500 text-[14px] leading-relaxed max-w-[320px]">
                      5th Floor, Red Coral Hamptons, In Front of Benjamin World School,
                      Gotri - Sevasi Road, Gotri, Vadodara, Gujarat - 390021.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]">
                  {/* Phone */}
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 p-6 rounded-[32px] bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group text-center lg:text-left shadow-sm">
                    <div className="w-10 h-10 bg-primary/5 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-2 lg:mb-0 shadow-sm">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold  tracking-[0.1em] text-gray-900 mb-3">Phone</h4>
                      <a href="tel:+917016924443" className="text-gray-500 text-[14px] hover:text-primary transition-colors font-medium">
                        +91 70169 24443
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 p-6 mt-6 md:mt-0 ml-0 md:ml-6 rounded-[32px] bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group text-center lg:text-left shadow-sm">
                    <div className="w-10 h-10 bg-primary/5 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-2 lg:mb-0 shadow-sm">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[16px] font-semibold  tracking-[0.1em] text-gray-900 mb-3">Email</h4>
                      <a href="mailto:support@MindCare.com" className="text-gray-500 text-[14px] hover:text-primary transition-colors font-medium break-all sm:break-normal whitespace-nowrap overflow-hidden text-ellipsis block">
                        support@MindCare.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-8 rounded-[32px] bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group text-center lg:text-left shadow-sm">
                  <div className="w-10 h-10 bg-primary/5 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-2 lg:mb-0 shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold  tracking-[0.1em] text-gray-900 mb-3">Working Hours</h4>
                    <p className="text-gray-500 text-[14px] leading-relaxed">
                      10 am to 1 pm & 5 pm to 8 pm<br />
                      <span className="text-primary/70 font-medium italic">Sunday Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="bg-white p-8 lg:p-12 rounded-[40px] shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-gray-100 reveal opacity-0 relative overflow-hidden" style={{ animationDelay: '0.2s', scrollMarginTop: '120px' }}>
              <h3 className="text-[20px] font-semibold text-gray-900 mb-2">Request an Appointment</h3>
              <p className="text-gray-500 text-[16px] mb-8">Select your preferred date and time, and our team will get back to you with a confirmation.</p>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-medium text-gray-700 tracking-wide">Your Name <span className="text-primary ml-0.5">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(errors.name)}
                    placeholder="Your Name"
                    className={`w-full px-[24px] py-[10px] rounded-xl bg-gray-50 border outline-none focus:outline-none focus:bg-white transition-all text-[15px] ${errors.name ? 'border-red-500 shadow-none' : 'border-gray-200 focus:border-primary'}`}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[14px] font-medium text-gray-700 tracking-wide">Phone Number <span className="text-primary ml-0.5">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={15}
                      required
                      aria-invalid={Boolean(errors.phone)}
                      placeholder="+91 98765 43210"
                      className={`w-full px-[24px] py-[10px] rounded-xl bg-gray-50 border outline-none focus:outline-none focus:bg-white transition-all text-[15px] ${errors.phone ? 'border-red-500 shadow-none' : 'border-gray-200 focus:border-primary'}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[14px] font-medium text-gray-700 tracking-wide">Email Address <span className="text-primary ml-0.5">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-invalid={Boolean(errors.email)}
                      placeholder="You@example.com"
                      className={`w-full px-[24px] py-[10px] rounded-xl bg-gray-50 border outline-none focus:outline-none focus:bg-white transition-all text-[15px] ${errors.email ? 'border-red-500 shadow-none' : 'border-gray-200 focus:border-primary'}`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-medium text-gray-700  tracking-wide">Message <span className="text-primary ml-0.5">*</span></label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(errors.message)}
                    placeholder="How can we help you?"
                    className={`w-full px-[24px] py-[10px] rounded-xl bg-gray-50 border outline-none focus:outline-none focus:bg-white transition-all text-[15px] resize-none ${errors.message ? 'border-red-500 shadow-none' : 'border-gray-200 focus:border-primary'}`}
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-white font-medium text-[16px] py-[10px] px-[24px] rounded-xl hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                  Request Appointment
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="h-[500px] w-full mt-10">
        <iframe
          title="MindCare Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.9757600927464!2d73.1292043105098!3d22.316756479590033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9b7dfd91acd%3A0x611cccff2987dbba!2sMindCare%20Mental%20Health%20Clinic!5e0!3m2!1sen!2sin!4v1742991485929!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>


      {/* Success Popup */}
      <SuccessPopup
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
};

export default ContactPage;
