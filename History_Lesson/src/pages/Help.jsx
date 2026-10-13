import { PageHeader } from '../components/PageHeader';

export default function Help() {
  return (
    <div className="page">
      <PageHeader icon="help" title="Yordam" subtitle="Ilovadan foydalanish bo‘yicha qo‘llanma" />
      <div className="card">
        <h3>Nima uchun TARIX OLAMI?</h3>
        <p className="prose">
          Tarixni interaktiv tarzda — kurslar, darslar, testlar va xaritalar orqali o‘rganasiz.
          Har bir darsda oddiy va batafsil tushuntirish, shaxslar, sanalar, sabab-oqibatlar,
          xronologiya va tahliliy savollar berilgan.
        </p>
      </div>
      <div className="card">
        <h3>Qanday o‘rganish tavsiya etiladi?</h3>
        <ol className="list-ol">
          <li><b>Bosh sahifa</b> — davr va tanlangan kurslarni ko‘ring.</li>
          <li><b>Kurslar</b> — kerakli kursni tanlang va mundarijani ko‘rib chiqing.</li>
          <li><b>Dars</b> — «Oddiy» bo‘limdan boshlang, keyin «Batafsil» va «Xulosa» ni o‘qing.</li>
          <li><b>Test</b> — har bir dars oxirida test yeching, xatolarni «Xatolarim» bo‘limida tekshiring.</li>
          <li><b>Statistika</b> — taraqqiyotingizni kuzating.</li>
        </ol>
      </div>
      <div className="card">
        <h3>Qisqartmalar</h3>
        <ul className="list">
          <li><b>Saqlangan</b> — kerakli darslarni ustiga bosib «Saqlash» tugmasi orqali qo‘shing.</li>
          <li><b>Xatolarim</b> — noto‘g‘ri javoblar avtomatik saqlanadi.</li>
          <li><b>Tema</b> — yuqori o‘ngdagi oynacha tugmasi orqali qorong‘i/yorug‘ rejim.</li>
        </ul>
      </div>
    </div>
  );
}