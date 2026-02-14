import { useState, useEffect, useMemo, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from '../hooks/useInView';
import './Contact.css';

const SOCIAL_LINKS = [
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/himanshu-kumar',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: 'GitHub',
        href: 'https://github.com/HimanshuKumar1234',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    },
    {
        label: 'Resume',
        href: '/resume.pdf',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
    },
];

/* ---- Typing animation hook ---- */
function useTypewriter(text, speed = 40, startDelay = 0, trigger = true) {
    const [displayed, setDisplayed] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!trigger) { setDisplayed(''); setDone(false); return; }
        setDisplayed('');
        setDone(false);
        const timeout = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                i++;
                setDisplayed(text.slice(0, i));
                if (i >= text.length) {
                    clearInterval(interval);
                    setDone(true);
                }
            }, speed);
            return () => clearInterval(interval);
        }, startDelay);
        return () => clearTimeout(timeout);
    }, [text, speed, startDelay, trigger]);

    return [displayed, done];
}

/* ---- Terminal Line Component ---- */
function TerminalLine({ prefix, command, output, outputColor, delay, trigger }) {
    const [cmd, cmdDone] = useTypewriter(command, 35, delay, trigger);
    const showOutput = cmdDone && output;

    return (
        <div className="term-block">
            <div className="term-line">
                <span className="term-prefix">{prefix}</span>
                <span className="term-cmd">{cmd}</span>
                {!cmdDone && <span className="term-cursor">▊</span>}
            </div>
            {showOutput && (
                <div className={`term-output ${outputColor || ''}`}>{output}</div>
            )}
        </div>
    );
}

/* ---- Contact Form ---- */
function ContactForm({ visible }) {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("PUBLIC:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    setStatus('sending');
    setErrorMsg('');

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error('EmailJS Error:', err);
            setErrorMsg(err?.text || 'Failed to send message. Please try again.');
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const isDisabled = status === 'sending' || status === 'success';

    return (
        <form
            className={`contact-form ${visible ? 'visible' : ''}`}
            onSubmit={handleSubmit}
        >
            <div className="form-header">
                <span className="form-header-dot form-header-dot--red" />
                <span className="form-header-dot form-header-dot--yellow" />
                <span className="form-header-dot form-header-dot--green" />
                <span className="form-header-title">compose_message.sh</span>
            </div>

            <div className="form-body">
                <div className="form-field">
                    <label className="form-label">
                        <span className="form-label-prefix">$</span> your_name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="form-input"
                        autoComplete="name"
                        disabled={isDisabled}
                    />
                </div>

                <div className="form-field">
                    <label className="form-label">
                        <span className="form-label-prefix">$</span> your_email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="form-input"
                        autoComplete="email"
                        disabled={isDisabled}
                    />
                </div>

                <div className="form-field">
                    <label className="form-label">
                        <span className="form-label-prefix">$</span> message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Let's build something amazing together..."
                        required
                        rows={4}
                        className="form-input form-textarea"
                        disabled={isDisabled}
                    />
                </div>

                {status === 'error' && (
                    <div className="form-status form-status--error">
                        <span>✗</span> {errorMsg}
                    </div>
                )}

                {status === 'success' && (
                    <div className="form-status form-status--success">
                        <span>✓</span> Message delivered successfully!
                    </div>
                )}

                <button type="submit" className="form-submit" disabled={isDisabled}>
                    {status === 'sending' ? (
                        <>
                            <span className="form-submit-spinner" />
                            git pushing...
                        </>
                    ) : status === 'success' ? (
                        <>
                            <span className="form-submit-icon">✓</span>
                            git push origin message —— Sent!
                        </>
                    ) : (
                        <>
                            <span className="form-submit-icon">→</span>
                            git push origin message
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}

/* ---- Main Section ---- */
export default function Contact() {
    const [ref, isInView] = useInView({ threshold: 0.2 });

    // Generate particles
    const particles = useMemo(() => {
        return Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: `${1 + Math.random() * 2}px`,
            duration: `${10 + Math.random() * 15}s`,
            delay: `${Math.random() * 10}s`,
        }));
    }, []);

    return (
        <section className="contact" id="contact">
            {/* Particles */}
            <div className="contact-particles">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="particle"
                        style={{
                            left: p.left,
                            width: p.size,
                            height: p.size,
                            animationDuration: p.duration,
                            animationDelay: p.delay,
                        }}
                    />
                ))}
            </div>

            {/* Background orbs */}
            <div className="contact-orb contact-orb-1" />
            <div className="contact-orb contact-orb-2" />

            <div ref={ref} className={`contact-inner ${isInView ? 'visible' : ''}`}>
                {/* Header */}
                <div className="contact-header section-reveal visible">
                    <div className="contact-label">— Let's Connect</div>
                    <h2 className="contact-heading">
                        Connect to <span className="contact-heading-accent">Himanshu's Brain</span>
                    </h2>
                </div>

                {/* Two column layout */}
                <div className="contact-grid">
                    {/* Left: Terminal */}
                    <div className={`contact-terminal ${isInView ? 'visible' : ''}`}>
                        <div className="term-header">
                            <span className="term-dot term-dot--red" />
                            <span className="term-dot term-dot--yellow" />
                            <span className="term-dot term-dot--green" />
                            <span className="term-title">himanshu@brain ~ %</span>
                        </div>
                        <div className="term-body">
                            <TerminalLine
                                prefix="~$"
                                command=" git clone himanshu://brain.connect"
                                delay={300}
                                trigger={isInView}
                            />
                            <TerminalLine
                                prefix="~$"
                                command=" cd himanshu-collaboration"
                                output="✓ Directory created successfully"
                                outputColor="term-success"
                                delay={1800}
                                trigger={isInView}
                            />
                            <TerminalLine
                                prefix="~$"
                                command=" npm install creativity passion innovation"
                                output="added 3 packages in 0.42s"
                                outputColor="term-info"
                                delay={3200}
                                trigger={isInView}
                            />
                            <TerminalLine
                                prefix="~$"
                                command=" git commit -m 'Ready to build something exceptional'"
                                output={`[main 4a2f8c1] Ready to build something exceptional\n 3 files changed, ∞ insertions(+)`}
                                outputColor="term-success"
                                delay={4800}
                                trigger={isInView}
                            />
                            <TerminalLine
                                prefix="~$"
                                command=" echo 'Use the form to connect →'"
                                output="Use the form to connect →"
                                outputColor="term-highlight"
                                delay={6500}
                                trigger={isInView}
                            />
                        </div>
                    </div>

                    {/* Right: Form + Social */}
                    <div className="contact-right">
                        <ContactForm visible={isInView} />

                        {/* Social links */}
                        <div className={`contact-socials ${isInView ? 'visible' : ''}`}>
                            {SOCIAL_LINKS.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    className="contact-social"
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    style={{ transitionDelay: `${0.8 + i * 0.1}s` }}
                                >
                                    <span className="contact-social-icon">{link.icon}</span>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="contact-footer">
                <span className="footer-code">{'</'}</span> Built by Himanshu Kumar ·{' '}
                {new Date().getFullYear()}{' '}
                <span className="footer-code">{'>'}</span>
            </div>
        </section>
    );
}
