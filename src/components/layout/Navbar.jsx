import {Link} from "react-router-dom";
function  Navbar(){
    return(
        <nav>
            <h2>CivicPulse</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/report">Report Issue</Link>
        </nav>
    )
}

export default Navbar;