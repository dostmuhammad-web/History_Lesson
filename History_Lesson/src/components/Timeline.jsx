import Icon from './Icon';

export default function Timeline({ items, compact = false }) {
  if (!Array.isArray(items) || items.length === 0) {
    return <p className="empty-hint">Va jadval ma’lumotlar mavjud emas.</p>;
  }
  return (
    <ol className={`timeline ${compact ? 'compact' : ''}`}>
      {items.map((item, i) => {
        const obj = typeof item === 'object' && item !== null;
        const year = obj ? (item.year || item.when || '') : '';
        const text = obj ? (item.text || item.title || item.label || '') : item;
        const icon = obj && item.icon ? item.icon : 'chevronR';
        return (
          <li key={i} className="timeline-item">
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-body">
              {year && <span className="timeline-year">{year}</span>}
              <Icon name={icon} size={14} className="timeline-icon" />
              <p className="timeline-text">{text}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}