import style from './styles.module.css';
import Header from './components/Header/Header';
import Info from './components/Info/Info';

function Pokemon({ pokemon, backgroundSelected }) {
  return (
    <div className={style.pokemonDetailBg}>
      <Header name={pokemon.name} id={pokemon.id} />
      <Info pokemon={pokemon} backgroundSelected={backgroundSelected} />
    </div>
  );
}

export default Pokemon;
