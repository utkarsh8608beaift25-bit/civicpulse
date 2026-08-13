import { useState } from "react";
import styles from "./ReportIssue.module.css";

function ReportIssue() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={styles.page}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>REPORT AN ISSUE</p>

        <h1>Make your community heard.</h1>

        <p>
          Tell us about a civic issue in your area and help bring attention
          to problems that affect your community.
        </p>
      </div>

      {submitted ? (
        <div className={styles.success}>
          <h2>Issue submitted successfully.</h2>

          <p>
            Thank you for helping make your community better.
          </p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Issue Category
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="roads">Roads</option>
              <option value="water">Water</option>
              <option value="electricity">Electricity</option>
              <option value="cleanliness">Cleanliness</option>
              <option value="street-lights">Street Lights</option>
              <option value="public-safety">Public Safety</option>
            </select>
          </label>

          <label>
            Location
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Where is the issue?"
              required
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the issue..."
              rows="5"
              required
            />
          </label>

          <button type="submit">Submit Issue</button>
        </form>
      )}
    </section>
  );
}

export default ReportIssue;