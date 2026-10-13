import { useState } from 'react';
import Icon from './Icon';
import { useApp } from '../context/AppContext';
import { navigate } from './router';

export default function Header({ onMenu }) {
  const { theme, toggleTheme } = useApp();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setOpen(false);
  };

  return (
    <header className="header">
      <button className="icon-btn menu-btn" aria-label="Menyu" onClick={onMenu}>
        <Icon name="menu" />
      </button>

      <button className="brand" onClick={() => navigate('/')}>
        <span className="brand-logo" aria-hidden="true">🏛️</span>
        <span className="brand-text">
          <span className="brand-title">TARIX OLAMI</span>
          <span className="brand-sub">Interaktiv tarix ta’limi</span>
        </span>
      </button>

      <form className={`search-form ${open ? 'open' : ''}`} role="search" onSubmit={submitSearch}>
        <button type="submit" className="icon-btn" aria-label="Qidirish">
          <Icon name="search" />
        </button>
        <input
          className="search-input"
          placeholder="Kurs, dars, shaxs yoki atama…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Qidiruv"
        />
      </form>

      <div className="header-actions">
        <button
          className={`icon-btn search-toggle ${open ? 'active' : ''}`}
          aria-label="Qidiruvni ochish"
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name="search" />
        </button>
        <button className="icon-btn" aria-label="Tema" onClick={toggleTheme}>
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
        </button>
      </div>
    </header>
  );
}