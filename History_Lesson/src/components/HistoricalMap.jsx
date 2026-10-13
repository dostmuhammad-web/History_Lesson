export default function HistoricalMap({ map, height = 320 }) {
  if (!map) return <p className="empty-hint">Xarita ma’lumoti topilmadi.</p>;
  return (
    <div className="hist-map" style={{ height, background: map.gradient || 'var(--bg-card)', '--map-card': 'rgba(255,255,255,.85)', '--map-dot': '#8a3ffc' }}>
      <div className="map-mesh" aria-hidden="true" />
      <svg className="map-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id={`mg-${map.id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d="M0 30 C20 10, 80 10, 100 30 L100 70 C80 90, 20 90, 0 70 Z" fill={`url(#mg-${map.id})`} />
      </svg>
      {map.points.map((pt, i) => (
        <div
          key={i}
          className="map-point"
          style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
        >
          <span className="map-dot" />
          <span className="map-label">{pt.label}</span>
        </div>
      ))}
      <div className="map-caption">{map.title} {map.subtitle ? `— ${map.subtitle}` : ''}</div>
      {map.note && <div className="map-note">{map.note}</div>}
    </div>
  );
}