import { PageHeader } from '../components/PageHeader';
import { glossary } from '../data/glossary';

export default function Dictionary() {
  return (
    <div className="page">
      <PageHeader icon="dict" title="Lug‘at" subtitle={`${glossary.length} ta atama`} />
      <div className="grid cards-grid">
        {glossary.map((g) => (
          <article key={g.id} className="card glossary-card">
            <h3>{g.term}</h3>
            <p className="muted">{g.short}</p>
            <p className="prose">{g.definition}</p>
            {g.example && <blockquote className="quote">{g.example}</blockquote>}
            {g.related && <div className="chips-wrap">{g.related.map((r) => <span key={r} className="figure-chip">{r}</span>)}</div>}
          </article>
        ))}
      </div>
    </div>
  );
}