import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero({ title, description }) {
  return (
    <section className={styles.hero}>
      <div className={styles.gridBackground} />
      <div className={styles.decorCircleOne} />
      <div className={styles.decorCircleTwo} />
      <div className={styles.decorSquare} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>YOUR CITY. YOUR VOICE.</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <Link className={styles.primaryButton} to="/report">
            Report an Issue
          </Link>
          <Link className={styles.secondaryButton} to="/about">
            Learn More
          </Link>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.visualGlow} />

        <div className={styles.visualCard}>
          <div className={styles.cardLine} />

          <div className={styles.cardTop}>
            <div className={styles.cardIcon}>
              <span />
            </div>
            <span className={styles.cardLabel}>COMMUNITY IMPACT</span>
          </div>

          <strong>Make your city better.</strong>

          <p className={styles.cardText}>
            Every report brings your community one step closer to change.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;