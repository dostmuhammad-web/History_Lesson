import { PageHeader } from '../components/PageHeader';
import ProgressBar from '../components/ProgressBar';
import { useApp } from '../context/AppContext';
import { lessons } from '../data/lessons';
import { courses } from '../data/courses';
import { questions } from '../data/questions';

export default function Stats() {
  const { stats, quizResults, progress } = useApp();
  const completedMap = progress;
  const lessonList = lessons;

  const perCourse = courses.map((c) => {
    const ls = lessonList.filter((l) => l.courseId === c.id);
    const done = ls.filter((l) => completedMap[l.id]?.completed).length;
    const pct = ls.length ? Math.round((done / ls.length) * 100) : 0;
    return { ...c, total: ls.length, done, pct };
  });

  const best = quizResults.reduce((b, r) => {
    const p = r.total ? r.correct / r.total : 0;
    const bp = b && b.total ? b.correct / b.total : -1;
    return p > bp ? r : b;
  }, null);

  return (
    <div className="page">
      <PageHeader icon="target" title="Statistika" subtitle="O‘z yutuqlaringiz" />
      <div className="grid stat-grid">
        {[
          { t: 'Umumiy darslar', v: stats.totalLessons, sub: `${stats.completedCount} yakunlangan` },
          { t: 'Taraqqiyot', v: `${stats.percent}%`, sub: 'bajarildi' },
          { t: 'Yulduzlar', v: stats.totalStars, sub: 'to‘plangan' },
          { t: 'Savollar', v: questions.length, sub: 'baza' },
        ].map((s) => (
          <div key={s.t} className="stat-card">
            <b>{s.v}</b>
            <span>{s.t}</span>
            <p className="muted">{s.sub}</p>
          </div>
        ))}
      </div>
      <div className="card">
        <h3>Kurslar bo‘yicha taraqqiyot</h3>
        {perCourse.map((pc) => (
          <div key={pc.id} className="course-progress-row">
            <div>
              <b>{pc.title}</b>
              <span className="muted">{pc.done}/{pc.total} dars</span>
            </div>
            <ProgressBar percent={pc.pct} height={9} showLabel />
          </div>
        ))}
      </div>
      <div className="card">
        <h3>Test natijalari</h3>
        {quizResults.length === 0 ? (
          <p className="muted">Hozircha test natijalari yo‘q.</p>
        ) : (
          <ul className="list">
            {quizResults.slice(-10).reverse().map((r, i) => (
              <li key={i}>
                {r.date?.slice(0, 16)} — <b>{r.title}</b>: {r.correct}/{r.total} ({Math.round((r.correct / r.total) * 100)}%)
              </li>
            ))}
          </ul>
        )}
        {best && (
          <p className="muted">Eng yaxshi natija: {best.correct}/{best.total} ({Math.round((best.correct / best.total) * 100)}%)</p>
        )}
      </div>
    </div>
  );
}