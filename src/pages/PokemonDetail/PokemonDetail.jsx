import { useParams } from 'react-router-dom';
import { usePokemonDetails } from '../../hooks/usePokemonDetails';
import { Ring } from '@uiball/loaders';
import style from './styles.module.css';
import Pokemon from '../../components/Pokemon/Pokemon';

function PokemonDetail() {
  const { id } = useParams();
  const { pokemon, loading } = usePokemonDetails(id);

  const backgroundSelected =
    pokemon.types && pokemon.types.length > 0 ? pokemon.types[0].type.name : '';

  return (
    <>
      {loading ? (
        <div className={style.pokemonDetailLoader}>
          <Ring size={40} lineWeight={5} speed={2} color="black" />
        </div>
      ) : (
        <div className={`${backgroundSelected}`}>
          <Pokemon pokemon={pokemon} backgroundSelected={backgroundSelected} />
        </div>
      )}
    </>
  );
}

export default PokemonDetail;
