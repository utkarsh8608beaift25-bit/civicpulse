import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./MyReports.module.css";

function MyReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("civicpulseReports") || "[]"
    );
    setReports(saved);
  }, []);

  function deleteReport(id) {
    if (!window.confirm("Are you sure you want to delete this report?")) return;

    const updated = reports.filter((report) => report.id !== id);

    localStorage.setItem("civicpulseReports", JSON.stringify(updated));
    setReports(updated);
  }

  const total = reports.length;
  const progress = reports.filter((r) => r.status === "In Progress").length;
  const resolved = reports.filter((r) => r.status === "Resolved").length;

  return (
    <section className={styles.page}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>MY REPORTS</p>
        <h1>Track what you've raised.</h1>
        <p>
          Keep track of the civic issues you've reported and follow
          their progress from one place.
        </p>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <strong>{String(total).padStart(2, "0")}</strong>
          <span>Total Reports</span>
        </div>

        <div className={styles.stat}>
          <strong>{String(progress).padStart(2, "0")}</strong>
          <span>In Progress</span>
        </div>

        <div className={styles.stat}>
          <strong>{String(resolved).padStart(2, "0")}</strong>
          <span>Resolved</span>
        </div>
      </div>

      <div className={styles.activity}>
        <div className={styles.activityHeading}>
          <div>
            <p className={styles.eyebrow}>YOUR ACTIVITY</p>
            <h2>Recent reports</h2>
          </div>
          <span>{total} reports</span>
        </div>

        {reports.length === 0 ? (
          <div className={styles.empty}>
            <h2>No reports yet.</h2>
            <p>Once you report a civic issue, it will appear here.</p>
          </div>
        ) : (
          <div className={styles.timeline}>
            {reports.map((report) => {
              const type =
                report.status === "In Progress"
                  ? "progress"
                  : report.status === "Resolved"
                  ? "resolved"
                  : "submitted";

              return (
                <div className={styles.item} key={report.id}>
                  <div className={`${styles.dot} ${styles[type]}`} />

                  <div className={styles.report}>
                    <div className={styles.reportTop}>
                      <span className={styles.category}>
                        {report.category}
                      </span>

                      <span className={`${styles.status} ${styles[type]}`}>
                        {report.status}
                      </span>
                    </div>

                    <h3>
                      {report.title ||
                        `${report.category} issue at ${report.location}`}
                    </h3>

                    <p>{report.date}</p>

                    <button
                      className={styles.deleteButton}
                      onClick={() => deleteReport(report.id)}
                    >
                      Delete Report
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className={styles.cta}>
        <div>
          <h2>Have another issue to report?</h2>
          <p>Help make your community better, one report at a time.</p>
        </div>

        <Link className={styles.button} to="/report">
          Report New Issue
        </Link>
      </div>
    </section>
  );
}

export default MyReports;