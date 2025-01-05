import { Outlet } from 'react-router-dom';
import { ROUTES, HOME } from '../constants/routes';
import {
  Breeds,
  Images,
  Favorites,
  History,
  Votes,
  BreedItem,
  ErrorPage,
  Gallery
} from '../pages';
import { HomeLayout } from '../layout/HomeLayout';
import { RelatedImages } from '../pages/Home/components/RelatedImages/RelatedImages';

export const routes = [
  {
    path: '/',
    children: [
      {
        path: ROUTES.HOME,
        element: (
          <HomeLayout>
            <Outlet />
          </HomeLayout>
        ),
        children: [
          { path: '', element: <Gallery /> },
          { path: HOME.IMAGES, element: <Images /> },
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
          },
          {
            path: HOME.RELATED,
            element: <RelatedImages />
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
