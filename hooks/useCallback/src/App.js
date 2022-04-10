import { useState, useCallback, memo } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (name) => setFirstName(name.toUpperCase());
  const handleLastNameChange = (name) => setLastName(name.toUpperCase());

  const memoizedSetFirstName = useCallback(handleFirstNameChange, []);
  const memoizedSetLastName = useCallback(handleLastNameChange, []);

  return (
    <>
      <MemoizedInput
        placeholder="First name"
        onChange={memoizedSetFirstName}
        value={firstName}
      />
      <br/>
      <MemoizedInput
        placeholder="Last name"
        onChange={memoizedSetLastName}
        value={lastName}
      />
      <br/>
      <button>Add</button>
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
