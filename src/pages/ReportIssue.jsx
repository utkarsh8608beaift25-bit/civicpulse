import { useState } from "react";
import styles from "./ReportIssue.module.css";

function ReportIssue() {
  const searchParams = new URLSearchParams(window.location.search);
  const categoryFromUrl = searchParams.get("category");

  const [formData, setFormData] = useState({
    name: "",
    category: categoryFromUrl || "",
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

    const existingReports = JSON.parse(
      localStorage.getItem("civicpulseReports") || "[]"
    );

    const newReport = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      location: formData.location,
      description: formData.description,
      status: "Submitted",
      date: new Date().toLocaleDateString(),
    };

    const updatedReports = [...existingReports, newReport];

    localStorage.setItem(
      "civicpulseReports",
      JSON.stringify(updatedReports)
    );

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
              <option value="Roads">Roads</option>
              <option value="Water">Water</option>
              <option value="Electricity">Electricity</option>
              <option value="Cleanliness">Cleanliness</option>
              <option value="Street Lights">Street Lights</option>
              <option value="Public Safety">Public Safety</option>
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