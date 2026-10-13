const PATHS = {
  intro: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V4.5A2.5 2.5 0 0 0 17.5 2H6.5A2.5 2.5 0 0 0 4 4.5v15z',
  primitive: 'M12 3l1.5 4h5l-3.7 3 1.2 6L12 13l-4 3 1.2-6L5.5 7h5L12 3z',
  east: 'M3 17l3 3 6-6 6 6 3-3-9-9-9 9zM3 5v2h18V5H3z',
  greece: 'M12 2v4m0 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm0 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm-8 0V6m16 0v0M12 6v10m0 0l-6 4m6-4l6 4',
  centralasia: 'M2 12L6 7h4l3-4 3 4h4l4 5-4 4h-5l-2 6-3-6H6l-4-4z',
  medieval: 'M12 2l2 3h-4l2-3zm-4 5h8v4l3 8h-5l-.5-5h-5l-.5 5H5l3-8V7z',
  islam: 'M9 2c.5 6 9 6 9 2 0 4 2 7 0 10h-2c-3 0-4-3-4-3s-1 0-1-2c0 3-2 4-4 4h-1c4 6 10 4 10 0 0-2 2-3 2-3s-9 1-9-8zm2 0h0',
  uzbekmedieval: 'M12 3c4 2 6 6 6 10 0 5-3 8-6 8s-6-3-6-8c0-4 2-8 6-10zM12 7v10m-4-5h8',
  discoveries: 'M12 2l1.2 3.8L17 7l-3.8 1.2L12 12l-1.2-3.8L7 7l3.8-1.2L12 2zm-5 9l1 3.2L14 21l-3.2-.8z',
  modern: 'M12 21l-1-5 3-4-5-1-4-4-3 8 6 1 1 5 3-2zm8-18l-.5 3-2.5 2 .5 3 3 1 2-3 3 1 1 3-4 1.5L22 16l-3-.8L16 15l-3 3h3',
  khanates: 'M3 21h18M6 21V9l6-5 6 5v12M9 21v-5h6v5M9 12h.01M15 12h.01',
  russia: 'M3 6h18M5 6v13M19 6v13M5 12h14M5 6h2m10 0h2M5 19h14',
  xxcentury: 'M4 19h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2zM6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M10 13h.01M14 13h.01M8 17h8',
  independent: 'M12 2l2 6h6l-5 4 2 7-5-4-5 4 2-7-5-4h6l2-6z',
  worldmodern: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-8 10h16M2 12a10 10 0 0 0 10-8 10 10 0 0 0 10 8',
  civilizations: 'M3 21V10l4-3 4 3v11M11 21V6l4-3 4 3v15M3 21h18',
  search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm7 11l4 4',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'M6 6l12 12M18 6L6 18',
  sun: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-15v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M19.1 4.9l-1.4 1.4M7.3 16.7l-1.4 1.4',
  moon: 'M20 12a8 8 0 1 1-8-8 6 6 0 0 0 8 8z',
  star: 'M12 3l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.9-5.4 2.9 1-6L3.3 9.4l6-.9L12 3z',
  book: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-14v5l3 3',
  chevronR: 'M9 6l6 6-6 6',
  chevronL: 'M15 6l-6 6 6 6',
  check: 'M4 12l5 5L20 6',
  x: 'M6 6l12 12M18 6L6 18',
  quiz: 'M4 5h16v11H4zM4 20h5M15 20h5M6 8h.01M9 8h.01M12 8h.01M6 11h.01M9 11h.01',
  map: 'M9 3L3 6v15l6-3 6 3 6-3V3l-6 3-6-3zm0 0v15m6-15v15',
  person: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-8 9a8 8 0 0 1 16 0',
  timeline: 'M4 6h6m4 0h6M4 12h3m4 0h9M4 18h2m3 0h11',
  dict: 'M4 5h7a3 3 0 0 1 3 3v11a3 3 0 0 0-3-3H4V5zm16 0h-7a3 3 0 0 0-3 3v11a3 3 0 0 1 3-3h7V5z',
  compare: 'M3 20L8 4l4 16 3-9 4 9h2',
  home: 'M3 11l9-8 9 8M5 9v12h5v-6h4v6h5V9',
  courses: 'M3 5h18v4H3V5zm0 6h18v4H3v-4zm0 6h18v4H3v-4z',
  stats: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7-3a7 7 0 0 0-.3-2l2-1.5-2-3.5-2.4 1a7 7 0 0 0-3.4-2L12.6 2h-4L8 4.1a7 7 0 0 0-3.4 2l-2.4-1-2 3.5L2.3 10a7 7 0 0 0 0 4l-2 1.5 2 3.5 2.4-1a7 7 0 0 0 3.4 2l.6 4h4l.6-4a7 7 0 0 0 3.4-2l2.4 1 2-3.5L18.7 14a7 7 0 0 0 .3-2z',
  help: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-14a3 3 0 0 1 3 3c0 2-3 2.5-3 4m0 2h.01',
  saved: 'M4 4h16v16L12 15l-8 5V4z',
  mistakes: 'M12 2v4M6 2v2M18 2v2M4 8h16M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm3 6h.01M8 14h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01',
  jewelry: 'M12 3l3 5.5L12 22 9 8.5 12 3z',
  fire: 'M12 2c1 3 3 4 4 6a6 6 0 0 1-10 0c0-1 1-2 2-3 0 2 2 3 2 3s-2-2-1-5c1 1 2 2 3 3zm0 3m-3 13h6',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-5a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
  brain: 'M9 3a3 3 0 0 0-3 3 4 4 0 0 0-2 7 4 4 0 0 0 2 7 4 4 0 0 0 6 0 4 4 0 0 0 4-1 4 4 0 0 0 2-3 4 4 0 0 0-1-7 3 3 0 0 0-3-3zM12 21V10',
  trophy: 'M8 21h8m-4-4v4M8 4h8v8a4 4 0 0 1-8 0V4zM6 5H3v2a3 3 0 0 0 3 3M18 5h3v2a3 3 0 0 1-3 3',
  arrowL: 'M19 12H5m7-7l-7 7 7 7',
};

export default function Icon({ name = 'book', size = 24, className = '', viewBox = '0 0 24 24' }) {
  const d = PATHS[name] || PATHS.book;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export { PATHS };