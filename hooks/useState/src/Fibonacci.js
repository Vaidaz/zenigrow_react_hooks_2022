const Fibonacci = () => {
  const fibonacii = [0, 1];

  const findNextFibonacci = () => {

  };

  return (
    <>
      <h1>Fibonacci</h1>
      <button onClick={findNextFibonacci}>
        Find next Fibonacci number
      </button>
      <ol>
        {fibonacii.map((number, index) => (
          <li key={index}>{number}{' '}</li>
        ))}
      </ol>
    </>
  );
};

export default Fibonacci;
