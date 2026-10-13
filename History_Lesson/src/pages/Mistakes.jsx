import { PageHeader, EmptyHint } from '../components/PageHeader';
import { useApp } from '../context/AppContext';
import { questionById } from '../data/questions';

export default function Mistakes() {
  const { mistakes, clearMistakes } = useApp();
  const items = mistakes.map((m) => ({ m, q: questionById(m.questionId) })).filter((x) => x.q);

  return (
    <div className="page">
      <PageHeader icon="mistakes" title="Xatolarim" subtitle={`${items.length} ta qayd`}>
        {items.length > 0 && (
          <button className="btn btn-ghost" onClick={clearMistakes}>Tozalash</button>
        )}
      </PageHeader>
      {items.length === 0 ? (
        <EmptyHint icon="mistakes" text="Hech qanday xato qayd qilinmagan." />
      ) : (
        <div className="list-cards">
          {items.map((item) => {
            const q = item.q;
            const exp = Array.isArray(q.answer) ? q.answer : [q.answer];
            return (
              <article key={item.m.questionId} className="list-card">
                <h3>{q.q}</h3>
                <p className="muted">Kurs: {q.courseId} • {q.type}</p>
                <div className="chips-wrap">
                  {q.options.map((opt, i) => (
                    <span key={i} className={`figure-chip ${exp.includes(i) ? 'ok' : ''}`}>{String.fromCharCode(65 + i)}. {opt}</span>
                  ))}
                </div>
                {q.explanation && <p className="prose">Izoh: {q.explanation}</p>}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}