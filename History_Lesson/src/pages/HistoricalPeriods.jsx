import { PageHeader } from '../components/PageHeader';
import { periods } from '../data/periods';

export default function HistoricalPeriods() {
  return (
    <div className="page">
      <PageHeader icon="clock" title="Tarixiy davrlar" subtitle={`${periods.length} ta davr`} />
      <div className="grid cards-grid">
        {periods.map((p) => (
          <article key={p.id} className="card period-card" style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}99)` }}>
            <h3>{p.title}</h3>
            <p className="muted">{p.range}</p>
            <p className="prose">{p.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}