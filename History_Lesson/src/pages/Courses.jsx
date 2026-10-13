import { useMemo, useState } from 'react';
import CourseCard from '../components/CourseCard';
import { PageHeader } from '../components/PageHeader';
import { courses } from '../data/courses';

export default function Courses() {
  const [q, setQ] = useState('');
  const [period, setPeriod] = useState('all');

  const periods = useMemo(() => [...new Set(courses.map((c) => c.period).filter(Boolean))], []);

  const filtered = courses.filter((c) => {
    const okP = period === 'all' || c.period === period;
    const okQ = !q || c.title.toLowerCase().includes(q.toLowerCase()) || c.short.toLowerCase().includes(q.toLowerCase()) || c.tags.join(' ').toLowerCase().includes(q.toLowerCase());
    return okP && okQ;
  });

  return (
    <div className="page">
      <PageHeader icon="courses" title="Kurslar" subtitle={`${courses.length} ta kurs, ${filtered.length} ko‘rsatilmoqda`} />
      <div className="toolbar">
        <input className="search-input wide" placeholder="Kurs qidirish…" value={q} onChange={(e) => setQ(e.target.value)} />
        <select className="select" value={period} onChange={(e) => setPeriod(e.target.value)} aria-label="Davr bo‘yicha filter">
          <option value="all">Barcha davrlar</option>
          {periods.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>
      <div className="grid courses-grid">
        {filtered.map((c) => <CourseCard key={c.id} course={c} />)}
      </div>
      {filtered.length === 0 && <p className="empty-hint">Hech narsa topilmadi. Qidiruvni o‘zgartiring.</p>}
    </div>
  );
}