import styles from "./WhyCivicPulse.module.css";

function WhyCivicPulse() {
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
        <article className={styles.card}>
          <span className={styles.number}>01</span>

          <h3>Report Issues</h3>

          <p>
            Quickly report problems around your community and make sure
            they are visible.
          </p>
        </article>

        <article className={styles.card}>
          <span className={styles.number}>02</span>

          <h3>Stay Informed</h3>

          <p>
            Discover important civic information and stay connected with
            what is happening around you.
          </p>
        </article>

        <article className={styles.card}>
          <span className={styles.number}>03</span>

          <h3>Improve Your City</h3>

          <p>
            Turn community feedback into meaningful action and help make
            your surroundings better.
          </p>
        </article>
      </div>
    </section>
  );
}

export default WhyCivicPulse;