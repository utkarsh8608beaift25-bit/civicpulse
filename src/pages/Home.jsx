import { useEffect } from "react";
import Hero from "../components/home/Hero";
import WhyCivicPulse from "../components/home/WhyCivicPulse";
import IssueCategories from "../components/home/IssueCategories";
import CommunityStats from "../components/home/CommunityStats";
import EmergencySection from "../components/home/EmergencySection";

function Home() {
  useEffect(() => {
    const items = document.querySelectorAll(".homeReveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero
        title="Connecting Citizens. Improving Cities."
        description="Report civic issues and help build a cleaner, safer and smarter community."
      />

      <div className="homeReveal">
        <WhyCivicPulse />
      </div>

      <div className="homeReveal">
        <IssueCategories />
      </div>

      <div className="homeReveal">
        <CommunityStats />
      </div>

      <div className="homeReveal">
        <EmergencySection />
      </div>
    </>
  );
}

export default Home;