import styles from "./ReportCard.module.css";

function ReportCard({ report, onStatusChange, onDelete }) {
  function handleStatusChange(event) {
    onStatusChange(report.id, event.target.value);
  }

  function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this report?"
    );

    if (confirmed) {
      onDelete(report.id);
    }
  }

  return (
    <article className={styles.report}>
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

      <div className={styles.statusControl}>
        <label htmlFor={`status-${report.id}`}>
          Update Status
        </label>

        <select
          id={`status-${report.id}`}
          value={report.status}
          onChange={handleStatusChange}
        >
          <option value="Submitted">Submitted</option>
          <option value="Under Review">Under Review</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <button
        className={styles.deleteButton}
        type="button"
        onClick={handleDelete}
      >
        Delete Report
      </button>
    </article>
  );
}

export default ReportCard;