import { useEffect, useState } from "react";
import styles from "./CommunityStats.module.css";

const stats = [
  [1250, "+", "Issues Reported"],
  [89, "%", "Resolved Cases"],
  [24, "/7", "Community Support"],
];

function CommunityStats() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const heading = document.querySelector(`.${styles.heading}`);
    if (!heading) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    });

    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>COMMUNITY IMPACT</p>
        <h2>Every report can make a difference.</h2>
      </div>

      <div className={styles.stats}>
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} started={started} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ stat, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    const start = performance.now();

    function animate(time) {
      const progress = Math.min((time - start) / 1800, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * stat[0]));

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [started, stat]);

  return (
    <article className={styles.stat}>
      <strong>{count.toLocaleString()}{stat[1]}</strong>
      <span>{stat[2]}</span>
    </article>
  );
}

export default CommunityStats;