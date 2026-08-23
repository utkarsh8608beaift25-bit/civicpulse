import styles from "./WhyCivicPulse.module.css";

function WhyCivicPulse() {
  const cards = [
    ["01", "Report Issues", "Quickly report problems around your community and make sure they are visible."],
    ["02", "Stay Informed", "Discover important civic information and stay connected with what is happening around you."],
    ["03", "Improve Your City", "Turn community feedback into meaningful action and help make your surroundings better."]
  ];

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>WHY CIVICPULSE?</p>
        <h2>Small actions can create meaningful change.</h2>
        <p>
          CivicPulse makes it easier for citizens to report problems,
          stay informed, and contribute to a better community.
        </p>
      </div>

      <div className={styles.cards}>
        {cards.map(([number, title, text]) => (
          <article className={styles.card} key={number}>
            <span className={styles.number}>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyCivicPulse;