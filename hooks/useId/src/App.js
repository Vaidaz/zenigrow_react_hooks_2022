import { useId } from 'react';

function App() {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>What would you like for lunch?</label>
      <input id={id} type="text" name="lunch"/>
    </>
  );
}

export default App;
