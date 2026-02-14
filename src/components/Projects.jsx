import { useInView } from '../hooks/useInView';
import './Projects.css';

const PROJECTS = [
    {
        name: 'Vision Craft',
        type: 'AI SaaS Platform',

        desc: 'A scalable AI SaaS platform with secure auth, subscription billing, and serverless PostgreSQL (Neon). Integrated resume intelligence, image generation, and background/object removal via Cloudinary and ClipDrop, while optimizing infrastructure to cut cloud costs by 25%.',
        tech: ['React.js', 'Clerk', 'Node.Js', 'Neon DB', 'Cloudinary', 'Vercel'],
        hoverImage: '/project-visioncraft-front.webp',
        frontImage: '/project-visioncraft-hover.webp',
        live: 'https://vision-craft-client.vercel.app/ai/generate-images',
        github: 'https://github.com/HimanshuKumar1234/VisionCraft',
    },
    {
        name: 'AlgoViz',
        type: 'Algorithm Visualization Engine',
        desc: 'An interactive algorithm visualization tool that brings DSA concepts to life. Watch sorting algorithms race, graph traversals illuminate paths, and complex data structures animate in real-time with buttery smooth 60fps rendering.',
        tech: ['React', 'Canvas API', 'JavaScript', 'Tailwind'],
        frontImage: '/project-algoviz-front.webp',
        hoverImage: '/project-algoviz-hover.webp',
        live: 'https://algo-vizualizer-six.vercel.app/',
        github: 'https://github.com/HimanshuKumar1234/Algo-Vizualizer',
    },
    {
        name: 'Job-Fetch',
        type: 'Smart Job Aggregation Platform',
        desc: 'AI-driven job platform featuring ATS resume scoring and optimization insights. Implemented full-stack architecture with Puter APIs, AI models, and automated Vercel deployment.',
        tech: ['React.js', 'Puter', 'Tailwind', 'TypeScript'],
        frontImage: '/project-jobfetch-front.webp',
        hoverImage: '/project-jobfetch-hover.webp',
        live: 'https://job-fetch-woad.vercel.app/',
        github: 'https://github.com/HimanshuKumar1234/Job-fetch',
    },
];

function ProjectSlide({ project, index }) {
    const [ref, isInView] = useInView({ threshold: 0.15 });

    return (
        <div
            ref={ref}
            className={`project-slide section-reveal ${isInView ? 'visible' : ''}`}
        >
            <div className="project-number">0{index + 1}</div>

            <div className="project-text">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-type">{project.type}</div>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                    {project.tech.map((t, i) => (
                        <span className="project-tech-tag" key={i}>{t}</span>
                    ))}
                </div>
                <div className="project-btns">
                    <a href={project.live} className="project-btn primary-btn" target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                    <a href={project.github} className="project-btn" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
            </div>

            <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-container"
                style={{ display: 'block', cursor: 'pointer' }}
            >
                <div className="project-strips">
                    <div className="project-strip" />
                    <div className="project-strip" />
                    <div className="project-strip" />
                    <div className="project-strip" />
                    <div className="project-strip" />
                </div>
                {/* Front image — visible by default (behind strips) */}
                <img
                    src={project.frontImage}
                    alt={project.name}
                    className="project-image project-image-front"
                    loading="lazy"
                    onError={(e) => {
                        e.target.style.background = `linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)`;
                        e.target.style.minHeight = '100%';
                    }}
                />
                {/* Hover image — revealed on hover, crossfading over front */}
                <img
                    src={project.hoverImage}
                    alt={`${project.name} details`}
                    className="project-image project-image-hover"
                    loading="lazy"
                    onError={(e) => {
                        e.target.style.background = `linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%)`;
                        e.target.style.minHeight = '100%';
                    }}
                />
            </a>
        </div>
    );
}

export default function Projects() {
    const [headerRef, headerInView] = useInView({ threshold: 0.3 });

    return (
        <section className="projects noise-bg" id="projects">
            <div
                ref={headerRef}
                className={`projects-header section-reveal ${headerInView ? 'visible' : ''}`}
            >
                <div className="projects-label">— Featured Work</div>
                <h2 className="projects-title">Projects That Ship</h2>
            </div>

            {PROJECTS.map((project, i) => (
                <ProjectSlide key={i} project={project} index={i} />
            ))}
        </section>
    );
}
