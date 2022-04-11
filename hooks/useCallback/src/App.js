import { useState, useCallback, memo } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = useCallback((name) => {
    return setFirstName(name.toUpperCase());
  }, []);
  const handleLastNameChange = useCallback((name) => setLastName(name.toUpperCase()), []);

  return (
    <>
      <MemoizedInput
        placeholder="First name"
        onChange={handleFirstNameChange}
        value={firstName}
      />
      <br/>
      <MemoizedInput
        placeholder="Last name"
        onChange={handleLastNameChange}
        value={lastName}
      />
    </>
  );
}

function Input({ placeholder, onChange, value }) {
  const handleChange = (e) => onChange(e.target.value);

  return (
    <>
      <input onChange={handleChange} value={value} placeholder={placeholder} /> - {new Date().toLocaleTimeString()}
    </>
  )
}

const MemoizedInput = memo(Input);

export default App;
