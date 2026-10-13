import { PageHeader } from '../components/PageHeader';

export default function NotFound() {
  return (
    <div className="page">
      <PageHeader icon="x" title="Sahifa topilmadi" subtitle="Bunday sahifa mavjud emas yoki o‘chirilgan." />
      <div className="card">
        <p className="prose">
          Bosh sahifaga qaytish orqali boshqa bo‘limlarni tanlashingiz mumkin.
        </p>
      </div>
    </div>
  );
}