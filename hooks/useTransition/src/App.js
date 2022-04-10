import { useState, useTransition } from 'react';
import * as service from './service';

function App() {
  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState('');
  const [filter, setFilter] = useState('');
  const foundPokemons = service.searchForPokemon(filter);

  const handleNameChange = (e) => {
    setName(e.target.value);

    startTransition(() => {
      setFilter(e.target.value);
    });
  };

  return (
    <>
      <input
        placeholder="Choose your pokemon"
        onChange={handleNameChange}
        value={name}
        type="text"
      />
      {isPending && 'Loading....'}
      <br/>
      <List pokemons={foundPokemons} />
    </>
  );
}

const List = ({ pokemons }) => (
  <>
    {pokemons.map(pokemon => (
      <img key={pokemon.id} className="pokemon-img" src={pokemon.path} alt={pokemon.name} />
    ))}
  </>
);

export default App;
