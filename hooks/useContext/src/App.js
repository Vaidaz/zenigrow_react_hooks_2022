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

const TranslationsContext = createContext(TRANSLATIONS.en);

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const onLanguageChange = (newLanguage) => setSelectedLanguage(newLanguage);

  return (
    <TranslationsContext.Provider value={TRANSLATIONS[selectedLanguage]}>
      <LanguageSwitch language={selectedLanguage} onChange={onLanguageChange} />
      <br/>
      <Greeting />
    </TranslationsContext.Provider>
  );
}

function Greeting() {
  const context = useContext(TranslationsContext);
  return `${context.hello}. ${context.how_are_you}`;
}

function LanguageSwitch({ language, onChange }) {
  const handleChange = (e) => onChange(e.target.value);

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
