import Hero from "../components/home/Hero";
import WhyCivicPulse from "../components/home/WhyCivicPulse";

function Home(){
    return(
        <>
            <Hero 
            title = "Connecting Citizens. Improving Cities." 
            description = "Report civic issues and help build a cleaner, safer and smarter community."
            />
            
            <WhyCivicPulse />
        </>
        
        
    )
}

export default Home;