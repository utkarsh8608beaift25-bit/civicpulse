import Hero from "../components/home/Hero";
import WhyCivicPulse from "../components/home/WhyCivicPulse";
import IssueCategories from "../components/home/IssueCategories";
import CommunityStats from "../components/home/CommunityStats";
import EmergencySection from "../components/home/EmergencySection";

function Home(){
    return(
        <>
            <Hero 
            title = "Connecting Citizens. Improving Cities." 
            description = "Report civic issues and help build a cleaner, safer and smarter community."
            />

            <WhyCivicPulse />
            <IssueCategories />
            <CommunityStats />
            <EmergencySection />
        </>
        
        
    )
}

export default Home;