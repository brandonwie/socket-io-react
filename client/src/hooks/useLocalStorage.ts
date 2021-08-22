import { useEffect, useState } from 'react';

const PREFIX = 'whatsapp-clone-';

export const useLocalStorage = (
  key: string,
  // value or useState
  initialValue?: string | (() => string)
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue !== null) {
      console.log('not null');
      return JSON.parse(jsonValue);
    }
    if (typeof initialValue === 'function') {
      console.log('function');
      return initialValue();
    } else {
      console.log('typeof else');
      return initialValue;
    }
  });
  // overwrite localStorage whenever value or key changes
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};
