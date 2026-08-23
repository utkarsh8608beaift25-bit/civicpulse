import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import city from "../assets/404-city.png";

function NotFound() {
  return (
    <section className={styles.page}>
      <div className={styles.visual}>
        <img src={city} alt="" />
      </div>

      <div className={styles.content}>
        <strong>404</strong>
        <h1>Looks like you took a wrong turn.</h1>
        <i></i>
        <p>The page you're looking for doesn't exist or may have been moved.</p>

        <Link to="/" className={styles.button}>
          ⌂ &nbsp; Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;