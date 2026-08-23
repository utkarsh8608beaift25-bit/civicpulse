import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  ["Home", "/", true],
  ["About", "/about"],
  ["My Reports", "/my-reports"],
  ["Contact", "/contact"],
  ["Report Issue", "/report"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navClass = ({ isActive }) =>
    `${styles.navlink} ${isActive ? styles.active : ""}`;

  return (
    <nav className={styles.navbar}>
      <div className={styles.brandArea}>
        <NavLink className={styles.logo} to="/" onClick={closeMenu}>
          Civic<span>Pulse</span>
        </NavLink>

        <div className={styles.status}>
          <span className={styles.statusDot} />
          <span>Community Active</span>
        </div>
      </div>

      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`${styles.navigation} ${menuOpen ? styles.open : ""}`}>
        <ul className={styles.navlinks}>
          {links.map(([name, path, end]) => (
            <li key={path}>
              <NavLink
                className={navClass}
                to={path}
                end={end}
                onClick={closeMenu}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        <a className={styles.email} href="mailto:support@civicpulse.com">
          support@civicpulse.com
        </a>
      </div>
    </nav>
  );
}

export default Navbar;