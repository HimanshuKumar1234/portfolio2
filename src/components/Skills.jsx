import { useState, useRef, useCallback } from 'react';
import { useInView } from '../hooks/useInView';
import './Skills.css';

const SKILL_CATEGORIES = [
    {
        title: 'Languages',
        accent: 'cyan',
        skills: [
            { icon: '⚡', name: 'JavaScript', detail: 'ES2024+', level: 95 },
            { icon: '🔷', name: 'TypeScript', detail: 'Advanced', level: 90 },
            { icon: '🐍', name: 'Python', detail: 'ML & Backend', level: 85 },
            { icon: '☕', name: 'Java', detail: 'DSA & Systems', level: 80 },
            { icon: '⚙️', name: 'C++', detail: 'Competitive', level: 75 },
            { icon: '🗄️', name: 'SQL', detail: 'Advanced Queries', level: 88 },
        ],
    },
    {
        title: 'Backend & Infra',
        accent: 'purple',
        skills: [
            { icon: '🟢', name: 'Node.js', detail: 'Microservices', level: 92 },
            { icon: '🚂', name: 'Express', detail: 'REST APIs', level: 90 },
            { icon: '🍃', name: 'MongoDB', detail: 'Aggregation', level: 88 },
            { icon: '🐘', name: 'PostgreSQL', detail: 'Schema Design', level: 82 },
            { icon: '🔴', name: 'Redis', detail: 'Caching', level: 78 },
            { icon: '☁️', name: 'AWS', detail: 'EC2, S3, Lambda', level: 76 },
        ],
    },
    {
        title: 'System Design',
        accent: 'mixed',
        skills: [
            { icon: '🏗️', name: 'HLD', detail: 'Scalable Systems', level: 85 },
            { icon: '🔩', name: 'LLD', detail: 'OOP Patterns', level: 82 },
            { icon: '📡', name: 'API Design', detail: 'REST & GraphQL', level: 88 },
            { icon: '⚖️', name: 'Load Balancing', detail: 'Distribution', level: 75 },
            { icon: '💾', name: 'Caching', detail: 'Strategy', level: 80 },
            { icon: '📨', name: 'Message Queues', detail: 'Pub/Sub', level: 77 },
        ],
    },
    {
        title: 'AI / LLM',
        accent: 'cyan',
        skills: [
            { icon: '🤖', name: 'OpenAI', detail: 'GPT Integration', level: 85 },
            { icon: '🧠', name: 'LangChain', detail: 'Chaining', level: 78 },
            { icon: '📊', name: 'ML Basics', detail: 'Scikit-learn', level: 72 },
            { icon: '🎯', name: 'Prompt Eng.', detail: 'Optimization', level: 88 },
            { icon: '🔍', name: 'RAG', detail: 'Retrieval Aug.', level: 80 },
        ],
    },
];

/* ---- Skill card with cursor glow ---- */
function SkillCard({ skill, index, isVisible, categoryAccent }) {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback((e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    }, []);

    return (
        <div
            ref={cardRef}
            className={`skill-card skill-card--${categoryAccent} ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.06}s` }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="skill-card-glow" />
            <span className="skill-icon">{skill.icon}</span>
            <div className="skill-name">{skill.name}</div>

            {/* Proficiency ring */}
            <div className="skill-ring-wrap">
                <svg className="skill-ring" viewBox="0 0 36 36">
                    <circle
                        className="skill-ring-bg"
                        cx="18" cy="18" r="15.9"
                        fill="none"
                        strokeWidth="2"
                    />
                    <circle
                        className={`skill-ring-fill skill-ring-fill--${categoryAccent}`}
                        cx="18" cy="18" r="15.9"
                        fill="none"
                        strokeWidth="2.5"
                        strokeDasharray={`${isVisible ? skill.level : 0} 100`}
                        strokeLinecap="round"
                    />
                </svg>
                <span className="skill-ring-pct">{isHovered ? `${skill.level}%` : skill.detail}</span>
            </div>
        </div>
    );
}

/* ---- Category section ---- */
function SkillCategory({ category, index }) {
    const [ref, isInView] = useInView({ threshold: 0.15 });

    return (
        <div
            ref={ref}
            className={`skill-category ${isInView ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div className="skill-category-header">
                <div className={`skill-category-line skill-category-line--${category.accent}`} />
                <h3 className="skill-category-title">
                    <span className="skill-category-index">0{index + 1}</span>
                    {category.title}
                </h3>
                <span className="skill-category-count">{category.skills.length} skills</span>
            </div>

            <div className="skill-grid">
                {category.skills.map((skill, i) => (
                    <SkillCard
                        key={i}
                        skill={skill}
                        index={i}
                        isVisible={isInView}
                        categoryAccent={category.accent}
                    />
                ))}
            </div>
        </div>
    );
}

/* ---- Main section ---- */
export default function Skills() {
    const [headerRef, headerInView] = useInView({ threshold: 0.3 });
    const totalSkills = SKILL_CATEGORIES.reduce((sum, cat) => sum + cat.skills.length, 0);

    return (
        <section className="skills noise-bg" id="skills">
            {/* Background orbs */}
            <div className="skills-orb skills-orb-1" />
            <div className="skills-orb skills-orb-2" />

            {/* Hex grid decoration */}
            <div className="skills-hex-grid" />

            {/* Header */}
            <div
                ref={headerRef}
                className={`skills-header section-reveal ${headerInView ? 'visible' : ''}`}
            >
                <div className="skills-label">— Arsenal</div>
                <h2 className="skills-title">
                    Tech <span className="skills-title-accent">Stack</span>
                </h2>
                <p className="skills-subtitle">
                    {totalSkills} technologies I use to craft production-ready systems
                </p>
            </div>

            {/* Category filter pills (decorative) */}
            <div className={`skills-pills ${headerInView ? 'visible' : ''}`}>
                {SKILL_CATEGORIES.map((cat, i) => (
                    <span className={`skills-pill skills-pill--${cat.accent}`} key={i}>
                        {cat.title}
                    </span>
                ))}
            </div>

            {/* Skill categories */}
            <div className="skills-categories">
                {SKILL_CATEGORIES.map((cat, i) => (
                    <SkillCategory key={i} category={cat} index={i} />
                ))}
            </div>
        </section>
    );
}
