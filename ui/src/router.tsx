import { createBrowserRouter } from 'react-router-dom';
import HomeView from '@/views/HomeView.tsx';
import MainLayout from '@/components/MainLayout.tsx';
import LoginView from '@/views/LoginView.tsx';
import PokemonDetails from './components/PokemonDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LoginView />        
      },
      {
        path: '/home',
        element: <HomeView />
      },
      {
        path: '/pokemon/:pokemonName',
        element: <PokemonDetails />
      }
    ]
  }
]);

export default router;
