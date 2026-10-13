import { useCallback, useEffect, useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored !== null) return JSON.parse(stored);
    } catch (e) {
      console.warn(`useLocalStorage: "${key}" o'qilmadi`, e);
    }
    return typeof initialValue === 'function' ? initialValue() : initialValue;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn(`useLocalStorage: "${key}" saqlanmadi`, e);
    }
  }, [key, value]);

  return [value, useCallback(setValue, [])];
}