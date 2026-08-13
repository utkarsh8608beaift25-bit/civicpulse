import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <h2>CivicPulse</h2>
        <p>Connecting citizens. Improving cities.</p>
      </div>

      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/report">Report Issue</Link>
      </div>

      <div className={styles.emergency}>
        <span>Emergency</span>
        <a href="tel:112">112</a>
      </div>
    </footer>
  );
}

export default Footer;