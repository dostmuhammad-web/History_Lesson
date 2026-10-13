import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { lessons } from '../data/lessons';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('tarix_olami_theme', 'light');
  const [progress, setProgress] = useLocalStorage('tarix_olami_progress', {});
  const [saved, setSaved] = useLocalStorage('tarix_olami_saved', []);
  const [mistakes, setMistakes] = useLocalStorage('tarix_olami_mistakes', []);
  const [quizResults, setQuizResults] = useLocalStorage('tarix_olami_quiz', []);
  const [settings, setSettings] = useLocalStorage('tarix_olami_settings', {
    fontSize: 16,
    sound: true,
    animations: true,
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.style.fontSize = `${settings.fontSize}px`;
  }, [theme, settings.fontSize]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const isLessonCompleted = (lessonId) => Boolean(progress[lessonId] && progress[lessonId].completed);

  const completeLesson = (lessonId, stars = 3) =>
    setProgress((p) => ({
      ...p,
      [lessonId]: {
        completed: true,
        stars: Math.max(p[lessonId]?.stars || 0, stars),
        lastDate: new Date().toISOString(),
      },
    }));

  const updateProgress = (id, patch) =>
    setProgress((p) => ({
      ...p,
      [id]: { ...(p[id] || {}), ...patch, lastDate: new Date().toISOString() },
    }));

  const toggleSave = (lessonId) =>
    setSaved((s) => (s.includes(lessonId) ? s.filter((x) => x !== lessonId) : [...s, lessonId]));

  const recordMistake = (questionId, correct) => {
    if (correct) return;
    setMistakes((m) => [
      ...m.filter((x) => x.questionId !== questionId),
      { questionId, date: new Date().toISOString() },
    ].slice(-100));
  };

  const clearMistakes = () => setMistakes([]);

  const recordQuiz = (result) =>
    setQuizResults((q) => [...q, { ...result, date: new Date().toISOString() }].slice(-200));

  const resetProgress = () => {
    setProgress({});
    setSaved([]);
    setMistakes([]);
    setQuizResults([]);
  };

  const stats = useMemo(() => {
    const totalLessons = lessons.length;
    const completed = Object.keys(progress).filter((id) => progress[id].completed);
    const percent = totalLessons ? Math.round((completed.length / totalLessons) * 100) : 0;
    const totalStars = Object.values(progress).reduce((s, v) => s + (v.stars || 0), 0);
    const bestQuiz = quizResults.reduce((b, r) => (r.correct / r.total > (b ? b.correct / b.total : 0) ? r : b), null);
    return { totalLessons, completedCount: completed.length, percent, totalStars, bestQuiz };
  }, [progress, quizResults]);

  const value = {
    theme,
    toggleTheme,
    progress,
    updateProgress,
    completeLesson,
    isLessonCompleted,
    saved,
    toggleSave,
    mistakes,
    recordMistake,
    clearMistakes,
    quizResults,
    recordQuiz,
    settings,
    setSettings,
    resetProgress,
    stats,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}