import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import { DogAppThemeProvider } from './theme';
import { BreedItem, Breeds, Favorites, Main } from './pages';

import App from './App';
import './index.css';

import { api } from './services/api';

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
    <ApiProvider api={api}>
      <DogAppThemeProvider>
        <RouterProvider router={router} />
      </DogAppThemeProvider>
    </ApiProvider>
  </React.StrictMode>
);
