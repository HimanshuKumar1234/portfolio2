import { useState, useEffect, useRef, useCallback } from 'react';
import './Hero.css';

const FIRST_NAME = "HIMANSHU";
const LAST_NAME = "KUMAR";

export default function Hero() {
    const [loaded, setLoaded] = useState(false);
    const [lettersVisible, setLettersVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const heroRef = useRef(null);
    const containerRef = useRef(null);
    const revealRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        const letterTimer = setTimeout(() => setLettersVisible(true), 300);
        return () => { clearTimeout(timer); clearTimeout(letterTimer); };
    }, []);

    // Parallax on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;
            const y = window.scrollY;
            heroRef.current.style.setProperty('--scroll-y', `${y * 0.15}px`);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mouse-following spotlight reveal + 3D tilt on image
    const handleMouseMove = useCallback((e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        if (revealRef.current) {
            revealRef.current.style.maskImage = `radial-gradient(circle 160px at ${x}px ${y}px, #000 0%, #000 55%, transparent 100%)`;
            revealRef.current.style.webkitMaskImage = `radial-gradient(circle 160px at ${x}px ${y}px, #000 0%, #000 55%, transparent 100%)`;
        }

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        containerRef.current.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }, []);

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        if (revealRef.current) {
            revealRef.current.style.maskImage = '';
            revealRef.current.style.webkitMaskImage = '';
        }
        if (containerRef.current) {
            containerRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }
    }, []);

    const renderLetters = (text, isAccent = false, offset = 0) => {
        return text.split('').map((char, i) => (
            <span
                key={i}
                className={`letter ${char === ' ' ? 'space' : ''} ${lettersVisible ? 'visible' : ''} ${isAccent ? 'letter-gradient' : ''}`}
                style={{ transitionDelay: `${(i + offset) * 0.05}s` }}
            >
                {char}
            </span>
        ));
    };

    return (
        <section className="hero noise-bg" id="hero" ref={heroRef}>
            {/* Background animated gradient */}
            <div className="hero-bg-gradient" />

            <div className="hero-inner">
                {/* ---- Text side ---- */}
                <div className={`hero-content ${loaded ? 'loaded' : ''}`}>
                    <h1 className="hero-name">
                        <span className="hero-name-line hero-accent">
                            {renderLetters(FIRST_NAME, true)}
                        </span>
                        <span className="hero-name-line">
                            {renderLetters(LAST_NAME, false, FIRST_NAME.length)}
                        </span>
                    </h1>

                    <p className={`hero-tagline ${loaded ? 'visible' : ''}`}>
                        Full Stack Engineer <span className="tagline-sep">|</span> AI Systems <span className="tagline-sep">|</span> Problem Solver
                    </p>

                    <div className={`hero-cta-row ${loaded ? 'visible' : ''}`}>
                        <a href="#projects" className="hero-btn primary">View Projects</a>
                        <a href="#contact" className="hero-btn outline">Get in Touch</a>
                    </div>
                </div>

                {/* ---- Image side ---- */}
                <div className="hero-image-side">
                    {/* Persistent glow orbs behind image */}
                    <div className="hero-orb hero-orb-1" />
                    <div className="hero-orb hero-orb-2" />
                    <div className="hero-orb hero-orb-3" />

                    <div
                        className={`hero-image-wrapper ${isHovered ? 'hovered' : ''}`}
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Base image — desaturated/dark */}
                        <img
                            src="/hero-portrait.webp"
                            alt=""
                            className="hero-img-base"
                            loading="eager"
                        />
                        {/* Reveal image — full-color, masked by cursor */}
                        <img
                            src="/about-portrait-2.jpg"
                            alt="Himanshu Kumar"
                            className="hero-img-reveal"
                            ref={revealRef}
                            loading="eager"
                        />

                        {/* Persistent shimmer sweep */}
                        <div className="hero-shimmer" />

                        {/* Scanline on hover */}
                        <div className="hero-scanline" />

                        {/* Corner bracket accents on hover */}
                        <div className="hero-corner hero-corner-tl" />
                        <div className="hero-corner hero-corner-br" />

                        {/* Hover hint */}
                        <div className={`hero-hint ${isHovered ? 'hidden' : ''}`}>
                            <span className="hero-hint-dot" />
                            <span>Hover to reveal</span>
                        </div>
                    </div>

                    {/* Status badge */}
                    <div className="hero-badge">
                        <span className="hero-badge-dot" />
                        Available for hire
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero-scroll">
                <span>Scroll</span>
                <div className="hero-scroll-line" />
            </div>
        </section>
    );
}
