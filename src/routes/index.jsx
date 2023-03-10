import { createBrowserRouter } from 'react-router-dom';
import PokemonDetail from '../components/PokemonDetail/PokemonDetail';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'pokemon/:pokemonName',
        element: <PokemonDetail />,
    },
]);
