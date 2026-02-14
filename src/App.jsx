import { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import './App.css';

const NAV_ITEMS = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
];

function CustomCursor() {
    const cursorRef = useRef(null);
    const trailRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const isHoverRef = useRef(false);
    const [, forceUpdate] = useState(0);

    const mouse = useRef({ x: 0, y: 0 });
    const trailPos = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);

    useEffect(() => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) return;

        // Hide native cursor
        document.body.style.cursor = 'none';

        const lerp = (start, end, factor) => start + (end - start) * factor;

        // rAF loop only for the trail ring
        const animate = () => {
            trailPos.current.x = lerp(trailPos.current.x, mouse.current.x, 0.35);
            trailPos.current.y = lerp(trailPos.current.y, mouse.current.y, 0.35);

            if (trailRef.current) {
                trailRef.current.style.transform = `translate(${trailPos.current.x - 22}px, ${trailPos.current.y - 22}px)`;
            }

            rafId.current = requestAnimationFrame(animate);
        };

        rafId.current = requestAnimationFrame(animate);

        // Cursor dot updates DIRECTLY in mousemove — zero frame delay
        const handleMove = (e) => {
            if (!visible) setVisible(true);
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)${isHoverRef.current ? ' scale(2.5)' : ''}`;
            }
        };

        const handleOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('hero-image-wrapper') ||
                target.classList.contains('project-image-container') ||
                target.classList.contains('skill-card') ||
                target.classList.contains('exp-card') ||
                target.classList.contains('cert-card')
            ) {
                isHoverRef.current = true;
                forceUpdate(n => n + 1);
            }
        };

        const handleOut = () => { isHoverRef.current = false; forceUpdate(n => n + 1); };
        const handleLeave = () => setVisible(false);
        const handleEnter = () => setVisible(true);

        document.addEventListener('mousemove', handleMove, { passive: true });
        document.addEventListener('mouseover', handleOver, { passive: true });
        document.addEventListener('mouseout', handleOut, { passive: true });
        document.addEventListener('mouseleave', handleLeave);
        document.addEventListener('mouseenter', handleEnter);

        return () => {
            cancelAnimationFrame(rafId.current);
            document.body.style.cursor = '';
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseover', handleOver);
            document.removeEventListener('mouseout', handleOut);
            document.removeEventListener('mouseleave', handleLeave);
            document.removeEventListener('mouseenter', handleEnter);
        };
    }, [visible]);

    return (
        <>
            <div
                ref={cursorRef}
                className={`custom-cursor ${visible ? 'visible' : ''} ${isHoverRef.current ? 'hover' : ''}`}
            />
            <div
                ref={trailRef}
                className={`cursor-trail ${visible ? 'visible' : ''}`}
            />
        </>
    );
}

function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <a href="#hero" className="nav-logo">
                H<span className="logo-accent">K</span>
            </a>
            <button
                className={`nav-toggle ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span />
                <span />
                <span />
            </button>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                        <a href={item.href} onClick={handleNavClick}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className={`loading-screen ${!loading ? 'hidden' : ''}`}>
                <div className="loading-text">HK</div>
            </div>

            <CustomCursor />
            <Nav />

            <main>
                <Hero />
                <div className="section-divider" />
                <Experience />
                <div className="section-divider" />
                <Projects />
                <div className="section-divider" />
                <Skills />
                <div className="section-divider" />
                <Achievements />
                <div className="section-divider" />
                <Certificates />
                <div className="section-divider" />
                <Contact />
            </main>
        </>
    );
}
