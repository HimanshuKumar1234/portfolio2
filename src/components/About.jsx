import { useEffect, useRef, useState, useCallback } from 'react';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import './About.css';

const STATS = [
    { value: 700, suffix: '+', label: 'DSA Problems', icon: '⚡' },
    { value: 1681, suffix: '', label: 'CodeChef Rating', icon: '🏆' },
    { value: 1406, suffix: '', label: 'CodeForces Rating', icon: '🎯' },
    { value: 0, suffix: '', label: 'Microsoft & Google Final Round', isText: true, text: '✓', icon: '🚀' },
];

const ABOUT_TEXT = `I'm a full-stack engineer driven by an obsession with building systems that scale. From architecting AI-powered SaaS platforms to conquering 700+ DSA challenges, I operate at the intersection of deep technical mastery and relentless problem-solving. My engineering philosophy is simple: write clean, performant code that solves real problems. I've been through rigorous selection rounds at Microsoft and Google, each sharpening my ability to think under pressure and deliver at the highest level.`;

function StatCounter({ value, suffix, label, isText, text, icon, isInView, index }) {
    const [count, done] = useCountUp(value, 2000, true, isInView);

    if (isText) {
        return (
            <div className="stat-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="stat-icon">{icon}</div>
                <div className={`stat-value ${isInView ? 'glow-done' : ''}`}>{text}</div>
                <div className="stat-label">{label}</div>
            </div>
        );
    }

    return (
        <div className="stat-card" style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="stat-icon">{icon}</div>
            <div className={`stat-value ${done ? 'glow-done' : ''}`}>
                {isInView ? count : 0}{suffix}
            </div>
            <div className="stat-label">{label}</div>
        </div>
    );
}

export default function About() {
    const [sectionRef, isInView] = useInView({ threshold: 0.15 });
    const [textRef, textInView] = useInView({ threshold: 0.3 });
    const [wordRevealDone, setWordRevealDone] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const imageContainerRef = useRef(null);
    const revealRef = useRef(null);

    const words = ABOUT_TEXT.split(' ');

    useEffect(() => {
        if (textInView) {
            const timer = setTimeout(() => setWordRevealDone(true), words.length * 30 + 500);
            return () => clearTimeout(timer);
        }
    }, [textInView]);

    // Mouse-following spotlight reveal + 3D tilt
    const handleMouseMove = useCallback((e) => {
        if (!imageContainerRef.current) return;
        const rect = imageContainerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Spotlight mask on the reveal image
        if (revealRef.current) {
            revealRef.current.style.maskImage = `radial-gradient(circle 150px at ${x}px ${y}px, #000 0%, #000 55%, transparent 100%)`;
            revealRef.current.style.webkitMaskImage = `radial-gradient(circle 150px at ${x}px ${y}px, #000 0%, #000 55%, transparent 100%)`;
        }

        // 3D tilt effect
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        imageContainerRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }, []);

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        if (revealRef.current) {
            revealRef.current.style.maskImage = '';
            revealRef.current.style.webkitMaskImage = '';
        }
        if (imageContainerRef.current) {
            imageContainerRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }
    }, []);

    return (
        <section className="about noise-bg" id="about" ref={sectionRef}>
            {/* Animated background elements */}
            <div className="about-bg-glow about-bg-glow-1" />
            <div className="about-bg-glow about-bg-glow-2" />

            {/* Floating decorations */}
            <div className="about-float-shape about-float-1" />
            <div className="about-float-shape about-float-2" />
            <div className="about-float-shape about-float-3" />

            <div className="about-inner">
                {/* Image Side */}
                <div className={`about-image-side section-reveal ${isInView ? 'visible' : ''}`}>
                    <div
                        className={`about-image-container ${isHovered ? 'hovered' : ''}`}
                        ref={imageContainerRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Base layer — desaturated/darkened, always visible */}
                        <img
                            src="/about-portrait.webp"
                            alt=""
                            className="about-image-base"
                            loading="lazy"
                            onError={(e) => {
                                e.target.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)';
                                e.target.style.minHeight = '100%';
                            }}
                        />

                        {/* Reveal layer — full-color, masked by cursor spotlight */}
                        <img
                            src="/about-portrait-2.jpg"
                            alt="Himanshu Kumar"
                            className="about-image-reveal"
                            ref={revealRef}
                            loading="lazy"
                            onError={(e) => {
                                e.target.style.background = 'linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%)';
                                e.target.style.minHeight = '100%';
                            }}
                        />

                        {/* Grid overlay on hover */}
                        <div className="about-grid-overlay" />

                        {/* Scan line animation */}
                        <div className="about-scanline" />

                        {/* Hover hint */}
                        <div className={`about-reveal-hint ${isHovered ? 'hidden' : ''}`}>
                            <span className="hint-dot" />
                            <span>Hover to discover</span>
                        </div>

                        {/* Corner accents */}
                        <div className="about-corner about-corner-tl" />
                        <div className="about-corner about-corner-br" />
                    </div>

                    {/* Floating status badge */}
                    <div className="about-status-badge">
                        <span className="status-dot" />
                        Available for hire
                    </div>
                </div>

                {/* Text Side */}
                <div className={`about-text-side section-reveal ${isInView ? 'visible' : ''}`} ref={textRef}>
                    <div className="about-label">
                        <span className="label-line" />
                        About Me
                    </div>
                    <h2 className="about-heading">
                        Engineering at the<br />
                        <span className="about-heading-accent">Edge of Performance</span>
                    </h2>
                    <p className="about-paragraph">
                        {words.map((word, i) => (
                            <span
                                key={i}
                                className={`word ${textInView || wordRevealDone ? 'visible' : ''}`}
                                style={{ transitionDelay: wordRevealDone ? '0s' : `${i * 0.03}s` }}
                            >
                                {word}
                            </span>
                        ))}
                    </p>

                    <div className="about-stats">
                        {STATS.map((stat, i) => (
                            <StatCounter key={i} {...stat} isInView={isInView} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
