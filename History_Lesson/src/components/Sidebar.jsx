import Icon from './Icon';
import { useApp } from '../context/AppContext';
import { routes, navigate, useRoute } from './router';

const MENU = [
  { to: routes.home, icon: 'home', label: 'Bosh sahifa' },
  { to: routes.courses, icon: 'courses', label: 'Kurslar' },
  { to: routes.dashboard, icon: 'stats', label: 'Shaxsiy kabinet' },
  { to: routes.timeline, icon: 'timeline', label: 'Xronologiya' },
  { to: routes.figures, icon: 'person', label: 'Shaxslar' },
  { to: routes.maps, icon: 'map', label: 'Xaritalar' },
  { to: routes.sources, icon: 'book', label: 'Manbalar' },
  { to: routes.dictionary, icon: 'dict', label: 'Lug‘at' },
  { to: routes.compare, icon: 'compare', label: 'Taqqoslash' },
  { to: routes.tests, icon: 'quiz', label: 'Test va imtihon' },
  { to: routes.saved, icon: 'saved', label: 'Saqlangan' },
  { to: routes.mistakes, icon: 'mistakes', label: 'Xatolarim' },
  { to: routes.stats, icon: 'target', label: 'Statistika' },
  { to: routes.settings, icon: 'settings', label: 'Sozlamalar' },
  { to: routes.help, icon: 'help', label: 'Yordam' },
];

function isActive(to, path) {
  return to === '/' ? path === '/' || path === '' : path === to || path.startsWith(`${to}/`);
}

export default function Sidebar({ open, onClose }) {
  const { path } = useRoute();
  const { stats } = useApp();

  return (
    <>
      {open && <div className="scrim" onClick={onClose} />}
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-head">
          <span className="sidebar-logo" aria-hidden="true">🏛️</span>
          <span className="sidebar-title">TARIX OLAMI</span>
        </div>
        <nav className="sidebar-nav">
          {MENU.map((item) => (
            <button
              key={item.to}
              className={`nav-item ${isActive(item.to, path) ? 'active' : ''}`}
              onClick={() => {
                navigate(item.to);
                onClose();
              }}
            >
              <Icon name={item.icon} size={19} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-foot">
          <div className="mini-progress">
            <span className="mini-progress-label">
              Umumiy taraqqiyot: {stats.percent}%
            </span>
            <div className="progress-wrap"><div className="progress-track" style={{ height: 7 }}><div className="progress-fill" style={{ width: `${stats.percent}%` }} /></div></div>
          </div>
          <p className="sidebar-tip">Kursni boshlash uchun «Kurslar» bo‘limiga o‘ting.</p>
        </div>
      </aside>
    </>
  );
}