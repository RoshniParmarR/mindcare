import React, { useState, useEffect, useRef } from 'react';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning',
    consultationType: 'Online Consultation',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const typeRef = useRef(null);
  const calendarRef = useRef(null);

  // Reset all states when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitting(false);
      setIsSubmitted(false);
      setShowSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: 'Morning',
        consultationType: 'Online Consultation',
        message: ''
      });
      setErrors({});
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (typeRef.current && !typeRef.current.contains(event.target)) {
        setShowTypeDropdown(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Don't clear overflow if success popup is still open
      if (!showSuccess) {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen, showSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Enforce digit-only for phone and max lengths
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, ''); // Remove all non-digits
      if (cleaned.length > 15) return; // Prevent entry past 15 digits
      setFormData(prev => ({ ...prev, [name]: cleaned }));
    } else if (name === 'name' || name === 'email') {
      if (value.length > 100) return; // Prevent entry past 100 characters
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name]) setErrors(prev => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};

    // Standard validations
    if (!formData.name.trim()) nextErrors.name = true;
    if (!formData.phone.trim() || formData.phone.length < 5) nextErrors.phone = true;

    // Email Validation Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      nextErrors.email = true;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    // Simulate server delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true); // This starts the button text change and form fade out

      // After form is faded out, show the centered success content
      setTimeout(() => {
        setShowSuccess(true);
      }, 600);
    }, 2000);
  };

  if (!isOpen && !showSuccess) return null;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 sm:p-4 lg:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150" onClick={onClose} />

          <div className="relative bg-white w-full h-full sm:h-auto sm:max-w-2xl sm:rounded-[30px] shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-150">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[50] p-2 text-gray-400 cursor-pointer hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all hidden md:block"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="overflow-y-auto max-h-[100vh] custom-scrollbar h-full">
              <div className={`px-6 md:px-12 md:pt-8 md:pb-10 min-h-full  lg:min-h-[650px] flex flex-col ${showSuccess ? 'justify-center' : 'sm:justify-center'} relative`}>

                {/* Success Content (Centered) */}
                {showSuccess && (
                  <div className="text-center space-y-6 animate-in fade-in zoom-in-95 duration-700">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 scale-110">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-[28px] font-bold text-gray-900">Request Received</h3>
                      <p className="text-gray-500 text-[16px] max-w-xs mx-auto leading-relaxed">
                        Thank you for reaching out. We'll be in touch shortly to confirm your clinical session.
                      </p>
                    </div>
                    <div className="pt-6">
                      <button
                        onClick={handleCloseSuccess}
                        className="bg-primary text-white px-10 py-3 rounded-full font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                      >
                        Got it
                      </button>
                    </div>
                  </div>
                )}

                {!showSuccess && (
                  <>
                    {/* Header - Sticky on Mobile */}
                    <div className="sticky top-0 bg-white z-50 pt-6 pb-4 -mx-6 px-6 flex items-center justify-between md:static md:p-0 md:m-0 md:block border-b border-gray-100 sm:border-none">
                      <h3 className="text-[22px] font-semibold text-gray-900 leading-tight">Book an Appointment</h3>
                      <button
                        onClick={onClose}
                        className="md:hidden p-2 -mr-2 text-gray-400 hover:text-gray-600 transition-all"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className={`transition-all duration-700 ${isSubmitted ? 'opacity-0 -translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
                      <p className="text-gray-500 text-[14px] mt-4 mb-6">
                        Fill in your details and we'll confirm your session.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className={`space-y-6 transition-all duration-700 ${isSubmitted ? 'opacity-0 translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-gray-700 uppercase tracking-wider">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className={`w-full px-4 py-[10px] rounded-2xl text-[14px] bg-gray-50 border outline-none focus:bg-white transition-all ${errors.name ? 'border-red-400' : 'border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10'}`}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2 relative" ref={typeRef}>
                          <label className="text-[12px] font-medium text-gray-700 uppercase tracking-wider">Consultation Type</label>
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() => {
                                setShowTypeDropdown(!showTypeDropdown);
                                setShowCalendar(false);
                              }}
                              className="w-full text-left pl-4 pr-10 py-[10px] rounded-2xl text-[14px] bg-gray-50 border border-gray-200 outline-none focus:bg-white focus:border-primary transition-all cursor-pointer appearance-none"
                            >
                              {formData.consultationType}
                            </button>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                              <svg className={`w-5 h-5 transition-transform duration-300 ${showTypeDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>

                            {showTypeDropdown && (
                              <div className="absolute top-full left-0 right-0 mt-2  bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[24px] z-[120]  overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                                {['Online Consultation', 'In-Person (at Clinic)'].map((option) => (
                                  <button
                                    key={option}
                                    type="button"
                                    onClick={() => { setFormData(prev => ({ ...prev, consultationType: option })); setShowTypeDropdown(false); }}
                                    className={`w-full text-left px-5 py-3 text-[14px] transition-colors ${formData.consultationType === option ? 'bg-primary/5 text-primary font-semibold border-l-4 border-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent'}`}
                                  >
                                    {option}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="space-y-2 relative" ref={calendarRef}>
                          <label className="text-[12px] font-medium text-gray-700 uppercase tracking-wider">Preferred Date</label>
                          <div className="relative">
                            <input
                              type="text"
                              readOnly
                              placeholder="Select Date"
                              value={formData.preferredDate}
                              onClick={() => { setShowCalendar(!showCalendar); setShowTypeDropdown(false); }}
                              className="w-full px-4 py-[10px] rounded-2xl text-[14px] bg-gray-50 border border-gray-200 outline-none focus:bg-white focus:border-primary transition-all cursor-pointer"
                            />
                            <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>

                            {showCalendar && (
                              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[24px] z-[150] px-5 pt-3 pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                <ClinicCalendar
                                  selectedDate={formData.preferredDate}
                                  onSelect={(date) => { setFormData(prev => ({ ...prev, preferredDate: date })); setShowCalendar(false); }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-gray-700 uppercase tracking-wider">Preferred Time Slot</label>
                        <div className="relative flex gap-3 p-[6px] bg-gray-100/50 rounded-xl overflow-hidden">
                          <div
                            className="absolute h-[calc(100%-12px)] top-[6px] transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) bg-primary rounded-lg z-0"
                            style={{
                              width: 'calc((100% - 36px) / 3)',
                              left: `calc(6px + (${['Morning', 'Afternoon', 'Evening'].indexOf(formData.preferredTime)} * 100% / 3))`,
                            }}
                          />
                          {['Morning', 'Afternoon', 'Evening'].map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, preferredTime: slot }))}
                              className={`relative z-10 flex-1 px-2 sm:px-6 py-[10px] rounded-lg cursor-pointer text-[14px] font-medium transition-colors duration-300 ${formData.preferredTime === slot ? 'text-white' : 'text-gray-500 hover:text-primary'}`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[12px]  font-medium text-gray-700 uppercase tracking-wider">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="1234567890"
                            className={`w-full px-4 py-[10px] rounded-2xl text-[14px] bg-gray-50 border outline-none focus:bg-white transition-all ${errors.phone ? 'border-red-400' : 'border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10'}`}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[12px] font-medium text-gray-700 uppercase tracking-wider">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@email.com"
                            className={`w-full px-4 py-[10px] rounded-2xl text-[14px] bg-gray-50 border outline-none focus:bg-white transition-all ${errors.email ? 'border-red-400' : 'border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10'}`}
                          />
                        </div>
                      </div>

                      <div className="pb-10 lg:pb-0">
                        <button
                          type="submit"
                          disabled={isSubmitting || isSubmitted}
                          className={`w-full py-[10px] px-[24px] rounded-full font-semibold text-[15px] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3
                            ${isSubmitting || isSubmitted
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                              : 'bg-primary text-white hover:bg-primary-dark hover:-translate-y-1 shadow-primary/20'}`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span>Booking Your Session...</span>
                            </>
                          ) : isSubmitted ? (
                            <span className="text-green-600 font-bold flex items-center gap-2">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                              Form Submitted Successfully
                            </span>
                          ) : 'Confirm Appointment Request'}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ClinicCalendar = ({ onSelect, selectedDate }) => {
  const [viewDate, setViewDate] = useState(new Date());
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const prevMonth = (e) => { e.preventDefault(); setViewDate(new Date(year, month - 1, 1)); };
  const nextMonth = (e) => { e.preventDefault(); setViewDate(new Date(year, month + 1, 1)); };

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const formatDate = (day) => {
    const d = day < 10 ? `0${day}` : day;
    const m = (month + 1) < 10 ? `0${month + 1}` : month + 1;
    return `${d}/${m}/${year}`;
  };

  const isPastDate = (day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateToCheck = new Date(year, month, day);
    return dateToCheck < today;
  };

  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };

  return (
    <div className="w-full text-gray-800">
      <div className="flex items-center justify-between mb-3 px-1">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-primary/5 rounded-full transition-colors cursor-pointer text-primary"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div className="flex items-center gap-3 relative">
          {/* Custom Month Dropdown */}
          <div className="relative">
            <button
              onClick={() => { setShowMonthDropdown(!showMonthDropdown); setShowYearDropdown(false); }}
              className={`font-semibold text-[15px] transition-colors cursor-pointer flex items-center gap-1 ${showMonthDropdown ? 'text-primary' : 'text-gray-900'}`}
            >
              {monthNames[month]}
            </button>

            {showMonthDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-2xl w-32 max-h-48 overflow-y-auto no-scrollbar z-[150] animate-in fade-in zoom-in-95 duration-200">
                {monthNames.map((name, i) => (
                  <button
                    key={name}
                    onClick={() => { setViewDate(new Date(year, i, 1)); setShowMonthDropdown(false); }}
                    className={`w-full text-left px-4 py-2 text-[13px] hover:bg-primary/5 transition-colors ${month === i ? 'text-primary font-bold bg-primary/5' : 'text-gray-600'}`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Custom Year Dropdown */}
          <div className="relative">
            <button
              onClick={() => { setShowYearDropdown(!showYearDropdown); setShowMonthDropdown(false); }}
              className={`font-semibold text-[15px] transition-colors cursor-pointer ${showYearDropdown ? 'text-primary' : 'text-gray-900'}`}
            >
              {year}
            </button>

            {showYearDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-2xl w-24 max-h-48 overflow-y-auto no-scrollbar z-[150] animate-in fade-in zoom-in-95 duration-200">
                {Array.from({ length: 11 }, (_, i) => new Date().getFullYear() + i).map(y => (
                  <button
                    key={y}
                    onClick={() => { setViewDate(new Date(y, month, 1)); setShowYearDropdown(false); }}
                    className={`w-full text-left px-4 py-2 text-[13px] hover:bg-primary/5 transition-colors ${year === y ? 'text-primary font-bold bg-primary/5' : 'text-gray-600'}`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button onClick={nextMonth} className="p-2 hover:bg-primary/5 rounded-full transition-colors cursor-pointer text-primary">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Close Dropdowns on Click Outside (Overlay) */}
      {(showMonthDropdown || showYearDropdown) && (
        <div className="fixed inset-0 z-[140]" onClick={() => { setShowMonthDropdown(false); setShowYearDropdown(false); }} />
      )}

      <div className="grid grid-cols-7 gap-0 text-[10px] text-gray-400 uppercase font-bold tracking-wider text-center mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => <div key={d} className="py-1">{d}</div>)}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => (
          <div key={i} className="aspect-square flex items-center justify-center">
            {day && (
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); onSelect(formatDate(day)); }}
                className={`w-full h-full flex flex-col items-center justify-center rounded-xl text-[12px] font-medium transition-all relative
                  ${selectedDate === formatDate(day)
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 z-10'
                    : 'hover:bg-primary/10 hover:text-primary text-gray-700 cursor-pointer'}
                  ${isToday(day) && selectedDate !== formatDate(day) ? 'after:content-[""] after:absolute after:bottom-1.5 after:w-1 after:h-1 after:bg-primary after:rounded-full' : ''}
                `}
              >
                {day}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentModal;
