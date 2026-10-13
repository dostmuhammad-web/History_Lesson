import { PageHeader } from '../components/PageHeader';
import { useApp } from '../context/AppContext';

export default function Settings() {
  const { theme, toggleTheme, settings, setSettings, resetProgress } = useApp();

  return (
    <div className="page">
      <PageHeader icon="settings" title="Sozlamalar" subtitle="Ilova sozlamalari" />
      <div className="card">
        <h3>Ko‘rinish</h3>
        <div className="setting-row">
          <div>
            <b>Tema</b>
            <p className="muted">{theme === 'dark' ? 'Qorong‘i rejim' : 'Yorug‘ rejim'}</p>
          </div>
          <button className="btn btn-ghost" onClick={toggleTheme}>
            {theme === 'dark' ? 'Yorug‘ga o‘tish' : 'Qorong‘iga o‘tish'}
          </button>
        </div>
        <div className="setting-row">
          <div>
            <b>Shrift hajmi</b>
            <p className="muted">{settings.fontSize}px</p>
          </div>
          <div className="btn-group">
            {[14, 16, 18, 20].map((n) => (
              <button
                key={n}
                className={`btn ${settings.fontSize === n ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setSettings((s) => ({ ...s, fontSize: n }))}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="card">
        <h3>Ma’lumotlar</h3>
        <div className="setting-row">
          <div>
            <b>Progressni tozalash</b>
            <p className="muted">Yakunlangan darslar, test natijalari, xatolar o‘chib ketadi.</p>
          </div>
          <button className="btn btn-danger" onClick={() => { if (confirm('Progressni butunlay tozalashni xohlaysizmi?')) resetProgress(); }}>
            Tozalash
          </button>
        </div>
      </div>
    </div>
  );
}