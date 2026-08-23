import { useState } from "react";
import styles from "./ReportIssue.module.css";

const categories = [
  "Roads",
  "Water",
  "Electricity",
  "Cleanliness",
  "Street Lights",
  "Public Safety",
];

function ReportIssue() {
  const category = new URLSearchParams(location.search).get("category");

  const [form, setForm] = useState({
    name: "",
    category: category || "",
    location: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const reports = JSON.parse(
      localStorage.getItem("civicpulseReports") || "[]"
    );

    const report = {
      id: Date.now(),
      title: `${form.category} issue at ${form.location}`,
      ...form,
      status: "Submitted",
      date: new Date().toLocaleDateString(),
    };

    localStorage.setItem(
      "civicpulseReports",
      JSON.stringify([report, ...reports])
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
          <p>Your report has been saved and will appear in My Reports.</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Issue Category
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label>
            Location
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Where is the issue?"
              required
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              value={form.description}
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