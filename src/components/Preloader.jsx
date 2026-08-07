import React, { useState, useEffect, useRef } from 'react';
import logoImg from '../assets/ChatGPT Image Aug 4, 2026, 10_30_58 PM.png';

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [logoLoaded, setLogoLoaded] = useState(false);
    const isPageLoadedRef = useRef(false);

    useEffect(() => {
        // Monitor page load
        const handleLoad = () => {
            isPageLoadedRef.current = true;
            // Wait a bit to ensure the logo pulse and fade are seen
            setTimeout(() => {
                setFadeOut(true);
                setTimeout(() => setIsVisible(false), 1000);
            }, 1800);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        // Trigger logo entry fade-in
        const timer = setTimeout(() => setLogoLoaded(true), 200);

        return () => {
            window.removeEventListener('load', handleLoad);
            clearTimeout(timer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#fcf8f6] transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
            <div className="relative flex flex-col items-center justify-center">
                <div
                    className={`transition-all duration-1000 ease-out transform ${logoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`}
                >
                    <div className="animate-logo-pulse justify-center items-center relative">
                        <img
                            src={logoImg}
                            alt="Logo"
                            className="w-[120px] md:w-[160px] h-auto object-contain select-none pointer-events-none"
                        />
                    </div>
                </div>


                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes logo-pulse {
                        0%, 100% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.15);
                        }
                    }
                    .animate-logo-pulse {
                        animation: logo-pulse 3s infinite ease-in-out;
                    }
                `}} />
            </div>
        </div>
    );
};

export default Preloader;
