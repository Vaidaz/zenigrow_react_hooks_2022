import { useState, useMemo } from 'react';
import { findNthPrimeNumber } from './math';

function App() {
  const [primeNumberIndex, setPrimeNumberIndex] = useState(1);

  return (
    <>
      <h1>Prtime numbers</h1>
      <input
        placeholder="Prime number index"
        onChange={e => setPrimeNumberIndex(e.target.value)}
        value={primeNumberIndex}
        type="number"
      />
      <br/>
      <Display primeNumberIndex={primeNumberIndex} />
    </>
  );
}

function Display({ primeNumberIndex }) {
  const number = useMemo(() => findNthPrimeNumber(primeNumberIndex), [primeNumberIndex]);
  const [savedNumbers, setSavedNumbers] = useState([]);

  return (
    <>
      <br/>
      Index: {primeNumberIndex}
      <br/>
      Number: {number}
      <br/>
      <button onClick={() => setSavedNumbers([...savedNumbers, number])}>
        Save
      </button>
      <br/>
      <br/>
      Saved numbers:
      <ul>
        {savedNumbers.map((savedNumber, index) => (
          <li key={index}>{savedNumber}</li>
        ))}
      </ul>
    </>
  )
}

export default App;
