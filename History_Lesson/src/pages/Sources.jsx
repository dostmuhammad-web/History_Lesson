import { PageHeader } from '../components/PageHeader';
import { sources } from '../data/sources';

export default function Sources() {
  return (
    <div className="page">
      <PageHeader icon="book" title="Manbalar" subtitle={`${sources.length} ta manba`} />
      <div className="list-cards">
        {sources.map((s) => (
          <article key={s.id} className="list-card">
            <h3>{s.title}</h3>
            <div className="list-card-meta">
              <span className="chip">{s.type}</span>
              <span className="chip">{s.region}</span>
              <span className="chip">{s.period}</span>
              <span className="chip">{s.language}</span>
            </div>
            <p className="prose">{s.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}