const POKEMONS = [
  { id: '001', name: 'Bulbasaur', path: '/pokemons/001.png' },
  { id: '002', name: 'Ivysaur', path: '/pokemons/002.png' },
  { id: '003', name: 'Venusaur', path: '/pokemons/003.png' },
  { id: '004', name: 'Charmander', path: '/pokemons/004.png' },
  { id: '005', name: 'Charmeleon', path: '/pokemons/005.png' },
  { id: '006', name: 'Charizard', path: '/pokemons/006.png' },
  { id: '007', name: 'Squirtle', path: '/pokemons/007.png' },
  { id: '008', name: 'Wartortle', path: '/pokemons/008.png' },
  { id: '009', name: 'Blastoise', path: '/pokemons/009.png' },
  { id: '025', name: 'Pikachu', path: '/pokemons/025.png' },
];

const generatePokemonsList = () => {
  let updatedList = [];
  for(let i = 0; i < 1000; i++) {
    for(const pokemon of POKEMONS) {
      updatedList.push({ ...pokemon, id: `${pokemon.id}-${i}` });
    }
  }
  return updatedList;
};

const ALL_POKEMONS = generatePokemonsList();

export const searchForPokemon = (name) => {
  return ALL_POKEMONS.filter(pokemon => pokemon.name.toLowerCase().match(name));
};
