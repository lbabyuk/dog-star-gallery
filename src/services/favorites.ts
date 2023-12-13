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
    addFavorites: build.mutation<unknown, Favorite>({
      query: body => ({
        url: `favourites`,
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Favorites' as const, id: 'LIST' }]
    }),
    getFavorites: build.query<FavoriteResponse, void>({
      query: () => ({ url: 'favourites' }),
      providesTags: (result = []) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Favorites', id }) as const),
              { type: 'Favorites', id: 'LIST' }
            ]
          : [{ type: 'Favorites' as const, id: 'LIST' }]
    }),
    deleteFavorites: build.mutation<{ id: string }, string>({
      query: id => ({
        url: `favourites/${id}`,
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
