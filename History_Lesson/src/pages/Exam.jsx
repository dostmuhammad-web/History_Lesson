import { PageHeader } from '../components/PageHeader';
import Quiz from '../components/Quiz';
import { questions } from '../data/questions';
import { courses } from '../data/courses';
import { useMemo, useState } from 'react';

export default function Exam() {
  const [courseId, setCourseId] = useState('all');
  const [count, setCount] = useState(25);
  const qs = useMemo(() => {
    let pool = courseId === 'all' ? questions.slice() : questions.filter((q) => q.courseId === courseId);
    pool = pool.sort(() => Math.random() - 0.5).slice(0, count);
    return pool;
  }, [courseId, count]);

  return (
    <div className="page">
      <PageHeader icon="target" title="Imtihon rejimi" subtitle="Katta hajmdagi test — 25 savol" />
      <div className="card">
        <div className="toolbar">
          <select className="select" value={courseId} onChange={(e) => setCourseId(e.target.value)}>
            <option value="all">Barcha kurslar</option>
            {courses.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
          </select>
          <input className="select" type="number" min="10" max={50} value={count} onChange={(e) => setCount(Number(e.target.value) || 25)} />
        </div>
      </div>
      <Quiz questions={qs} title="Imtihon" />
    </div>
  );
}