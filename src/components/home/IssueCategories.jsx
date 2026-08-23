import { Link } from "react-router-dom";
import styles from "./IssueCategories.module.css";

const categories = [
  ["01", "Roads", "Report potholes, damaged roads, and unsafe streets."],
  ["02", "Water", "Report leaks, water supply problems, and drainage issues."],
  ["03", "Electricity", "Report outages, damaged poles, and electrical hazards."],
  ["04", "Cleanliness", "Report garbage, overflowing bins, and sanitation issues."],
  ["05", "Street Lights", "Reliable lighting for safer streets and public spaces at night."],
  ["06", "Public Safety", "Report safety concerns and protect your local community."]
];

function IssueCategories() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>WHAT CAN YOU REPORT?</p>
        <h2>Make your community heard.</h2>
        <p>
          From broken street lights to overflowing garbage bins, report
          everyday civic issues that matter to your community.
        </p>
      </div>

      <div className={styles.grid}>
        {categories.map(([id, title, description]) => (
          <Link
            key={id}
            className={`${styles.card} ${
              styles[title.toLowerCase().replace(" ", "")]
            }`}
            to={`/report?category=${title}`}
          >
            <span className={styles.number}>{id}</span>

            <div className={styles.cardContent}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default IssueCategories;