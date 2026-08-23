import styles from "./ReportCard.module.css";

function ReportCard({ report, onStatusChange, onDelete }) {
  const changeStatus = (e) =>
    onStatusChange(report.id, e.target.value);

  const deleteReport = () => {
    if (window.confirm("Are you sure you want to delete this report?"))
      onDelete(report.id);
  };

  return (
    <article className={styles.report}>
      <div className={styles.reportHeader}>
        <div>
          <span className={styles.category}>{report.category}</span>
          <h2>{report.description}</h2>
        </div>

        <span className={styles.status}>{report.status}</span>
      </div>

      <div className={styles.details}>
        <p><strong>Location</strong>{report.location}</p>
        <p><strong>Submitted by</strong>{report.name}</p>
        <p><strong>Date</strong>{report.date}</p>
      </div>

      <div className={styles.statusControl}>
        <label htmlFor={`status-${report.id}`}>Update Status</label>

        <select
          id={`status-${report.id}`}
          value={report.status}
          onChange={changeStatus}
        >
          <option>Submitted</option>
          <option>Under Review</option>
          <option>Resolved</option>
        </select>
      </div>

      <button
        className={styles.deleteButton}
        type="button"
        onClick={deleteReport}
      >
        Delete Report
      </button>
    </article>
  );
}

export default ReportCard;