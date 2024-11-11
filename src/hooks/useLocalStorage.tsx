import { useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);

    if (item === null) {
      return initialValue;
    }

    try {
      return JSON.parse(item);
    } catch {
      localStorage.removeItem(key);

      return initialValue;
    }
  });

  const updateLocalStorage = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, updateLocalStorage];
}
