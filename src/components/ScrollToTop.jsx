import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    // Scroll to top on route change
    useEffect(() => {
        if (!window.location.hash) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
        } else {
            setTimeout(() => {
                const el = document.querySelector(window.location.hash);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    }, [pathname]);

    // Show button when page is scrolled down, but hide it at the footer
    useEffect(() => {
        const toggleVisibility = () => {
            // Hide button if any modal or menu is open (body is scroll-locked)
            if (document.body.classList.contains('overflow-hidden')) {
                setIsVisible(false);
                return;
            }

            const footer = document.querySelector('footer');
            let isNearFooter = false;

            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                // Hide button when footer top enters the viewport
                if (footerRect.top < window.innerHeight - 20) {
                    isNearFooter = true;
                }
            }

            if (window.scrollY > 300 && !isNearFooter) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        // Call once on mount in case we are already scrolled
        toggleVisibility();

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [pathname]); // Re-run track on pathname change to ensure footer selection works

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top fixed bottom-6 right-6 z-[100] p-3.5 rounded-full bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group border-2 border-white/10 cursor-pointer animate-fadeInUp"
                    aria-label="Scroll to top"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 15l7-7 7 7"
                        />
                    </svg>

                    {/* Industrial micro-glow effect */}
                    <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
