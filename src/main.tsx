import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { DogAppThemeProvider } from './theme';
import { BreedItem, Breeds, Favorites, Main } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error 404</div>,
    children: [
      {
        path: 'breeds',
        element: <Breeds />
      },
      {
        path: 'breeds/:breedId',
        element: <BreedItem />
      },
      {
        path: '/main',
        element: <Main />
      },
      {
        path: '/favorites',
        element: <Favorites />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DogAppThemeProvider>
      <RouterProvider router={router} />
    </DogAppThemeProvider>
  </React.StrictMode>
);
