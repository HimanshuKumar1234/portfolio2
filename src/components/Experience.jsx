import { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from '../hooks/useInView';
import './Experience.css';

const EXPERIENCES = [
    {
        company: 'Physics Wallah',
        role: 'Software Development Intern',
        date: 'Apr 2025 — Jun 2025',
        current: false,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="exp-icon">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        description: [
            'Developed and refined responsive UI components using React and Tailwind for internal dashboards.',
            'Integrated frontend with Node.js & Express APIs for dynamic content rendering.',
            'Optimized database queries reducing response times by 40%',
            'Collaborated with the engineering team on debugging, testing, and improving user flows',
        ],
        tech: ['Node.js', 'React', 'MongoDB', 'Redis', 'AWS'],
    },
    {
        company: 'ENTNT',
        role: 'Frontend Developer Intern',
        date: 'Nov 2024 — Dec 2024',
        current: false,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="exp-icon">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
            </svg>
        ),
        description: [
            'Built responsive and scalable UI using React, improving performance and cross-device compatibility.',
            'Implemented interactive components and optimized workflows to enhance overall UX.',
            'Led frontend architecture migration improving performance by 60%',
            'Collaborated with other developers, did code reviews',
        ],
        tech: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    },
];

const STATS = [
    { value: 5, suffix: '+', label: 'Months of Experience' },
    { value: 1000, suffix: 'K+', label: 'Users Impacted' },
    { value: 30, suffix: '%', label: 'Faster Queries' },
    { value: 50, suffix: '+', label: 'Clients Served' },
];

/* ---- Animated counter ---- */
function AnimatedStat({ stat, isInView, delay }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const duration = 1800;
        const steps = 40;
        const increment = stat.value / steps;
        let current = 0;
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                    setCount(stat.value);
                    clearInterval(interval);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);
        }, delay);
        return () => clearTimeout(timer);
    }, [isInView, stat.value, delay]);

    return (
        <div className="exp-stat" style={{ transitionDelay: `${delay}ms` }}>
            <div className="exp-stat-value">
                {count}
                <span className="exp-stat-suffix">{stat.suffix}</span>
            </div>
            <div className="exp-stat-label">{stat.label}</div>
        </div>
    );
}

/* ---- Cursor glow card ---- */
function GlowCard({ children, className = '' }) {
    const cardRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--glow-x', `${x}px`);
        card.style.setProperty('--glow-y', `${y}px`);
    }, []);

    return (
        <div
            ref={cardRef}
            className={`exp-card glow-card ${className}`}
            onMouseMove={handleMouseMove}
        >
            <div className="glow-card-spotlight" />
            {children}
        </div>
    );
}

/* ---- Timeline item ---- */
function TimelineItem({ exp, index }) {
    const [ref, isInView] = useInView({ threshold: 0.2 });
    const side = index % 2 === 0 ? 'left' : 'right';

    return (
        <div
            ref={ref}
            className={`timeline-item timeline-${side} ${isInView ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.18}s` }}
        >
            {/* Connector dot */}
            <div className="timeline-dot">
                <div className="timeline-dot-ring" />
                {exp.current && <div className="timeline-dot-pulse" />}
            </div>

            <GlowCard>
                {/* Header */}
                <div className="exp-card-header">
                    <div className="exp-card-icon-wrap">
                        {exp.icon}
                    </div>
                    <div className="exp-card-meta">
                        <div className="exp-card-date">
                            {exp.date}
                            {exp.current && (
                                <span className="exp-current-badge">
                                    <span className="exp-current-dot" />
                                    Active
                                </span>
                            )}
                        </div>
                        <h3 className="exp-card-company">{exp.company}</h3>
                        <div className="exp-card-role">{exp.role}</div>
                    </div>
                </div>

                {/* Description */}
                <ul className="exp-card-desc">
                    {exp.description.map((item, i) => (
                        <li
                            key={i}
                            className="exp-desc-item"
                            style={{ transitionDelay: `${(index * 0.18) + (i * 0.08)}s` }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Tech badges */}
                <div className="exp-badges">
                    {exp.tech.map((t, i) => (
                        <span
                            className="exp-badge"
                            key={i}
                            style={{ transitionDelay: `${(index * 0.18) + 0.3 + (i * 0.05)}s` }}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </GlowCard>
        </div>
    );
}

/* ---- Main section ---- */
export default function Experience() {
    const [headerRef, headerInView] = useInView({ threshold: 0.3 });
    const [statsRef, statsInView] = useInView({ threshold: 0.3 });

    return (
        <section className="experience noise-bg" id="experience">
            {/* Floating orbs */}
            <div className="exp-orb exp-orb-1" />
            <div className="exp-orb exp-orb-2" />
            <div className="exp-orb exp-orb-3" />

            {/* Header */}
            <div
                ref={headerRef}
                className={`experience-header section-reveal ${headerInView ? 'visible' : ''}`}
            >
                <div className="experience-label">— Experience</div>
                <h2 className="experience-title">
                    Where I've <span className="exp-title-accent">Delivered</span>
                </h2>
                <p className="experience-subtitle">
                    Building products that matter, at scale.
                </p>
            </div>

            {/* Stats row */}
            <div
                ref={statsRef}
                className={`exp-stats-row ${statsInView ? 'visible' : ''}`}
            >
                {STATS.map((stat, i) => (
                    <AnimatedStat
                        key={i}
                        stat={stat}
                        isInView={statsInView}
                        delay={i * 150}
                    />
                ))}
            </div>

            {/* Timeline */}
            <div className="timeline">
                <div className="timeline-line" />
                {EXPERIENCES.map((exp, i) => (
                    <TimelineItem key={i} exp={exp} index={i} />
                ))}
            </div>
        </section>
    );
}
