import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 reveal">
        {/* Left Side — Info */}
        <div className="space-y-12">
          <div>
            <span className="re-label mb-2">Contact Us</span>
            <h2 className="text-gray-900 font-serif">Get In Touch</h2>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Your mental well-being is important. Reach out to ourselves and take the first step toward a more harmonious life.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">📍</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Clinic Address</h4>
                <p className="text-gray-500">5th Floor, Red Coral Hamptons, In Front of Benjamin World School, Gotri- Sevasi Road, Gotri, Vadodara, Gujarat - 390021</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">📞</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                <p className="text-gray-500">+91 70169 24443</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">✉️</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                <p className="text-gray-500">support@MindCare.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side — Form */}
        <div className="bg-[#fcfcfc] p-10 rounded-[40px] border border-gray-100 shadow-xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full bg-white px-6 py-4 rounded-full border border-gray-100 focus:border-primary outline-none transition-all" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-white px-6 py-4 rounded-full border border-gray-100 focus:border-primary outline-none transition-all" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full bg-white px-6 py-4 rounded-full border border-gray-100 focus:border-primary outline-none transition-all" />
            <textarea rows="4" placeholder="Your Message" className="w-full bg-white px-6 py-6 rounded-[30px] border border-gray-100 focus:border-primary outline-none transition-all resize-none"></textarea>
            <button type="submit" className="re-btn-primary w-full justify-center py-5 uppercase tracking-widest text-xs font-black shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
