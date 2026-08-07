import React, { useState, useRef, useEffect } from 'react';

const reviews = [
  { name: 'Achal Pithwa', initials: 'AP', color: '#976147', text: 'Dr. Savan Sapovadiya is very generous and supportive. He will listen to you and address your complaints carefully.', date: 'Google review' },
  { name: 'Jenil Bariya', initials: 'JB', color: '#7a4f3a', text: 'Very good treatment…Both doctors are good and humble must visit You have need a right treatment?go and visit MindCare.', date: 'Google review' },
  { name: 'Arpit Sahu', initials: 'AS', color: '#b4856b', text: 'Firstly the place where dr give treatment is beautiful and filled with positive vibes .Doctor was very friendly.', date: 'Google review' },
  { name: 'Mitali Patel', initials: 'MP', color: '#1a0c06', text: 'Both Dr.Parth and Dr.Savan are humble and calm also dedicated to treat root cause of mental health problem.', date: 'Google review' },
  { name: 'Hetavi Desai', initials: 'HD', color: '#c9956e', text: 'Both the psychiatrist are very good humans at first...they are good listeners, and they treat efficiently and give proper time to their each and every patient.', date: 'Google review' }
];

const GoogleReviews = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  // Auto-scroll logic using requestAnimationFrame for smoothness and seamless looping
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const step = () => {
      if (!isPaused && !isDragging) {
        scrollContainer.scrollLeft += 0.8; // Adjust speed here

        // Reset to start when we scroll past half the content for seamless loop
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeftState - walk;

    // Handle seamless loop during manual drag
    const half = scrollRef.current.scrollWidth / 2;
    if (scrollRef.current.scrollLeft >= half) {
      scrollRef.current.scrollLeft -= half;
      setStartX(x);
      setScrollLeftState(scrollRef.current.scrollLeft);
    } else if (scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollLeft += half;
      setStartX(x);
      setScrollLeftState(scrollRef.current.scrollLeft);
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftState - walk;

    const half = scrollRef.current.scrollWidth / 2;
    if (scrollRef.current.scrollLeft >= half) {
      scrollRef.current.scrollLeft -= half;
      setStartX(x);
      setScrollLeftState(scrollRef.current.scrollLeft);
    } else if (scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollLeft += half;
      setStartX(x);
      setScrollLeftState(scrollRef.current.scrollLeft);
    }
  };

  const handleCardMouseEnter = (e) => {
    const card = e.currentTarget;
    const container = scrollRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    const containerCenter = containerRect.left + containerRect.width / 2;
    const cardCenter = cardRect.left + cardRect.width / 2;

    // Threshold based on card width (approx 400px). 
    // If card center is within 450px of container center, it targets the middle most cards.
    const threshold = window.innerWidth >= 768 ? 450 : 250;

    if (Math.abs(cardCenter - containerCenter) < threshold) {
      setIsPaused(true);
    }
  };

  const handleCardMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section id="reviews" className="py-20 md:py-20 bg-[#faf7f5] relative overflow-hidden flex flex-col items-center">

      {/* Warm Background Accent */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#976147]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full mb-16">
        <h2 className="text-[28px] lg:text-[32px] text-gray-900 mb-3 font-medium">
          Loved by Our <span className="text-[#976147]">Community</span>
        </h2>
        <p className="text-gray-500 text-[16px] max-w-xl mx-auto">
          Discover why hundreds of patients trust MindCare for their journey to mental wellness.
        </p>
      </div>

      {/* Draggable Scroll Container */}
      <div
        ref={scrollRef}
        className="relative w-full max-w-[100vw] overflow-x-hidden border-x-0 flex pb-12 pt-4 cursor-default"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* The scrolling track */}
        <div className="flex gap-6 pl-6 w-max overflow-x-visible select-none">
          {/* We triple the reviews to ensure we always have enough content to fill the screen during resets */}
          {[...reviews, ...reviews, ...reviews].map((rev, idx) => (
            <div
              key={idx}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
              className="w-[320px] md:w-[400px] shrink-0 bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[30px] p-8 hover:shadow-[0_20px_50px_rgba(151,97,71,0.12)] hover:-translate-y-2 transition-all duration-200 cursor-pointer relative flex flex-col"
            >
              {/* Header: User & Stars */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-md"
                    style={{ backgroundColor: rev.color }}
                  >
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[14px] leading-tight">{rev.name}</h4>
                    <p className="text-gray-400 text-[12px] font-medium mt-0.5">{rev.date}</p>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>


              <p className="text-gray-600 leading-relaxed text-[14px]">
                {rev.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
