import { useEffect, useState } from 'react';

const setLocalStorageItems = (key, newValue) =>
  window.localStorage.setItem(key, JSON.stringify(newValue));

const getLocalStorageItems = (key) => {
  try {
    return JSON.parse(window.localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

const useLocalStorage = (key) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(getLocalStorageItems(key));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const updateItems = (newItems) => {
    setLocalStorageItems(key, newItems);
    setItems(newItems);
  };

  return [items, updateItems];
};

export default useLocalStorage;
