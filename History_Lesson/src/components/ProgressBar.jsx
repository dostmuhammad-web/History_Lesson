export default function ProgressBar({ percent = 0, height = 8, showLabel = false, className = '' }) {
  const p = Math.max(0, Math.min(100, percent));
  return (
    <div className={`progress-wrap ${className}`}>
      <div className="progress-track" style={{ height }}>
        <div className="progress-fill" style={{ width: `${p}%` }} />
      </div>
      {showLabel && <span className="progress-label">{p}%</span>}
    </div>
  );
}