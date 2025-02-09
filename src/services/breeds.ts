import { BREEDS_URL } from '../utilities';
import { api } from './api';

export interface Breed {
  id: number;
  name: string;
  temperament: string;
  origin: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  reference_image_id: string;
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  image: {
    id: string;
    width: number;
    heigh: number;
    url: string;
  };
}

export type BreedsResponse = Breed[];
export const breedsApi = api.injectEndpoints({
  endpoints: build => ({
    getBreeds: build.query<
      BreedsResponse,
      {
        limit?: number;
        page?: number;
      }
    >({
      query: ({ limit = 25, page = 0 }) => ({
        url: `${BREEDS_URL}?limit=${limit}&page=${page}`
      }),
      providesTags: (result = []) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Breeds' as const, id })),
              { type: 'Breeds', id: 'LIST' }
            ]
          : [{ type: 'Breeds', id: 'LIST' }]
    }),
    getBreedById: build.query<BreedsResponse, { id?: string }>({
      query: ({ id }) => ({
        url: `${BREEDS_URL}/${id}`
      })
    })
  })
});

export const { useGetBreedsQuery, useGetBreedByIdQuery } = breedsApi;
