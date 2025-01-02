import { Outlet } from 'react-router-dom';
import { ROUTES, HOME } from '../constants/routes';
import {
  Breeds,
  Images,
  Favorites,
  History,
  Votes,
  BreedItem,
  ErrorPage
} from '../pages';
import { HomeLayout } from '../layout/HomeLayout';

export const routes = [
  {
    path: '/',
    children: [
      {
        path: ROUTES.MAIN,
        element: (
          <HomeLayout>
            <Outlet />
          </HomeLayout>
        ),
        children: [
          { path: '', element: <Images /> },
          { path: HOME.BREEDS, element: <Breeds /> },
          {
            path: `${HOME.BREEDS}/:breedId`,
            element: <BreedItem />
          },
          { path: HOME.FAVORITES, element: <Favorites /> },
          { path: HOME.HISTORY, element: <History /> },
          {
            path: HOME.VOTES,
            element: <Votes />
          }
        ]
      },
      {
        path: '*',
        element: (
          <HomeLayout>
            <ErrorPage />
          </HomeLayout>
        )
      }
    ]
  }
];
