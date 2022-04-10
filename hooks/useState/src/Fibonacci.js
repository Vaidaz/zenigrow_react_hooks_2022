import { useState } from 'react';

const Fibonacci = () => {
  const [fibonacii, setFibonacii] = useState([0, 1]);

  const findNextFibonacci = () => {
    const [last1, last2] = fibonacii.slice(-2);
    setFibonacii([...fibonacii, last1 + last2])
  };

  return (
    <>
      <h1>Fibonacci</h1>
      <button onClick={findNextFibonacci}>Find next Fibonacci number</button>
      <ol>
        {fibonacii.map((number, index) => (
          <li key={index}>{number}{' '}</li>
        ))}
      </ol>
    </>
  );
};

export default Fibonacci;
