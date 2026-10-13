import { useMemo, useState } from 'react';
import Icon from '../components/Icon';
import Quiz from '../components/Quiz';
import Timeline from '../components/Timeline';
import { lessonById, lessonNeighbors } from '../data/lessons';
import { questionsByCourse } from '../data/questions';
import { courseById } from '../data/courses';
import { useApp } from '../context/AppContext';
import { navigate } from '../components/router';
import NotFound from './NotFound';

export default function Lesson({ params }) {
  const lesson = lessonById(params.id);
  const { completeLesson, isLessonCompleted } = useApp();
  const [showQuiz, setShowQuiz] = useState(false);
  const [tab, setTab] = useState('simple');

  if (!lesson) return <NotFound />;

  const course = courseById(lesson.courseId);
  const neighbors = lessonNeighbors(lesson.id);
  const quizQs = useMemo(() => questionsByCourse(lesson.courseId), [lesson.courseId]);

  const markDone = () => completeLesson(lesson.id, 3);

  return (
    <div className="page lesson">
      <div className="lesson-hero" style={{ '--c': course?.color || '#8a3ffc' }}>
        <div className="lesson-hero-top">
          <button className="btn-text" onClick={() => navigate(`/course/${lesson.courseId}`)}>
            <Icon name="chevronL" size={14} /> {course?.title || lesson.courseId}
          </button>
          <div className="lesson-hero-stats">
            <span className="chip"><Icon name="book" size={13} /> Dars {lesson.order}</span>
            <span className="chip"><Icon name="clock" size={13} /> {lesson.period}</span>
          </div>
        </div>
        <h1>{lesson.title}</h1>
        <p className="lesson-goal">Maqsad: {lesson.goal}</p>
      </div>

      <div className="tabs">
        {[
          { id: 'simple', t: 'Oddiy tushuntirish' },
          { id: 'detailed', t: 'Batafsil' },
          { id: 'people', t: 'Shaxslar' },
          { id: 'dates', t: 'Sanalar' },
          { id: 'causes', t: 'Sabab/oqibat' },
          { id: 'timeline', t: 'Xronologiya' },
          { id: 'sources', t: 'Manbalar' },
          { id: 'terms', t: 'Terminlar' },
          { id: 'facts', t: 'Faktlar' },
          { id: 'analytical', t: 'Tahliliy savollar' },
          { id: 'summary', t: 'Xulosa' },
        ].map((t) => (
          <button key={t.id} className={`tab-btn ${tab === t.id ? 'active' : ''}`} onClick={() => setTab(t.id)}>
            {t.t}
          </button>
        ))}
      </div>

      {tab === 'simple' && (
        <section className="card">
          <p className="prose">{lesson.simple}</p>
          {lesson.context && <p className="prose muted">{lesson.context}</p>}
        </section>
      )}

      {tab === 'detailed' && (
        <section className="card">
          <ul className="list">
            {lesson.detailed?.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </section>
      )}

      {tab === 'people' && (
        <section className="card">
          <ul className="list">
            {lesson.people?.map((p, i) => (
              <li key={i}><b>{p.name}</b> — {p.note}</li>
            ))}
          </ul>
        </section>
      )}

      {tab === 'dates' && (
        <section className="card">
          <ul className="list">
            {lesson.dates?.map((d, i) => (
              <li key={i}><b>{d.year}</b> — {d.event}</li>
            ))}
          </ul>
        </section>
      )}

      {tab === 'causes' && (
        <section className="card">
          <div className="two-col">
            <div>
              <h3>Sabablari</h3>
              <ul className="list">{lesson.causes?.map((x, i) => <li key={i}>{x}</li>)}</ul>
            </div>
            <div>
              <h3>Oqibatlari</h3>
              <ul className="list">{lesson.effects?.map((x, i) => <li key={i}>{x}</li>)}</ul>
            </div>
          </div>
        </section>
      )}

      {tab === 'timeline' && (
        <section className="card">
          <Timeline items={lesson.timeline} />
        </section>
      )}

      {tab === 'sources' && (
        <section className="card">
          <ul className="list">
            {lesson.sources?.map((s, i) => (
              <li key={i}><b>{s.name}</b> — {s.note}</li>
            ))}
          </ul>
        </section>
      )}

      {tab === 'terms' && (
        <section className="card">
          <ul className="list">
            {lesson.terms?.map((t, i) => (
              <li key={i}><b>{t.term}</b> — {t.def}</li>
            ))}
          </ul>
        </section>
      )}

      {tab === 'facts' && (
        <section className="card">
          <ul className="list">{lesson.facts?.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </section>
      )}

      {tab === 'analytical' && (
        <section className="card">
          <ol className="list-ol">
            {lesson.analytical?.map((q, i) => <li key={i}>{q}</li>)}
          </ol>
        </section>
      )}

      {tab === 'summary' && (
        <section className="card">
          <p className="prose">{lesson.summary}</p>
          {lesson.mapNote && <p className="prose muted">Xaritaviy izoh: {lesson.mapNote}</p>}
          {lesson.homework && <div className="homework"><h3>Uy vazifasi</h3><p>{lesson.homework}</p></div>}
          {lesson.prep && <p className="prose muted">Preparat: {lesson.prep}</p>}
        </section>
      )}

      {!showQuiz && (
        <div className="lesson-actions">
          {!isLessonCompleted(lesson.id) && (
            <button className="btn btn-ghost" onClick={markDone}>
              Darsni yakunladim
            </button>
          )}
          {quizQs.length > 0 && (
            <button className="btn btn-primary" onClick={() => setShowQuiz(true)}>
              <Icon name="quiz" size={16} /> Darsga oid test ({quizQs.length} savol)
            </button>
          )}
          {neighbors.prev && (
            <button className="btn btn-ghost" onClick={() => navigate(`/lesson/${neighbors.prev}`)}>
              <Icon name="chevronL" size={14} /> Avvalgi dars
            </button>
          )}
          {neighbors.next && (
            <button className="btn btn-ghost" onClick={() => navigate(`/lesson/${neighbors.next}`)}>
              Keyingi dars <Icon name="chevronR" size={14} />
            </button>
          )}
        </div>
      )}

      {showQuiz && quizQs.length > 0 && (
        <Quiz questions={quizQs} title="Dars testi" onFinish={() => setShowQuiz(false)} />
      )}
    </div>
  );
}