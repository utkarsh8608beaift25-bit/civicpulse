import { useState } from "react";
import ReportCard from "../components/reports/ReportCard";
import styles from "./MyReports.module.css";

function MyReports() {
  const [reports, setReports] = useState(() => {
    const savedReports = localStorage.getItem("civicpulseReports");

    return savedReports ? JSON.parse(savedReports) : [];
  });

  function handleStatusChange(reportId, newStatus) {
    const updatedReports = reports.map((report) =>
      report.id === reportId
        ? { ...report, status: newStatus }
        : report
    );

    setReports(updatedReports);

    localStorage.setItem(
      "civicpulseReports",
      JSON.stringify(updatedReports)
    );
  }

  function handleDelete(reportId) {
    const updatedReports = reports.filter(
      (report) => report.id !== reportId
    );

    setReports(updatedReports);

    localStorage.setItem(
      "civicpulseReports",
      JSON.stringify(updatedReports)
    );
  }

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
            <ReportCard
              key={report.id}
              report={report}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default MyReports;