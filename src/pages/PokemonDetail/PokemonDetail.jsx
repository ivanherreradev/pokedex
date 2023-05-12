import { useParams } from 'react-router-dom';

function PokemonDetail() {
  const { id } = useParams();
  return <div>Pokemon Detail: {id}</div>;
}

export default PokemonDetail;
