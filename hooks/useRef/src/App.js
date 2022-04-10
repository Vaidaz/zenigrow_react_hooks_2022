import { useState, useRef } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const inputEl = useRef(null);

  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleClear = () => {
    setInputValue('');
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} onChange={handleInputChange} value={inputValue} type="text" />
      <button onClick={handleClear}>Clear</button>
    </>
  );
}

export default App;
