import React, { useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export type ContactsType = {
  id: string;
  name: string;
};

interface ContactsProviderProps {
  children: React.ReactNode;
}

interface ContactsContextProps {
  contacts: ContactsType[];
  createContact: (id: string, name: string) => void;
}

const ContactsContext = React.createContext<ContactsContextProps>(
  {} as ContactsContextProps
);

export const useContacts = (): ContactsContextProps => {
  return useContext(ContactsContext);
};

export const ContactsProvider = ({
  children,
}: ContactsProviderProps): JSX.Element => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const createContact = (id: string, name: string) => {
    setContacts(prevContacts => {
      return [...prevContacts, { id, name }];
    });
  };

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
};
