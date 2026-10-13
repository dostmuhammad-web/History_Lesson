import { lessonsPart1 } from './lessons/lessonsPart1.js';
import { lessonsPart2 } from './lessons/lessonsPart2.js';
import { lessonsPart3 } from './lessons/lessonsPart3.js';
import { lessonsPart4 } from './lessons/lessonsPart4.js';

export const lessons = [
  ...lessonsPart1,
  ...lessonsPart2,
  ...lessonsPart3,
  ...lessonsPart4,
].sort((a, b) => {
  if (a.courseId === b.courseId) return a.order - b.order;
  return a.courseId.localeCompare(b.courseId, undefined, { numeric: true });
});

export const lessonsByCourse = (courseId) =>
  lessons.filter((l) => l.courseId === courseId).sort((a, b) => a.order - b.order);

export const lessonById = (id) => lessons.find((l) => l.id === id);

export const lessonNeighbors = (id) => {
  const idx = lessons.findIndex((l) => l.id === id);
  return {
    prev: idx > 0 ? lessons[idx - 1] : null,
    next: idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : null,
  };
};
