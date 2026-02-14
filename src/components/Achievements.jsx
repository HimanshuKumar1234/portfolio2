import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import './Achievements.css';

const ACHIEVEMENTS = [
    { value: 3, suffix: 'x', name: 'KIMO Winner', sub: 'Consecutive Years' },
    { value: 1, suffix: '', name: 'Hackathon Finalist', sub: 'National Level', isText: true, text: '🏆' },
    { value: 98, suffix: '%', name: 'Naukri Tech Challenge', sub: 'Top Percentile' },
];

const CP_STATS = [
    { platform: 'CodeChef', rating: 1681, rank: '3-Star (Div 2)' },
    { platform: 'CodeForces', rating: 1406, rank: 'Specialist' },
    { platform: 'LeetCode', rating: 700, rank: '700+ Problems Solved' },
];

function AchievementCard({ achievement, index, isInView }) {
    const val = achievement.isText ? 0 : achievement.value;
    const [count, done] = useCountUp(val, 1500, true, isInView);

    return (
        <div
            className={`achievement-card ${isInView ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
        >
            <div className={`achievement-value ${done ? 'glow-done' : ''}`}>
                {achievement.isText ? achievement.text : `${isInView ? count : 0}${achievement.suffix}`}
            </div>
            <div className="achievement-name">{achievement.name}</div>
            <div className="achievement-sub">{achievement.sub}</div>
        </div>
    );
}

function CPCard({ stat, index, isInView }) {
    const [count, done] = useCountUp(stat.rating, 2000, true, isInView);

    return (
        <div
            className={`cp-card ${isInView ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.12}s` }}
        >
            <div className="cp-platform">{stat.platform}</div>
            <div className={`cp-rating ${done ? 'glow-done' : ''}`}>
                {isInView ? count : 0}
            </div>
            <div className="cp-rank">{stat.rank}</div>
        </div>
    );
}

export default function Achievements() {
    const [headerRef, headerInView] = useInView({ threshold: 0.3 });
    const [gridRef, gridInView] = useInView({ threshold: 0.2 });
    const [cpRef, cpInView] = useInView({ threshold: 0.2 });

    return (
        <section className="achievements" id="achievements">
            <div
                ref={headerRef}
                className={`achievements-header section-reveal ${headerInView ? 'visible' : ''}`}
            >
                <div className="achievements-label">— Track Record</div>
                <h2 className="achievements-title">Achievements</h2>
            </div>

            <div className="achievements-grid" ref={gridRef}>
                {ACHIEVEMENTS.map((a, i) => (
                    <AchievementCard key={i} achievement={a} index={i} isInView={gridInView} />
                ))}
            </div>

            <div className="cp-section" ref={cpRef}>
                <div className="cp-title">Competitive Programming</div>
                <div className="cp-grid">
                    {CP_STATS.map((stat, i) => (
                        <CPCard key={i} stat={stat} index={i} isInView={cpInView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
