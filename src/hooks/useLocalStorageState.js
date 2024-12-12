import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    // NOTE: get data by using getItem with item key
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : localStorage;
  });

  useEffect(
    function () {
      // NOTE: ADDING TO LOCAL STORAGE:  setItem with item key and item value
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );

  return [value, setValue];
}
