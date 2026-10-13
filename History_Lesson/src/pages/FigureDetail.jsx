import Icon from '../components/Icon';
import { figureById } from '../data/historicalFigures';
import { courseById } from '../data/courses';
import { navigate } from '../components/router';
import NotFound from './NotFound';

export default function FigureDetail({ params }) {
  const fig = figureById(params.id);
  if (!fig) return <NotFound />;

  const courses = (fig.courses || []).map(courseById).filter(Boolean);

  return (
    <div className="page">
      <div className="lesson-hero" style={{ '--c': '#8a3ffc' }}>
        <div className="lesson-hero-top">
          <button className="btn-text" onClick={() => navigate('/figures')}>
            <Icon name="chevronL" size={14} /> Barcha shaxslar
          </button>
        </div>
        <div className="figure-head">
          <span className="figure-emblem-lg">{fig.emblem}</span>
          <div>
            <h1>{fig.name}</h1>
            <p>{fig.years} · {fig.region} · {fig.role}</p>
          </div>
        </div>
      </div>
      <div className="card">
        <h3>Hayoti va faoliyati</h3>
        <p className="prose">{fig.bio}</p>
        {fig.achievements && (
          <>
            <h4>Asosiy yutuqlari</h4>
            <ul className="list">
              {fig.achievements.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </>
        )}
      </div>
      {courses.length > 0 && (
        <section className="card">
          <h3>Mavjud kurslarda</h3>
          <div className="chips-wrap">
            {courses.map((c) => (
              <button key={c.id} className="figure-chip" onClick={() => navigate(`/course/${c.id}`)}>
                <Icon name={c.icon} size={14} /> {c.title}
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}