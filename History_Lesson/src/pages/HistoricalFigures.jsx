import { PageHeader } from '../components/PageHeader';
import PersonCard from '../components/PersonCard';
import { figures } from '../data/historicalFigures';

export default function HistoricalFigures() {
  return (
    <div className="page">
      <PageHeader icon="person" title="Tarixiy shaxslar" subtitle={`${figures.length} ta shaxs`} />
      <div className="grid figures-grid">
        {figures.map((f) => <PersonCard key={f.id} figure={f} />)}
      </div>
    </div>
  );
}