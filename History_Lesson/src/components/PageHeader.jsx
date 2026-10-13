import Icon from './Icon';

export function PageHeader({ icon = 'book', title, subtitle, children }) {
  return (
    <div className="page-head">
      <div className="page-head-title">
        <span className="page-head-icon"><Icon name={icon} /></span>
        <div>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
      {children && <div className="page-head-actions">{children}</div>}
    </div>
  );
}

export function EmptyHint({ icon = 'book', text }) {
  return (
    <div className="empty-hint-box">
      <Icon name={icon} size={40} />
      <p>{text}</p>
    </div>
  );
}