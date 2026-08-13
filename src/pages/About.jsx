import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.page}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>ABOUT CIVICPULSE</p>

        <h1>Technology that helps communities speak up.</h1>

        <p>
          CivicPulse is a community-focused platform designed to make
          reporting everyday civic issues simple, accessible, and transparent.
        </p>
      </div>

      <div className={styles.grid}>
        <article className={styles.card}>
          <h2>Our Mission</h2>
          <p>
            We want to make it easier for citizens to highlight problems
            around them and encourage active participation in their
            communities.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Our Vision</h2>
          <p>
            A future where citizens and communities work together to create
            cleaner, safer, and better-connected cities.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;