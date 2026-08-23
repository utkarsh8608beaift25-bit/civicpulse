import styles from "./EmergencySection.module.css";

const emergencyServices = [
  ["Emergency Response", "112", "For urgent police, medical, or fire emergencies across India."],
  ["Police", "100", "Contact the police for immediate assistance or to report an emergency."],
  ["Medical & Fire", "108", "Call for emergency medical assistance and ambulance services."],
];

function EmergencySection() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>NEED HELP NOW?</p>
        <h2>Emergency assistance, when it matters.</h2>
        <p>
          Quick access to important emergency services when you or your
          community needs help.
        </p>
      </div>

      <div className={styles.grid}>
        {emergencyServices.map(([title, number, description]) => (
          <article className={styles.card} key={number}>
            <span>{title}</span>
            <a href={`tel:${number}`} className={styles.number}>
              {number}
            </a>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EmergencySection;