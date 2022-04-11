import { createContext, useContext, useState } from 'react';

const TRANSLATIONS = {
  lt: {
    hello: 'Labas',
    how_are_you: 'Kaip laikaisi?',
  },
  en: {
    hello: 'Hello',
    how_are_you: 'How are you?',
  },
};

const TranslationsContext = createContext();

const TranslationsContextProvider = ({ children }) => {
  const setLanguage = (language) => {
    setState({
      ...state,
      translations: TRANSLATIONS[language],
      language,
    });
  };

  const [state, setState] = useState({
    translations: TRANSLATIONS['en'],
    availableLanguages: Object.keys(TRANSLATIONS),
    language: 'en',
    setLanguage,
  });

  return (
    <TranslationsContext.Provider value={state}>
      {children}
    </TranslationsContext.Provider>
  );
};

const App = () => {
  return (
    <TranslationsContextProvider>
      <LanguageSwitch />
      <br/>
      <Greeting />
    </TranslationsContextProvider>
  );
}

function Greeting() {
  const { translations } = useContext(TranslationsContext);
  return `${translations.hello}. ${translations.how_are_you}`;
}

function LanguageSwitch() {
  const { availableLanguages, language, setLanguage } = useContext(TranslationsContext);
  return (
    <select value={language} onChange={e => setLanguage(e.target.value)}>
      {availableLanguages.map(language => (
        <option key={language}>{language}</option>
      ))}
    </select>
  )
}

export default App;
