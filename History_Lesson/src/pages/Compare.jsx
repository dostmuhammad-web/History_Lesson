import { PageHeader } from '../components/PageHeader';
import { comparisons } from '../data/comparisons';

export default function Compare() {
  return (
    <div className="page">
      <PageHeader icon="compare" title="Taqqoslash" subtitle={`${comparisons.length} ta taqqoslama`} />
      <div className="grid compare-grid">
        {comparisons.map((c) => (
          <article key={c.id} className="card compare-card">
            <div className="compare-head">
              <h3>{c.title}</h3>
              <span className="chip">{c.aspect}</span>
            </div>
            <div className="compare-row">
              <div className="compare-side left">
                <div className="compare-side-head">
                  <span className="compare-emoji">{c.left.icon}</span>
                  <b>{c.left.label}</b>
                </div>
                <ul className="list">{(c.left.points || []).map((p, i) => <li key={i}>{p}</li>)}</ul>
              </div>
              <div className="compare-side right">
                <div className="compare-side-head">
                  <span className="compare-emoji">{c.right.icon}</span>
                  <b>{c.right.label}</b>
                </div>
                <ul className="list">{(c.right.points || []).map((p, i) => <li key={i}>{p}</li>)}</ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}