import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { DogAppThemeProvider } from './theme';
import {
  BreedItem,
  Breeds,
  Favorites,
  Main,
  ErrorPage,
  Votes,
  Upload,
  History
} from './pages';

import App from './App';
import './index.css';

import { store } from './services/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
      },
      {
        path: '/votes',
        element: <Votes />
      },
      {
        path: '/upload',
        element: <Upload />
      },
      {
        path: '/history',
        element: <History />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <DogAppThemeProvider>
        <RouterProvider router={router} />
      </DogAppThemeProvider>
    </Provider>
  </React.StrictMode>
);
