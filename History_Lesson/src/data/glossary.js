export const glossary = [
  {
    id: 'sivilizatsiya',
    term: 'Sivilizatsiya',
    short: 'Jamiyat taraqqiyotining yuksak bosqichi',
    definition:
      "Yozuv, shahar, davlat, hunarmandchilik va madaniy me'yorlarga ega yirik jamiyat. Sivilizatsiya dehqonchilik asosida shakllanadi.",
    example:
      "Qadimgi Misr, Mesopotamiya va Hind vodiysi sivilizatsiyalari daryo bo'ylarida paydo bo'lgan.",
    related: ['city', 'state'],
  },
  {
    id: 'imperiya',
    term: 'Imperiya',
    short: "Ko'p xalqlarni birlashtirgan yirik davlat",
    definition:
      "Kuchli markaziy hokimiyat ostida turli xalqlar va hududlarni birlashtirgan davlat. Imperiyalar odatda harbiy istilolar yo'li bilan kengayadi.",
    example:
      "Rim imperiyasi, Chingizxon imperiyasi, Buyuk Temur saltanati imperiyaga misol bo'ladi.",
    related: ['state'],
  },
  {
    id: 'sulola',
    term: 'Sulola (dinastiya)',
    short: 'Bir nasl-nasabdan chiqqan hukmdorlar',
    definition:
      "Hokimiyat otadan bolaga yoki bir urug' ichida meros bo'lib o'tadigan hukmdorlar oilasi.",
    example:
      "Somoniylar, Qoraxoniylar va Temuriylar sulolalari Markaziy Osiyo tarixida muhim o'rin tutgan.",
    related: ['monarxiya'],
  },
  {
    id: 'respublika',
    term: 'Respublika',
    short: "Saylanadigan hokimiyat shakli",
    definition:
      "Davlat boshlig'i meros emas, balki saylov yo'li bilan tanlanadigan boshqaruv shakli.",
    example:
      "Qadimgi Rim respublikasi konsullarni saylagan; bugungi O'zbekiston ham respublika.",
    related: ['demokratiya'],
  },
  {
    id: 'demokratiya',
    term: 'Demokratiya',
    short: "Xalq hokimiyati",
    definition:
      "Hokimiyat manbai xalq bo'lgan, fuqarolar qaror qabul qilishda qatnashadigan boshqaruv shakli.",
    example:
      "Qadimgi Afinada fuqarolar xalq majlisida to'g'ridan-to'g'ri ovoz bergan.",
    related: ['respublika'],
  },
  {
    id: 'monarxiya',
    term: 'Monarxiya',
    short: "Bir hukmdor boshchiligidagi davlat",
    definition:
      "Hokimiyat bir kishida (qirol, shoh, podsho, xon) to'plangan va odatda meros bo'lib o'tadigan boshqaruv shakli.",
    example:
      "Buxoro amirligi va Xiva xonligi monarxiya shaklida boshqarilgan.",
    related: ['sulola', 'imperiya'],
  },
  {
    id: 'feodalizm',
    term: 'Feodalizm',
    short: "Yer egaligi asosidagi tuzum",
    definition:
      "Yer (feod) asosiy boylik bo'lib, yirik yer egalari kichik dehqonlarga qaramlik o'rnatgan ijtimoiy-iqtisodiy tuzum.",
    example:
      "O'rta asr Yevropasida va Markaziy Osiyoda yer uchun soliq va xizmat majburiyatlari feodalizmga xos edi.",
    related: ['state'],
  },
  {
    id: 'mustamlakachilik',
    term: 'Mustamlakachilik',
    short: "Bir davlatning boshqasini bo'ysundirishi",
    definition:
      "Kuchli davlatning boshqa hududni bosib olib, uni siyosiy va iqtisodiy jihatdan o'ziga qaram qilishi.",
    example:
      "XIX asrda Rossiya imperiyasi Turkistonni bosib olib, mustamlaka boshqaruvini o'rnatgan.",
    related: ['imperiya'],
  },
  {
    id: 'inqilob',
    term: 'Inqilob',
    short: "Jamiyatni tubdan o'zgartiruvchi burilish",
    definition:
      "Siyosiy, ijtimoiy yoki iqtisodiy tuzumni tubdan o'zgartiruvchi keskin o'zgarish.",
    example:
      "1917-yil Rossiya inqiloblari va Fransuz inqilobi jahon tarixiga katta ta'sir ko'rsatdi.",
    related: ['islohot'],
  },
  {
    id: 'islohot',
    term: 'Islohot (reforma)',
    short: "Bosqichma-bosqich o'zgarish",
    definition:
      "Mavjud tuzumni buzmasdan, uni takomillashtirishga qaratilgan bosqichma-bosqich o'zgarish.",
    example:
      "Jadidlar ta'lim va madaniyat sohasida islohotlar o'tkazishni yoqlagan.",
    related: ['inqilob'],
  },
  {
    id: 'renessans',
    term: 'Renessans (Uyg\'onish)',
    short: 'Madaniy yuksalish davri',
    definition:
      "Antik merosga qiziqishning qayta uyg'onishi va san'at, fan, adabiyotning yuksalishi davri.",
    example:
      "Yevropada XIV–XVI asrlarda, Sharqda esa IX–XII va XV asrlarda madaniy yuksalish bo'lgan.",
    related: [],
  },
  {
    id: 'arxeologiya',
    term: 'Arxeologiya',
    short: 'Moddiy topilmalar orqali tarixni o\'rganish',
    definition:
      "Qazishmalar orqali topilgan buyumlar, binolar va qoldiqlar asosida o'tmishni o'rganuvchi fan.",
    example:
      "Afrasiyob, Ayritom va Dalvarzintepa arxeologik yodgorliklari So'g'diyona tarixini ochib berdi.",
    related: ['manbashunoslik'],
  },
  {
    id: 'antropologiya',
    term: 'Antropologiya',
    short: 'Inson va uning kelib chiqishini o\'rganuvchi fan',
    definition:
      "Insonning biologik kelib chiqishi, tuzilishi va madaniyatini o'rganuvchi fan.",
    example:
      "Antropologlar suyak qoldiqlari orqali ibtidoiy insonning yoshi va turmush tarzini aniqlaydi.",
    related: ['arxeologiya'],
  },
  {
    id: 'xronologiya',
    term: 'Xronologiya',
    short: 'Vaqt hisobi va sanalar tartibi',
    definition:
      "Voqealarni vaqt bo'yicha tartiblash va sanalarni aniqlash usuli. Miloddan avvalgi sanalar teskari sanaladi.",
    example:
      "Milodiy 2026-yilda yozilgan yil bilan mil. avv. 330-yil orasida 2356 yil farq bor.",
    related: [],
  },
  {
    id: 'manbashunoslik',
    term: 'Manbashunoslik',
    short: 'Tarixiy manbalarni o\'rganuvchi soha',
    definition:
      "Tarixiy manbalarni topish, tasniflash, tahlil qilish va ularning ishonchliligini baholash bilan shug'ullanuvchi soha.",
    example:
      "Beruniyning «Osor ul-boqiya» asari manbashunoslik uchun muhim yozma manba hisoblanadi.",
    related: ['arxeologiya'],
  },
  {
    id: 'davlatchilik',
    term: 'Milliy davlatchilik',
    short: "Bir millatning o'z davlatiga ega bo'lishi",
    definition:
      "Muayyan xalq yoki millat o'z hududida mustaqil davlat tuzishi va uni boshqarish an'anasi.",
    example:
      "O'zbek davlatchiligi Somoniylar, Qoraxoniylar, Temuriylar tajribasiga tayanadi.",
    related: ['state'],
  },
  {
    id: 'city',
    term: 'Shahar',
    short: 'Hunarmandchilik va savdo markazi',
    definition:
      "Aholisi asosan hunarmandchilik, savdo va boshqaruv bilan shug'ullanadigan, odatda devor bilan o'ralgan yirik manzilgoh.",
    example:
      "Samarqand, Buxoro va Xiva qadimdan yirik shahar markazlari bo'lgan.",
    related: ['sivilizatsiya'],
  },
  {
    id: 'state',
    term: 'Davlat',
    short: "Hokimiyat va boshqaruv tizimi",
    definition:
      "Hudud, aholi va suveren hokimiyatga ega bo'lgan siyosiy tashkilot.",
    example:
      "Dastlabki davlatlar daryo vodiylarida sug'orish tizimini boshqarish ehtiyoji bilan shakllangan.",
    related: ['monarxiya'],
  },
  {
    id: 'ipakyoli',
    term: "Buyuk Ipak yo'li",
    short: "Sharq va G'arbni bog'lagan savdo tarmog'i",
    definition:
      "Xitoydan O'rta yer dengizi bo'ylab cho'zilgan qadimgi savdo yo'llari tizimi.",
    example:
      "Markaziy Osiyo shaharlari Ipak yo'lidagi savdo va madaniy almashinuvning markazi bo'lgan.",
    related: ['city'],
  },
];

export const glossaryById = (id) => glossary.find((g) => g.id === id);
