export const comparisons = [
  {
    id: 'cmp-xatlik',
    title: 'Xatdor va xatsiz tarix',
    aspect: 'Tarixiy manba',
    left: { label: 'Yozma manbalar', icon: '📜', points: ['Sanalar va voqealar aniq', 'Muallif nuqtai nazari bor', 'Sifat yozuvchiga bog‘liq'] },
    right: { label: 'Og‘zaki va moddiy manbalar', icon: '🏺', points: ['Avlodlar xotirasida saqlanadi', 'Tahdid: ko‘chirish buziladi', 'Buyumlar bevosita dalil'] },
  },
  {
    id: 'cmp-inqilob',
    title: 'Inqilob va islohot',
    aspect: 'O‘zgarish uslubi',
    left: { label: 'Inqilob', icon: '⚡', points: ['Tub, keskin o‘zgarish', 'Ko‘pincha qurolli mojaro', 'Riski yuqori'] },
    right: { label: 'Islohot', icon: '🛠️', points: ['Bosqichma-bosqich', 'Eslik tizimni saqlaydi', 'Sust, lekin xavfsizroq'] },
  },
  {
    id: 'cmp-monarxiya',
    title: 'Monarxiya va respublika',
    aspect: 'Boshqaruv shakli',
    left: { label: 'Monarxiya', icon: '👑', points: ['Hukmdor meros orqali o‘tadi', 'Hokimiyat cheklangan/mutlaq', 'Barqarorlik, lekin shaxsiy'] },
    right: { label: 'Respublika', icon: '🗳️', points: ['Hukmdor saylanadi', 'Konstitutsiya chegarasi', 'Hisobdorlik, lekin saylovlar'] },
  },
  {
    id: 'cmp-feodal',
    title: 'Feodalizm va kapitalizm',
    aspect: 'Iqtisodiy tuzum',
    left: { label: 'Feodalizm', icon: '🏰', points: ['Erga egalik markazda', 'O‘zaro majburiyat', 'Yopiq xo‘jalik'] },
    right: { label: 'Kapitalizm', icon: '🏭', points: ['Kapital investitsiya', 'Erkin bozor', 'Sanoat ishlab chiqarish'] },
  },
  {
    id: 'cmp-imperiya',
    title: 'Imperiya va xonlik',
    aspect: 'Davlat tuzilishi',
    left: { label: 'Imperiya', icon: '🏛️', points: ['Ko‘p hududlarni birlashtiradi', 'Markazlashtirilgan boshqaruv', 'Katta harbiy kuch'] },
    right: { label: 'Xonlik', icon: '🏜️', points: ['Mahalliy boshqaruv kuchli', 'Sulolalar orasida raqobat', 'Ijtimoiy-madaniy meros'] },
  },
  {
    id: 'cmp-modern',
    title: 'XIX asr va XXI asr jamiyati',
    aspect: 'Ijtimoiy qiyofa',
    left: { label: 'XIX asr', icon: '🚂', points: ['Temir yo‘l va telegraf', 'Og‘ir jismoniy mehnat', 'Mahalliy bozorlar'] },
    right: { label: 'XXI asr', icon: '🌐', points: ['Internet va sun’iy intellekt', 'Avtomatlashtirish', 'Global integratsiya'] },
  },
];

export const comparisonById = (id) => comparisons.find((c) => c.id === id);
export default comparisons;