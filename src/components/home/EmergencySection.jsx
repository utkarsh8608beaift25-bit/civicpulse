import styles from "./EmergencySection.module.css";

const emergencyServices = [
  {
    id: 1,
    title: "Emergency Response",
    number: "112",
    description: "For immediate police, fire, or medical emergencies.",
  },
  {
    id: 2,
    title: "Police",
    number: "112",
    description: "Contact emergency response for immediate police assistance.",
  },
  {
    id: 3,
    title: "Medical & Fire",
    number: "112",
    description: "Use the unified emergency number for urgent medical or fire assistance.",
  },
];

function EmergencySection() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>NEED HELP NOW?</p>

        <h2>Emergency assistance, when it matters.</h2>

        <p>
          For immediate emergencies in India, contact the unified emergency
          response number.
        </p>
      </div>

      <div className={styles.grid}>
        {emergencyServices.map((service) => (
          <article className={styles.card} key={service.id}>
            <span>{service.title}</span>

            <a href={`tel:${service.number}`} className={styles.number}>
              {service.number}
            </a>

            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EmergencySection;