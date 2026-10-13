import { PageHeader } from '../components/PageHeader';
import Quiz from '../components/Quiz';
import { questions } from '../data/questions';
import { useMemo, useState } from 'react';
import Icon from '../components/Icon';

export default function Tests() {
  const [mode, setMode] = useState('mixed');
  const [count, setCount] = useState(15);
  const mixed = useMemo(() => questions.slice(), [questions]);
  const qs = useMemo(() => {
    if (mode === 'mixed') return mixed.sort(() => Math.random() - 0.5).slice(0, count);
    const filtered = questions.filter((q) => q.type === mode);
    return filtered.sort(() => Math.random() - 0.5).slice(0, Math.min(count, filtered.length));
  }, [mode, count, mixed]);

  return (
    <div className="page">
      <PageHeader icon="quiz" title="Test va imtihon" subtitle="Qisqa testlardan to‘liq imtihongacha" />
      <div className="card">
        <div className="toolbar">
          <select className="select" value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="mixed">Aralash</option>
            <option value="sana">Sana</option>
            <option value="shaxs">Shaxs</option>
            <option value="atama">Atama</option>
            <option value="sabab">Sabab-ogibat</option>
            <option value="tf">To‘g‘ri/noto‘g‘ri</option>
            <option value="kop">Bir nechta javob</option>
            <option value="tahlil">Tahlil</option>
          </select>
          <input className="select" type="number" min="5" max={qs.length || 40} value={count} onChange={(e) => setCount(Number(e.target.value) || 10)} />
          <span className="muted">{qs.length} savol tanlandi</span>
        </div>
      </div>
      <Quiz questions={qs} title="Umumiy test" />
      <div className="card">
        <div className="cta-row">
          <button className="btn btn-ghost" onClick={() => setMode('mixed')}>Yangi aralash test</button>
          <button className="btn btn-ghost" onClick={() => window.location.hash = '#exam'}>
            <Icon name="target" size={16} /> Imtihon rejimi
          </button>
        </div>
      </div>
    </div>
  );
}