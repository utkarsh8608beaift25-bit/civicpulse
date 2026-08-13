import { useState } from "react";
import styles from "./MyReports.module.css";

function MyReports() {
  const [reports] = useState(() => {
    const savedReports = localStorage.getItem("civicpulseReports");

    return savedReports ? JSON.parse(savedReports) : [];
  });

  return (
    <section className={styles.page}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>MY REPORTS</p>

        <h1>Track the issues you've reported.</h1>

        <p>
          View the civic issues you have submitted through CivicPulse.
        </p>
      </div>

      {reports.length === 0 ? (
        <div className={styles.empty}>
          <h2>No reports yet.</h2>

          <p>
            You haven't submitted any civic issues yet.
          </p>
        </div>
      ) : (
        <div className={styles.reports}>
          {reports.map((report) => (
            <article className={styles.report} key={report.id}>
              <div className={styles.reportHeader}>
                <div>
                  <span className={styles.category}>
                    {report.category}
                  </span>

                  <h2>{report.description}</h2>
                </div>

                <span className={styles.status}>
                  {report.status}
                </span>
              </div>

              <div className={styles.details}>
                <p>
                  <strong>Location</strong>
                  {report.location}
                </p>

                <p>
                  <strong>Submitted by</strong>
                  {report.name}
                </p>

                <p>
                  <strong>Date</strong>
                  {report.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default MyReports;