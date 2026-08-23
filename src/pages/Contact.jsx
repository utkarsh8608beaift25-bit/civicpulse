import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.page}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>GET IN TOUCH</p>
        <h1>We'd love to hear from you.</h1>
        <p>
          Have a question, suggestion, or feedback about CivicPulse?
          Reach out to us.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <h2>Contact Information</h2>

          <p>
            Email
            <br />
            hello@civicpulse.example
          </p>

          <p>
            Support
            <br />
            Available for community questions and feedback.
          </p>
        </div>

        <form className={styles.form}>
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            Message
            <textarea placeholder="Write your message..." rows="6" />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;