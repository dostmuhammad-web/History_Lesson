import Icon from './Icon';
import Stars from './Stars';
import { navigate } from './router';
import { useApp } from '../context/AppContext';

export default function LessonCard({ lesson, color = '#8a3ffc' }) {
  const { isLessonCompleted, saved, toggleSave } = useApp();
  const done = isLessonCompleted(lesson.id);
  const isSaved = saved.includes(lesson.id);

  return (
    <article className={`lesson-card ${done ? 'done' : ''}`} onClick={() => navigate(`/lesson/${lesson.id}`)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && navigate(`/lesson/${lesson.id}`)} style={{ '--c': color }}>
      <div className="lesson-card-top">
        <span className="lesson-num" style={{ background: `${color}22`, color }}>Dars {lesson.order}</span>
        <button
          className={`icon-btn save-btn ${isSaved ? 'saved' : ''}`}
          aria-label={isSaved ? 'Saqlashdan olib tashlash' : 'Saqlash'}
          onClick={(e) => {
            e.stopPropagation();
            toggleSave(lesson.id);
          }}
        >
          <Icon name="saved" size={17} />
        </button>
      </div>
      <h3 className="lesson-card-title">{lesson.title}</h3>
      <p className="lesson-card-goal">{lesson.goal}</p>
      <div className="lesson-card-meta">
        <span className="chip chip-period">{lesson.period}</span>
        {done && <Stars count={3} size={14} />}
      </div>
    </article>
  );
}