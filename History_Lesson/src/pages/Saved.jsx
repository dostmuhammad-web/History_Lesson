import { PageHeader, EmptyHint } from '../components/PageHeader';
import { useApp } from '../context/AppContext';
import { lessonById } from '../data/lessons';
import LessonCard from '../components/LessonCard';

export default function Saved() {
  const { saved } = useApp();
  const items = saved.map((id) => lessonById(id)).filter(Boolean);

  return (
    <div className="page">
      <PageHeader icon="saved" title="Saqlangan darslar" subtitle={`${items.length} ta dars`} />
      {items.length === 0 ? (
        <EmptyHint icon="saved" text="Hozircha hech qanday dars saqlanmadi." />
      ) : (
        <div className="grid lessons-grid">
          {items.map((l) => <LessonCard key={l.id} lesson={l} color="#8a3ffc" />)}
        </div>
      )}
    </div>
  );
}