import { createBrowserRouter } from 'react-router-dom';
import Detail from '../pages/Detail/Detail';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'pokemon/:pokemonName',
        element: <Detail />,
    },
]);
