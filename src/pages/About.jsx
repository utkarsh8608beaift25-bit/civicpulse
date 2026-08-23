import { Link } from "react-router-dom";
import styles from "./About.module.css";

const features = [
  ["01", "Easy Reporting", "Share a civic issue without dealing with a complicated reporting process."],
  ["02", "Stay Aware", "See the kinds of problems people are noticing in their communities."],
  ["03", "Make It Visible", "Give local issues a place where they can be seen and understood."],
];

const steps = [
  ["01", "Report an issue", "Tell us what is happening and where it needs attention."],
  ["02", "Keep track", "Find your reports later and keep your information organised."],
  ["03", "Stay involved", "Keep an eye on the issues that matter to your community."],
];

const purpose = [
  ["Why We Built It", "Local problems are part of everyday life, but reporting them is not always easy. CivicPulse was created to make that first step simpler."],
  ["What We Believe", "A better city is not built by one person. It starts when people notice problems, speak up, and take an interest in their community."],
];

function About() {
  return (
    <section className={styles.page}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>ABOUT CIVICPULSE</p>
        <h1>Small reports can lead to real change.</h1>
        <p>
          CivicPulse is a simple platform where people can report problems
          around them and help bring more attention to the places they live.
        </p>
      </div>

      <Section title="WHY CIVICPULSE" heading="A simpler way to speak up about local problems.">
        <div className={styles.features}>
          {features.map(([number, title, text]) => (
            <article className={styles.feature} key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="HOW IT WORKS" heading="Three simple steps.">
        <div className={styles.steps}>
          {steps.map(([number, title, text]) => (
            <div className={styles.step} key={number}>
              <strong>{number}</strong>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="OUR PURPOSE" heading="Why CivicPulse exists.">
        <div className={styles.cards}>
          {purpose.map(([title, text]) => (
            <article className={styles.card} key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <div className={styles.cta}>
        <h2>Have something that needs attention?</h2>
        <p>Report a local issue and help make it visible.</p>
        <Link className={styles.button} to="/report">
          Report an Issue
        </Link>
      </div>
    </section>
  );
}

function Section({ title, heading, children }) {
  return (
    <div className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>{title}</p>
        <h2>{heading}</h2>
      </div>
      {children}
    </div>
  );
}

export default About;