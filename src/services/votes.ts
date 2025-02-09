import { api } from './api';
import { VOTES_URL } from '../utilities';

export interface Votes {
  image_id: string;
  sub_id?: string;
  value: number;
}

export type VotesResponse = {
  created_at: string;
  country_code: string;
  id: number;
  image: {
    id: string;
    url: string;
  };
  image_id: string;
  sub_id: string | null;
  user_id: string;
  value: number;
}[];

export const votesApi = api.injectEndpoints({
  endpoints: build => ({
    getVotes: build.query<VotesResponse, { sub_id?: string }>({
      query: ({ sub_id }) => ({ url: `${VOTES_URL}?sub_id=${sub_id}` }),

      providesTags: (result = []) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Votes', id }) as const),
              { type: 'Votes', id: 'LIST' }
            ]
          : [{ type: 'Votes' as const, id: 'LIST' }]
    }),
    addVotes: build.mutation<unknown, Votes>({
      query: body => ({
        url: `${VOTES_URL}`,
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Votes' as const, id: 'LIST' }]
    }),

    deleteVotes: build.mutation<{ id: number }, number>({
      query: id => ({
        url: `${VOTES_URL}/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Votes' as const, id: 'LIST' }]
    })
  })
});

export const { useAddVotesMutation, useGetVotesQuery, useDeleteVotesMutation } =
  votesApi;
