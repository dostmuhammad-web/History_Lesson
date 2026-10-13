import Icon from '../components/Icon';
import LessonCard from '../components/LessonCard';
import Timeline from '../components/Timeline';
import { courseById } from '../data/courses';
import { lessonsByCourse } from '../data/lessons';
import { questionsByCourse } from '../data/questions';
import { eventsByCourse } from '../data/historicalEvents';
import { figuresByCourse } from '../data/historicalFigures';
import { mapsByCourse } from '../data/maps';
import { useApp } from '../context/AppContext';
import { navigate } from '../components/router';
import NotFound from './NotFound';

export default function CourseDetail({ params }) {
  const course = courseById(params.id);
  const { isLessonCompleted, stats } = useApp();

  if (!course) return <NotFound />;

  const lessons = lessonsByCourse(course.id);
  const qs = questionsByCourse(course.id);
  const events = eventsByCourse(course.id);
  const figs = figuresByCourse(course.id);
  const maps = mapsByCourse(course.id);
  const doneCount = lessons.filter((l) => isLessonCompleted(l.id)).length;
  const percent = lessons.length ? Math.round((doneCount / lessons.length) * 100) : 0;

  return (
    <div className="page course-detail" style={{ '--c': course.color, '--ca': course.accent }}>
      <header className="course-hero" style={{ background: `linear-gradient(135deg, ${course.color}, ${course.color}cc)` }}>
        <div className="course-hero-icon">
          <Icon name={course.icon} size={44} />
        </div>
        <div className="course-hero-text">
          <span className="course-hero-num">Kurs {course.id.split('-')[1]}</span>
          <h1>{course.title}</h1>
          <p>{course.summary}</p>
          <div className="course-hero-meta">
            <span className="chip"><Icon name="book" size={13} /> {lessons.length} dars</span>
            <span className="chip"><Icon name="quiz" size={13} /> {qs.length} savol</span>
            <span className="chip"><Icon name="clock" size={13} /> {course.period}</span>
          </div>
        </div>
      </header>

      <div className="course-progress card">
        <div>
          <b>{percent}% yakunlandi</b>
          <span>{doneCount} / {lessons.length} dars</span>
        </div>
        <div className="progress-wrap"><div className="progress-track" style={{ height: 10 }}><div className="progress-fill" style={{ width: `${percent}%` }} /></div></div>
      </div>

      <section className="section">
        <h2 className="section-line">Mundarija</h2>
        <div className="grid lessons-grid">
          {lessons.map((l) => <LessonCard key={l.id} lesson={l} color={course.color} />)}
        </div>
      </section>

      {course.description && (
        <section className="section">
          <h2 className="section-line">Kurs haqida</h2>
          <p className="prose">{course.description}</p>
        </section>
      )}

      {events.length > 0 && (
        <section className="section">
          <h2 className="section-line"> Muhim voqealar</h2>
          <Timeline items={events.map((e) => ({ year: e.year, text: `${e.title} — ${e.description}`, icon: 'chevronR' }))} compact />
        </section>
      )}

      {figs.length > 0 && (
        <section className="section">
          <h2 className="section-line">Tarixiy shaxslar</h2>
          <div className="chips-wrap">
            {figs.map((f) => (
              <button key={f.id} className="figure-chip" onClick={() => navigate(`/figure/${f.id}`)}>
                <span>{f.emblem}</span> {f.name}
              </button>
            ))}
          </div>
        </section>
      )}

      {maps.length > 0 && (
        <section className="section">
          <h2 className="section-line">Xaritalar</h2>
          <div className="chips-wrap">
            {maps.map((m) => (
              <button key={m.id} className="figure-chip" onClick={() => navigate('/maps')}>
                <span>🗺️</span> {m.title}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <div className="cta-row">
          <button className="btn btn-primary" onClick={() => navigate(`/exam?course=${course.id}`)}>
            <Icon name="quiz" size={16} /> Kurs bo‘yicha test
          </button>
          {lessons[0] && (
            <button className="btn btn-ghost" onClick={() => navigate(`/lesson/${lessons[0].id}`)}>
              Birinchi darsdan boshlash
            </button>
          )}
        </div>
      </section>
    </div>
  );
}