import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
function  Navbar(){
    return(
        <nav className={styles.navbar}>
            <h2>CivicPulse</h2>
            <ul className={styles.navlinks}>
                <li><Link className={styles.navlink} to="/">Home</Link></li>
                <li><Link className={styles.navlink} to="/about">About</Link></li>
                <li><Link className={styles.navlink} to="/contact">Contact</Link></li>
                <li><Link className={styles.navlink} to="/report">Report Issue</Link></li>
            </ul> 
        </nav>
    )
}

export default Navbar;