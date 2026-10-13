import Icon from './Icon';
import { navigate } from './router';

export default function PersonCard({ figure, color = '#8a3ffc' }) {
  return (
    <article className="person-card" style={{ '--c': color }} onClick={() => navigate(`/figure/${figure.id}`)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && navigate(`/figure/${figure.id}`)}>
      <div className="person-emblem" style={{ background: `${color}22`, border: `1px solid ${color}44` }}>
        {figure.emblem || <Icon name="person" size={30} />}
      </div>
      <h3 className="person-name">{figure.name}</h3>
      <p className="person-years">{figure.years} · {figure.region}</p>
      <p className="person-role">{figure.role}</p>
      <p className="person-bio">{figure.bio}</p>
      {figure.achievements && (
        <ul className="person-ach">
          {(figure.achievements || []).slice(0, 2).map((a, i) => (
            <li key={i}><Icon name="check" size={12} /> {a}</li>
          ))}
        </ul>
      )}
    </article>
  );
}