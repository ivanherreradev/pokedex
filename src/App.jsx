import { useState } from 'react';
import { usePokemon } from './hooks/usePokemon';

function App() {
  const [url, setUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  );
  const { pokemon, loading } = usePokemon(url);

  return <div>Hello world 👋</div>;
}

export default App;
