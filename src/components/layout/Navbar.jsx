import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} to="/">
                CivicPulse
            </Link>

            <button
                className={styles.menuButton}
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <ul className={`${styles.navlinks} ${menuOpen ? styles.open : ""}`}>
                <li>
                    <Link
                        className={styles.navlink}
                        to="/"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        className={styles.navlink}
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </Link>
                </li>

                <li>
                    <Link
                        className={styles.navlink}
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </li>

                <li>
                    <Link
                        className={styles.navlink}
                        to="/report"
                        onClick={() => setMenuOpen(false)}
                    >
                        Report Issue
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;