import React from 'react';

const SuccessPopup = ({ isOpen, onClose, title = "Request Sent Successfully!", message = "Our team will reach out to confirm your slot shortly." }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center md:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-150"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative bg-white w-full h-full md:h-auto max-w-md md:rounded-[40px] shadow-2xl overflow-hidden p-10 flex flex-col items-center justify-center text-center animate-in zoom-in-95 fade-in duration-200 cubic-bezier(0.16, 1, 0.3, 1)">
        {/* Animated Checkmark Circle */}
        <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping opacity-20" />
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 relative z-10 transition-transform hover:scale-110 duration-500">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h3 className="text-[24px] font-semibold text-gray-900 mb-3 tracking-tight">
          {title}
        </h3>

        <p className="text-gray-500 text-[16px] leading-relaxed mb-10 max-w-[280px] mx-auto">
          {message}
        </p>

        <button
          onClick={onClose}
          className="w-full bg-primary text-white py-4 rounded-2xl font-medium text-[16px] hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95"
        >
          Got it, thank you!
        </button>

      </div>
    </div>
  );
};

export default SuccessPopup;
