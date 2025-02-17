import { FAVORITES_URL } from '../utilities';
import { api } from './api';

export interface Favorite {
  image_id: string;
  sub_id?: string;
}

type FavoriteResponse = {
  created_at: string;
  id: number;
  image: {
    id: string;
    url: string;
  };
  image_id: string;
  sub_id: string | null;
  user_id: string;
}[];

export const favoritesApi = api.injectEndpoints({
  endpoints: build => ({
    getFavorites: build.query<FavoriteResponse, { sub_id?: string }>({
      query: ({ sub_id }) => ({ url: `${FAVORITES_URL}?sub_id=${sub_id}` }),

      providesTags: (result = []) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Favorites', id }) as const),
              { type: 'Favorites', id: 'LIST' }
            ]
          : [{ type: 'Favorites' as const, id: 'LIST' }]
    }),
    addFavorites: build.mutation<unknown, Favorite>({
      query: body => ({
        url: `${FAVORITES_URL}`,
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Favorites' as const, id: 'LIST' }]
    }),
    deleteFavorites: build.mutation<{ id: number }, number>({
      query: id => ({
        url: `${FAVORITES_URL}/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Favorites' as const, id: 'LIST' }]
    })
  })
});

export const {
  useAddFavoritesMutation,
  useGetFavoritesQuery,
  useDeleteFavoritesMutation
} = favoritesApi;
