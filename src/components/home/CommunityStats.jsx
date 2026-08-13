import styles from "./CommunityStats.module.css";

const stats = [
  {
    id: 1,
    value: "1,250+",
    label: "Issues Reported",
  },
  {
    id: 2,
    value: "89%",
    label: "Resolved Cases",
  },
  {
    id: 3,
    value: "24/7",
    label: "Community Support",
  },
];

function CommunityStats() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>COMMUNITY IMPACT</p>

        <h2>Every report can make a difference.</h2>
      </div>

      <div className={styles.stats}>
        {stats.map((stat) => (
          <article className={styles.stat} key={stat.id}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CommunityStats;