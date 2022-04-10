import { useState, useDeferredValue } from 'react';
import * as service from './service';

function App() {
  const [name, setName] = useState('');
  const foundPokemons = service.searchForPokemon(name);

  const handleNameChange = (e) => setName(e.target.value);

  return (
    <>
      <input
        placeholder="Choose your pokemon"
        onChange={handleNameChange}
        value={name}
        type="text"
      />
      <br/>
      <List pokemons={foundPokemons} />
    </>
  );
}

const List = ({ pokemons }) => {
  const deferedPokemons = useDeferredValue(pokemons);
  return (
    <>
      {deferedPokemons.map(pokemon => (
        <img key={pokemon.id} className="pokemon-img" src={pokemon.path} alt={pokemon.name} />
      ))}
    </>
  );
};

export default App;
