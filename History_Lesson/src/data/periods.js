export const periods = [
  {
    id: 'prehistory',
    title: 'Ibtidoiy davr',
    range: "Mil. avv. ~2,5 mln yil — mil. avv. IV ming yillik",
    startYear: -2500000,
    endYear: -4000,
    description:
      "Insonning paydo bo'lishidan dastlabki dehqonchilik jamiyatlarigacha bo'lgan davr. Tosh qurollari, ovchilik, neolit inqilobi.",
    color: '#6b4f2a',
    courseIds: ['course-2'],
  },
  {
    id: 'ancient',
    title: 'Qadimgi dunyo',
    range: "Mil. avv. IV ming yillik — mil. 476-yil",
    startYear: -4000,
    endYear: 476,
    description:
      "Birinchi sivilizatsiyalar, yozuvning ixtirosi, Sharq despotsiyalari, antik Yunoniston va Rim.",
    color: '#7a5230',
    courseIds: ['course-3', 'course-4', 'course-5'],
  },
  {
    id: 'medieval',
    title: "O'rta asrlar",
    range: 'V — XV asrlar',
    startYear: 476,
    endYear: 1492,
    description:
      "Feodalizm, dinlarning keng tarqalishi, Buyuk Ipak yo'li, islom sivilizatsiyasi va Amir Temur davri.",
    color: '#4a3b6b',
    courseIds: ['course-6', 'course-7', 'course-8'],
  },
  {
    id: 'early-modern',
    title: 'Yangi davr boshlanishi',
    range: 'XV — XVIII asrlar',
    startYear: 1492,
    endYear: 1789,
    description:
      "Buyuk geografik kashfiyotlar, Uyg'onish, reformatsiya, ilmiy inqilob va mustamlakachilikning boshlanishi.",
    color: '#1f5f7a',
    courseIds: ['course-9', 'course-10', 'course-11'],
  },
  {
    id: 'modern',
    title: 'Yangi va eng yangi davr',
    range: 'XIX — XXI asrlar',
    startYear: 1789,
    endYear: 2026,
    description:
      "Sanoat inqilobi, milliy davlatlar, jahon urushlari, mustaqillik, sovuq urush va globallashuv.",
    color: '#12324f',
    courseIds: ['course-12', 'course-13', 'course-14', 'course-15', 'course-16'],
  },
];

export const periodById = (id) => periods.find((p) => p.id === id);
