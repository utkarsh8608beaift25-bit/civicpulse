import styles from "./IssueCategories.module.css";

const categories = [
  {
    id: 1,
    title: "Roads",
    description: "Report potholes, damaged roads, and unsafe streets.",
  },
  {
    id: 2,
    title: "Water",
    description: "Report leaks, water supply problems, and drainage issues.",
  },
  {
    id: 3,
    title: "Electricity",
    description: "Report outages, damaged poles, and electrical hazards.",
  },
  {
    id: 4,
    title: "Cleanliness",
    description: "Report garbage, overflowing bins, and sanitation issues.",
  },
  {
    id: 5,
    title: "Street Lights",
    description: "Report broken or non-functional street lights.",
  },
  {
    id: 6,
    title: "Public Safety",
    description: "Report hazards that could affect community safety.",
  },
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
        {categories.map((category) => (
          <article className={styles.card} key={category.id}>
            <span className={styles.number}>
              {String(category.id).padStart(2, "0")}
            </span>

            <h3>{category.title}</h3>

            <p>{category.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default IssueCategories;