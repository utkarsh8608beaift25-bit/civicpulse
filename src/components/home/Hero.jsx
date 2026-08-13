import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero({ title, description }) {
  return (
    <section className={styles.hero}>
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
        <div className={styles.visualCard}>
          <span>Community Impact</span>
          <strong>Make your city better.</strong>
        </div>
      </div>
    </section>
  );
}

export default Hero;
