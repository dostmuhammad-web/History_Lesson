import Icon from './Icon';
import { navigate } from './router';
import { lessonsByCourse } from '../data/lessons';
import { questionsByCourse } from '../data/questions';

export default function CourseCard({ course, compact = false }) {
  const { id, title, short, icon, color, accent, period } = course;
  const lessonCount = lessonsByCourse(id).length;
  const questions = questionsByCourse(id).length;
  return (
    <article className="course-card" style={{ '--c': color, '--ca': accent }} onClick={() => navigate(`/course/${id}`)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && navigate(`/course/${id}`)}>
      <div className="course-card-head" style={{ color }}>
        <span className="course-card-icon" style={{ background: `${color}22`, border: `1px solid ${color}44` }}>
          <Icon name={icon} size={compact ? 26 : 34} />
        </span>
        <span className="course-card-num">#{id.split('-')[1]}</span>
      </div>
      <h3 className="course-card-title">{title}</h3>
      {!compact && <p className="course-card-sub">{short}</p>}
      <div className="course-card-meta">
        <span className="chip chip-lesson"><Icon name="book" size={13} /> {lessonCount} dars</span>
        <span className="chip chip-quiz"><Icon name="quiz" size={13} /> {questions} savol</span>
        {period && <span className="chip chip-period">{period}</span>}
      </div>
      <span className="course-card-link">O‘rganish <Icon name="chevronR" size={15} /></span>
    </article>
  );
}