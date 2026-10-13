import { routes, navigate } from './router';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-logo" aria-hidden="true">🏛️</span>
          <span className="footer-title">TARIX OLAMI</span>
        </div>
        <p className="footer-desc">
          Tarixni interaktiv o‘rganish — 16 kurs, 40 dars, 500+ savol. Barcha ma’lumotlar
          ta’limiy maqsadda tayyorlangan.
        </p>
        <div className="footer-links">
          <button onClick={() => navigate(routes.help)}>Yordam</button>
          <button onClick={() => navigate(routes.stats)}>Statistika</button>
          <button onClick={() => navigate(routes.sources)}>Manbalar</button>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} TARIX OLAMI. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
}