import { PageHeader } from '../components/PageHeader';
import { useApp } from '../context/AppContext';
import ProgressBar from '../components/ProgressBar';
import { courses } from '../data/courses';
import { lessons } from '../data/lessons';
import { navigate } from '../components/router';
import LessonCard from '../components/LessonCard';

export default function Dashboard() {
  const { stats, progress, saved } = useApp();
  const savedItems = saved.map((id) => lessons.find((l) => l.id === id)).filter(Boolean).slice(0, 6);
  const recent = Object.entries(progress)
    .filter(([, v]) => v.lastDate)
    .sort((a, b) => new Date(b[1].lastDate) - new Date(a[1].lastDate))
    .slice(0, 6)
    .map(([id]) => lessons.find((l) => l.id === id))
    .filter(Boolean);

  return (
    <div className="page">
      <PageHeader icon="stats" title="Shaxsiy kabinet" subtitle="Sizning taraqqiyotingiz" />
      <div className="card dashboard-hero">
        <div>
          <h2>Salom, tarixchi!</h2>
          <p>Siz {stats.completedCount} / {stats.totalLessons} darsni yakunladingiz.</p>
          <ProgressBar percent={stats.percent} height={12} showLabel />
        </div>
        <div className="dashboard-badges">
          <span className="badge">🏆 {stats.totalStars} yulduz</span>
          <span className="badge">📚 {courses.length} kurs</span>
        </div>
      </div>
      <section className="section">
        <h3>Oxirgi faoliyat</h3>
        {recent.length === 0 ? (
          <p className="muted">Hozircha faoliyat yo‘q.</p>
        ) : (
          <div className="grid lessons-grid">
            {recent.map((l) => <LessonCard key={l.id} lesson={l} color="#1f3a5f" />)}
          </div>
        )}
      </section>
      <section className="section">
        <h3>Saqlangan darslar</h3>
        {savedItems.length === 0 ? (
          <p className="muted">Saqlangan darslar yo‘q.</p>
        ) : (
          <div className="grid lessons-grid">
            {savedItems.map((l) => <LessonCard key={l.id} lesson={l} color="#8a3ffc" />)}
          </div>
        )}
      </section>
      <section className="section">
        <div className="cta-row">
          <button className="btn btn-primary" onClick={() => navigate('/courses')}>Kurslarni davom ettirish</button>
          <button className="btn btn-ghost" onClick={() => navigate('/tests')}>Test yechish</button>
        </div>
      </section>
    </div>
  );
}