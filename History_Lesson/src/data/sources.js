export const sources = [
  { id: 'src-avesto', title: '«Avesto»', type: 'Diniy kitob', region: 'Eron va Markaziy Osiyo', period: 'Mil. avv. I mingyillik', language: 'Avesto tili', description: 'Zardushtiylik muqaddas kitobi; sak-massaget va xorazm haqida ma’lumot beradi.' },
  { id: 'src-shohnoma', title: '«Shohnoma»', type: 'Doston', region: 'Fors-tojik adabiyoti', period: 'X-XI asrlar', language: 'Fors tili', description: 'Firdavsiy asari; qadimgi Eron va turkiy qahramonlar tarixi haqida.' },
  { id: 'src-boburnoma', title: '«Boburnoma»', type: 'Memuar', region: 'Movarounnahr/Hindiston', period: 'XVI asr', language: 'Chig‘atoy turkiy tili', description: 'Boburning o‘zi yozgan tarixiy-memuar asar; siyosiy va madaniy manba.' },
  { id: 'src-tuzuklar', title: '«Tuzuklar»', type: 'Davlatnoma', region: 'Samarqand', period: 'XIV-XV asrlar', language: 'Fors tili', description: 'Amir Temur davlati boshqaruv tamoyillari (ko‘plab manbalarda aks etgan).' },
  { id: 'src-beruniy', title: 'Beruniy asarlari', type: 'Ilmiy', region: 'Xorazm', period: 'X-XI asrlar', language: 'Arab tili', description: '«Qadingi xalqlardan qolgan yodgorliklar» va «Hindiston» asarlari.' },
  { id: 'src-tib', title: '«Tib qonunlari»', type: 'Ilmiy', region: 'Buxoro', period: 'XI asr', language: 'Arab tili', description: 'Ibn Sino asari; tibbiyot fani tarixida muhim darslik.' },
  { id: 'src-munozara', title: '«Munozara»', type: 'Adabiy-publitsistik', region: 'Buxoro', period: 'XX asr boshi', language: 'Chig‘atoy turkiy tili', description: 'Fitratning ma’rifatparvarlik asari; jadid g‘oyalarini ifodalaydi.' },
  { id: 'src-uvaysiy', title: 'Uvaysiy she’rlari', type: 'She’riy to‘plam', region: 'Qo‘qon', period: 'XIX asr', language: 'Chig‘atoy turkiy tili', description: 'O‘zbek ayol shoirasi ijodi; davr madaniy hayotini ko‘rsatadi.' },
  { id: 'src-hammurapi', title: 'Hammurapi qonunlari', type: 'Huquqiy hujjat', region: 'Bobil', period: 'Mil. avv. XVIII asr', language: 'Akkad tili', description: 'Jinoiy-huquqiy qoidalarni kodeks orqali tartibga solgan tosh lavhalar.' },
  { id: 'src-deklaratsiya', title: 'Mustaqillik deklaratsiyasi', type: 'Siyosiy hujjat', region: 'AQSH', period: '1776-yil', language: 'Ingliz tili', description: 'AQSH mustaqilligini e’lon qilgan tarixiy hujjat.' },
  { id: 'src-furqat', title: 'Furqat she’rlari', type: 'She’riy to‘plam', region: 'Qo‘qon/Samarqand', period: 'XIX asr', language: 'Chig‘atoy turkiy tili', description: 'Furqat ijodi ma’rifatparvarlik g‘oyalarini yoygan.' },
  { id: 'src-oina', title: '«Oina» jurnali', type: 'Davriy matbuot', region: 'Samarqand', period: '1913-1915-yillar', language: 'Chig‘atoy turkiy tili', description: 'Jadidchilikning matbuot organi; ma’rifat va ta’limga da’vat.' },
  { id: 'src-saksimon', title: 'Qadimgi shumer yozuvlari', type: 'Yozma yodgorlik', region: 'Mezopotamiya', period: 'Mil. avv. IV-III asrlar', language: 'Shumer tili', description: 'Mixxat lavhalar; dastlabki yozuv manbalaridan.' },
  { id: 'src-hiogaifo', title: 'Iskandar davri yunon yozuvlari', type: 'Tarixiy hujjat', region: 'Gretsiya/Osiyo', period: 'Mil. avv. IV asr', language: 'Yunon tili', description: 'Yunon mualliflari Xorazm va Baqtriya haqida yozgan.' },
  { id: 'src-qaz', title: 'Tanga va numizmatik manbalar', type: 'Moddiy manba', region: 'Kushon, temuriy, xonliklar', period: 'Mil. I-III, XIV-XIX asrlar', language: 'Yozuvli tangalar', description: 'Kushon, temuriy va xonlik tangalari iqtisodiy-siyosiy tarixni yoritadi.' },
];

export const sourceById = (id) => sources.find((s) => s.id === id);
export const sourcesByType = (type) => sources.filter((s) => s.type === type);
export default sources;