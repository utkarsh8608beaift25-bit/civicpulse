import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <section className={styles.page}>
      <p className={styles.code}>404</p>

      <h1>Looks like you took a wrong turn.</h1>

      <p>
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link className={styles.button} to="/">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;