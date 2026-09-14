export function LoadingState({ label = 'content' }) {
  return (
    <div className="status-box">
      <span className="status-icon" aria-hidden="true">⏳</span>
      <span>Loading {label}...</span>
    </div>
  );
}

export function ErrorState({ message = 'Something went wrong.' }) {
  return (
    <div className="status-box error">
      <span className="status-icon" aria-hidden="true">!</span>
      <span>Error: {message}</span>
    </div>
  );
}

export function EmptyState({ title = 'No items found', message = 'There is no data to display right now.' }) {
  return (
    <div className="status-box empty">
      <span className="status-icon" aria-hidden="true">○</span>
      <span className="empty-copy">
        <strong>{title}</strong>
        <small>{message}</small>
      </span>
    </div>
  );
}
