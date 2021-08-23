import { useEffect, useState } from 'react';

interface ContactsType {
  id: string;
  name: string;
}

const PREFIX = 'whatsapp-clone-';

export const useLocalStorage = (
  key: string,
  // value or useState
  initialValue?: [] | (() => string)
): [ContactsType[], React.Dispatch<React.SetStateAction<ContactsType[]>>] => {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue !== null) {
      console.log('jsonValue is not null');
      return JSON.parse(jsonValue);
    }
    if (typeof initialValue === 'function') {
      console.log('initialValue is a function');
      return initialValue();
    } else {
      console.log('initialValue is not a function');
      return initialValue;
    }
  });
  // overwrite localStorage whenever value or key changes
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};
