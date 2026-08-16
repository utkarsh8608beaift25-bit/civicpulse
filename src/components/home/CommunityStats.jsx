import { useEffect, useState } from "react";
import styles from "./CommunityStats.module.css";

const stats = [
  {
    id: 1,
    value: 1250,
    suffix: "+",
    label: "Issues Reported",
  },
  {
    id: 2,
    value: 89,
    suffix: "%",
    label: "Resolved Cases",
  },
  {
    id: 3,
    value: 24,
    suffix: "/7",
    label: "Community Support",
  },
];

function CommunityStats() {
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const heading = document.querySelector(
      `.${styles.heading}`
    );

    if (!heading) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
      }
    );

    observer.observe(heading);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>COMMUNITY IMPACT</p>

        <h2>Every report can make a difference.</h2>
      </div>

      <div className={styles.stats}>
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            stat={stat}
            hasStarted={hasStarted}
          />
        ))}
      </div>
    </section>
  );
}

function StatCard({ stat, hasStarted }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    const duration = 1800;
    const startTime = performance.now();

    function updateCount(currentTime) {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        easedProgress * stat.value
      );

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    }

    requestAnimationFrame(updateCount);
  }, [hasStarted, stat.value]);

  return (
    <article className={styles.stat}>
      <strong>
        {count.toLocaleString()}
        {stat.suffix}
      </strong>

      <span>{stat.label}</span>
    </article>
  );
}

export default CommunityStats;