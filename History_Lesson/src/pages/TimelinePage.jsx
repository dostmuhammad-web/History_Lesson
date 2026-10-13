import { PageHeader } from '../components/PageHeader';
import { periods } from '../data/periods';
import Timeline from '../components/Timeline';
import { events } from '../data/historicalEvents';

export default function TimelinePage() {
  const items = events
    .slice()
    .sort((a, b) => {
      const ya = typeof a.year === 'string' ? a.year : String(a.year);
      const yb = typeof b.year === 'string' ? b.year : String(b.year);
      const numA = parseFloat(ya.replace(/[^0-9\-+\.]/g, ''));
      const numB = parseFloat(yb.replace(/[^0-9\-+\.]/g, ''));
      if (Number.isNaN(numA) || Number.isNaN(numB)) return ya.localeCompare(yb);
      return numA - numB;
    })
    .slice(0, 80);

  return (
    <div className="page">
      <PageHeader icon="timeline" title="Xronologiya" subtitle="Muhim voqealar ro‘yxati" />
      <div className="card">
        <Timeline items={items.map((e) => ({ year: e.year, text: `${e.title} — ${e.description}`, icon: 'clock' }))} />
      </div>
      <div className="chips-wrap">
        {periods.map((p) => (
          <span key={p.id} className="figure-chip" style={{ background: `${p.color}22` }}>
            {p.title} • {p.range}
          </span>
        ))}
      </div>
    </div>
  );
}