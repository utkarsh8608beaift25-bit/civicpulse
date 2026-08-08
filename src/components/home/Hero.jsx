import { Link } from "react-router-dom";

function Hero({title, description}){
    return(
        <section>
            <h1>{title}</h1>
            <p>
                {description}
            </p>

            <div>
                <Link to="/report">Report an issue</Link>
                <Link to="/about">Learn More</Link>
            </div>
        </section>
    )
}

export default Hero;