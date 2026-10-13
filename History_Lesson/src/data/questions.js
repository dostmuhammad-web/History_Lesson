import q1 from './questions/course1.js';
import q2 from './questions/course2.js';
import q3 from './questions/course3.js';
import q4 from './questions/course4.js';
import q5 from './questions/course5.js';
import q6 from './questions/course6.js';
import q7 from './questions/course7.js';
import q8 from './questions/course8.js';
import q9 from './questions/course9.js';
import q10 from './questions/course10.js';
import q11 from './questions/course11.js';
import q12 from './questions/course12.js';
import q13 from './questions/course13.js';
import q14 from './questions/course14.js';
import q15 from './questions/course15.js';
import q16 from './questions/course16.js';

const TYPES = ['sana', 'shaxs', 'xronologiya', 'sabab', 'xarita', 'manba', 'atama', 'kop', 'tf', 'tahlil'];
const DIFFS = ['boshlangich', 'orta', 'yuqori', 'olimpiada'];

const rawGroups = [
  ['course-1', q1],
  ['course-2', q2],
  ['course-3', q3],
  ['course-4', q4],
  ['course-5', q5],
  ['course-6', q6],
  ['course-7', q7],
  ['course-8', q8],
  ['course-9', q9],
  ['course-10', q10],
  ['course-11', q11],
  ['course-12', q12],
  ['course-13', q13],
  ['course-14', q14],
  ['course-15', q15],
  ['course-16', q16],
];

const seen = new Set();
const questions = [];

for (const [courseId, tuples] of rawGroups) {
  if (!Array.isArray(tuples)) {
    console.warn(`[questions.js] ${courseId}: bo'sh yoki noto'g'ri ma'lumot`);
    continue;
  }
  tuples.forEach((t, i) => {
    if (!Array.isArray(t) || t.length < 6) {
      console.warn(`[questions.js] ${courseId}[${i}] strukturasi noto'g'ri`);
      return;
    }
    const [type, difficulty, q, options, answer, explanation] = t;
    if (!TYPES.includes(type)) {
      console.warn(`[questions.js] ${courseId}[${i}] noaniq tur: "${type}"`);
    }
    if (!DIFFS.includes(difficulty)) {
      console.warn(`[questions.js] ${courseId}[${i}] noaniq daraja: "${difficulty}"`);
    }
    if (!Array.isArray(options) || options.length < 2) {
      console.warn(`[questions.js] ${courseId}[${i}] variantlar kam`);
    }
    const id = `${courseId}-q${i + 1}`;
    if (seen.has(q)) {
      console.warn(`[questions.js] takroriy savol: "${String(q).slice(0, 50)}" (${id})`);
    }
    seen.add(q);
    questions.push({
      id,
      courseId,
      type,
      difficulty,
      q: String(q).trim(),
      options,
      answer,
      explanation,
    });
  });
}

export { questions };
export function questionsByCourse(courseId) {
  return questions.filter((q) => q.courseId === courseId);
}
export function questionById(id) {
  return questions.find((q) => q.id === id);
}
export function questionsByType(type) {
  return questions.filter((q) => q.type === type);
}
export function shuffle(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
export function quizFor(courseId, count = 10) {
  return shuffle(questionsByCourse(courseId)).slice(0, count);
}