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
      query: ({ sub_id }) => ({ url: `favourites?sub_id=${sub_id}` }),

      providesTags: (result = []) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Favorites', id }) as const),
              { type: 'Favorites', id: 'LIST' }
            ]
          : [{ type: 'Favorites' as const, id: 'LIST' }]
    }),
    deleteFavorites: build.mutation<{ id: number }, number>({
      query: id => ({
        url: `favourites/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Favorites' as const, id: 'LIST' }]
    }),
    login: build.mutation<{ sub_id: string; user: Favorite }, unknown>({
      query: (credentials: unknown) => ({
        url: 'login',
        method: 'POST',
        body: credentials
      })
    })
  })
});

export const {
  useLoginMutation,
  useAddFavoritesMutation,
  useGetFavoritesQuery,
  useDeleteFavoritesMutation
} = favoritesApi;
