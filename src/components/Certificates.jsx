import { useCallback } from 'react';
import { useInView } from '../hooks/useInView';
import './Certificates.css';

const CERTIFICATES = [
    {
        name: 'NorthEast Tech Summit',
        issuer: 'NIT Agartala',
        date: '2024',
        image: '/certs/cert1-front.webp',
    },
    {
        name: 'OCI Foundations Associate',
        issuer: 'Oracle',
        date: '2025',
        image: '/certs/cert2-front.webp',
    },
    {
        name: 'GSSOC Contributor',
        issuer: 'GSSOC',
        date: '2024',
        image: '/certs/cert3-front.webp',
    },
    {
        name: 'AWS Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: '2025',
        image: '/certs/cert4-front.webp',
    },
    {
        name: 'System Design Fundamentals',
        issuer: 'Educative',
        date: '2024',
        image: '/certs/cert5-front.webp',
    },
];

const HUES = [185, 260, 220, 30, 300];

function CertCard({ cert, index }) {
    const [inViewRef, isInView] = useInView({ threshold: 0.15 });
    const hue = HUES[index % HUES.length];

    const handleMouseMove = useCallback((e) => {
        const card = inViewRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.setProperty('--rx', `${rotateX}deg`);
        card.style.setProperty('--ry', `${rotateY}deg`);
        card.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--my', `${(y / rect.height) * 100}%`);
    }, [inViewRef]);

    const handleMouseLeave = useCallback(() => {
        const card = inViewRef.current;
        if (!card) return;
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
    }, [inViewRef]);

    return (
        <div
            ref={inViewRef}
            className={`cert-card ${isInView ? 'visible' : ''}`}
            style={{
                '--delay': `${index * 0.12}s`,
                '--hue': hue,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="cert-image">
                <img
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    loading="lazy"
                />
            </div>

            {/* Glow orb follows cursor */}
            <div className="cert-glow" />

            {/* Shimmer sweep */}
            <div className="cert-shimmer" />

            {/* Info overlay */}
            <div className="cert-info">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-date">{cert.date}</div>
            </div>
        </div>
    );
}

export default function Certificates() {
    const [headerRef, headerInView] = useInView({ threshold: 0.3 });

    return (
        <section className="certificates noise-bg" id="certificates">
            <div
                ref={headerRef}
                className={`certificates-header section-reveal ${headerInView ? 'visible' : ''}`}
            >
                <div className="certificates-label">— Credentials</div>
                <h2 className="certificates-title">Certificates</h2>
            </div>

            <div className="certificates-grid">
                {CERTIFICATES.map((cert, i) => (
                    <CertCard key={i} cert={cert} index={i} />
                ))}
            </div>
        </section>
    );
}
