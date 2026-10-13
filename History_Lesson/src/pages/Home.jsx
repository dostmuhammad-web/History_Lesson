import Icon from '../components/Icon';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import { periods } from '../data/periods';
import { lessons } from '../data/lessons';
import { questions } from '../data/questions';
import { useApp } from '../context/AppContext';
import { routes, navigate } from '../components/router';

export default function Home() {
  const { stats } = useApp();
  const featured = courses.slice(0, 4);
  const firstLesson = lessons[0];

  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-kicker">Interaktiv tarix ta’lim platformasi</span>
          <h1 className="hero-title">
            Tarixni <span>o‘rgana</span>,<br /> zamonni <span>anglang</span>
          </h1>
          <p className="hero-sub">
            16 kurs, 40 dars va 500+ savol — qadimgi sivilizatsiyalardan zamonaviy O‘zbekistongacha.
            Har bir mavzuni interaktiv tarzda, tahlil va test bilan o‘rganing.
          </p>
          <div className="hero-actions">
            <button className="btn btn-gold" onClick={() => navigate(routes.courses)}>
              Kurslarni boshlash <Icon name="chevronR" size={16} />
            </button>
            <button className="btn btn-ghost" onClick={() => navigate(routes.tests)}>
              Test yechish
            </button>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-orb">🏛️</div>
          <div className="hero-pillar">🕌</div>
          <div className="hero-pyramid">🏜️</div>
        </div>
      </section>

      <section className="stat-strip">
        {[
          { n: courses.length, l: 'kurs' },
          { n: lessons.length, l: 'dars' },
          { n: questions.length, l: 'savol' },
          { n: periods.length, l: 'davr' },
        ].map((s) => (
          <div className="stat-box" key={s.l}>
            <b>{s.n}</b>
            <span>{s.l}</span>
          </div>
        ))}
      </section>

      {stats.completedCount > 0 && (
        <section className="section continue-section">
          <div className="section-head">
            <h2>Davom eting</h2>
            <span className="section-badge">{stats.percent}% bajarildi</span>
          </div>
          <div className="continue-card">
            <p>
              {stats.completedCount} / {stats.totalLessons} dars yakunladingiz. Davom eting yoki
              yangi kursni tanlang.
            </p>
            <button className="btn btn-primary" onClick={() => navigate(routes.dashboard)}>
              Kabinetga o‘tish
            </button>
          </div>
        </section>
      )}

      <section className="section">
        <div className="section-head">
          <h2>Davrlar bo‘yicha</h2>
          <button className="btn-text" onClick={() => navigate(routes.periods)}>Barchasi</button>
        </div>
        <div className="period-chips">
          {periods.map((p) => (
            <button
              key={p.id}
              className="period-chip"
              style={{ '--pc': p.color }}
              onClick={() => navigate(`/search?period=${p.id}`)}
            >
              <span className="period-chip-title">{p.title}</span>
              <span className="period-chip-range">{p.range}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Tanlangan kurslar</h2>
          <button className="btn-text" onClick={() => navigate(routes.courses)}>
            Barcha kurslar <Icon name="chevronR" size={14} />
          </button>
        </div>
        <div className="grid courses-grid">
          {featured.map((c) => <CourseCard key={c.id} course={c} compact />)}
        </div>
      </section>

      {firstLesson && (
        <section className="section">
          <div className="section-head">
            <h2>Birinchi dars</h2>
          </div>
          <div className="quote-baner">
            <Icon name="book" size={26} />
            <p>{firstLesson.title}</p>
            <button className="btn btn-primary" onClick={() => navigate(`/lesson/${firstLesson.id}`)}>
              O‘qish
            </button>
          </div>
        </section>
      )}
    </div>
  );
}