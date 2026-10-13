import Icon from './Icon';

export default function Stars({ count = 0, max = 3, size = 18 }) {
  return (
    <span className="stars" aria-label={`${count}/${max} yulduz`}>
      {Array.from({ length: max }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          size={size}
          className={i < count ? 'star filled' : 'star'}
        />
      ))}
    </span>
  );
}