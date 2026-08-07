import React, { useState, useRef, useEffect } from 'react';

const mythsFacts = [
  { myth: 'Only mentally weak people consult to Psychiatrist/Psychologist.', fact: 'Realising the need for help and seeking support is a sign of strength.' },
  { myth: 'You are the one to blame for the mental struggles you go through.', fact: 'Mental health issues are complex and resolving them by healing is more important.' },
  { myth: 'Talking about suicide to someone will make them likely to go through with it.', fact: 'Having an open communication helps them to open up and start a conversation.' },
  { myth: 'Mental health problems are rare.', fact: 'Mental health problems are so common.' },
  { myth: 'Mental health issues are not real issues.', fact: 'Mental struggles are as real as physical health issues. Both are equally important.' },
  { myth: 'Mentally ill people are violent and aggressive.', fact: 'Only 1 in 100 patients might become harmful if they are untreated.' },
  { myth: 'Psychiatric treatments should not be taken for more than few days.', fact: 'Duration of treatment depends on illness severity; follow your doctor’s advice.' },
  { myth: 'If you take Psychiatric medicines, you will become dependent on it for life.', fact: 'Majority of patients are able to stop treatment if they follow their doctor\'s advice.' }
];

const MythsFacts = () => {
  const [visibleCount, setVisibleCount] = useState(4);
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

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <section id="myths-facts" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-6">
          <h2 className="text-[28px] lg:text-[32px] font-medium mb-3 text-gray-900">
            Myths vs <span className="text-primary">Facts</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Breaking barriers and clarifying common misconceptions about mental healthcare.
          </p>
        </div>

        {/* Desktop View — Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 px-12">
          {mythsFacts.slice(0, visibleCount).map((item, idx) => (
            <div key={idx} className="flex flex-col border border-gray-100 rounded-[30px] overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="bg-red-50 p-8 flex gap-4 flex-1">
                <div className="text-red-500 font-bold text-[12px] mt-1 shrink-0">Myths</div>
                <p className="text-gray-900 font-medium text-[16px] leading-snug">{item.myth}</p>
              </div>
              <div className="bg-green-50/50 p-8 flex gap-4 border-t border-gray-100 flex-1">
                <div className="text-green-600 font-bold text-[12px] mt-1 shrink-0">Facts</div>
                <p className="text-gray-700 leading-relaxed text-[16px]">{item.fact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View — Continuous Infinite Scroll (Google Review Style) */}
        <div
          className="lg:hidden w-full overflow-x-hidden"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-4 px-6 overflow-x-hidden select-none pb-8"
          >
            {/* Duplicating array for seamless loop */}
            {[...mythsFacts, ...mythsFacts].map((item, idx) => (
              <div key={idx} className="w-[300px] shrink-0">
                <div className="border border-gray-100 rounded-[32px] overflow-hidden bg-white shadow-xl shadow-black/5 min-h-[340px] flex flex-col h-full">
                  <div className="bg-red-50 p-7 flex flex-col gap-3 flex-1">
                    <div className="text-red-500 font-bold text-[11px] uppercase tracking-widest">The Myth</div>
                    <p className="text-gray-900 font-medium text-[16px] leading-tight">{item.myth}</p>
                  </div>
                  <div className="bg-green-50/50 p-7 flex flex-col gap-3 flex-1 border-t border-gray-100">
                    <div className="text-green-600 font-bold text-[11px] uppercase tracking-widest">The Fact</div>
                    <p className="text-gray-700 leading-relaxed text-[15px]">{item.fact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More — Desktop Only */}
        <div className="hidden lg:block">
          {visibleCount < mythsFacts.length && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="re-btn-primary px-10 py-[18px] cursor-pointer text-sm font-semibold tracking-[0.1em] transition-all duration-300 transform"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MythsFacts;
