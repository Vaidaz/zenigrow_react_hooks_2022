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
      language,
      translations: TRANSLATIONS[language],
    });
  }

  const [state, setState] = useState({
    translations: TRANSLATIONS.en,
    language: 'en',
    availableLanguages: ['en', 'lt'],
    setLanguage,
  });

  return (
    <TranslationsContext.Provider value={state}>
      {children}
    </TranslationsContext.Provider>
  );
};

function App() {
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
  const { language, setLanguage } = useContext(TranslationsContext);

  const handleChange = (e) => setLanguage(e.target.value);

  return (
    <select value={language} onChange={handleChange}>
      {Object.keys(TRANSLATIONS).map(language => (
        <option key={language} value={language}>
          {language.toUpperCase()}
        </option>
      ))}
    </select>
  )
}

export default App;
