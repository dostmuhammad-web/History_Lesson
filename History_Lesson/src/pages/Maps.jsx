import { PageHeader } from '../components/PageHeader';
import HistoricalMap from '../components/HistoricalMap';
import { maps } from '../data/maps';

export default function Maps() {
  return (
    <div className="page">
      <PageHeader icon="map" title="Xaritalar" subtitle={`${maps.length} ta sxematik xarita`} />
      <div className="grid maps-grid">
        {maps.map((m) => (
          <div key={m.id} className="card map-card">
            <h3>{m.title}</h3>
            {m.subtitle && <p className="muted">{m.subtitle}</p>}
            <HistoricalMap map={m} height={280} />
          </div>
        ))}
      </div>
    </div>
  );
}