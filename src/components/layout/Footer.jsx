import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <h2>Civic<span>Pulse</span></h2>
          <p>Connecting citizens. Improving cities.</p>
        </div>

        <div className={styles.links}>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/my-reports">My Reports</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className={styles.contact}>
          <h3>Need Help?</h3>
          <a href="mailto:support@civicpulse.com">
            support@civicpulse.com
          </a>

          <div className={styles.emergency}>
            <span>Emergency</span>
            <a href="tel:112">112</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 CivicPulse</span>
        <span>Built for the community.</span>
      </div>
    </footer>
  );
}

export default Footer;