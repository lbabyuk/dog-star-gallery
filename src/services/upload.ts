import { api } from './api';
import { ImagesResponse } from './images';

export const uploadImageApi = api.injectEndpoints({
  endpoints: build => ({
    getUploadImages: build.query<
      ImagesResponse,
      {
        sub_id?: string;
        limit?: number;
        order?: string;
      }
    >({
      query: ({ limit = 100, order = 'ASC' }) => ({
        url: `images/?limit=${limit}&order=${order}`
      }),
      providesTags: (result = []) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Images', id }) as const),
              { type: 'Images', id: 'LIST' }
            ]
          : [{ type: 'Images' as const, id: 'LIST' }]
    }),
    addUploadedImage: build.mutation<unknown, FormData>({
      query: body => ({
        url: `images/upload`,
        method: 'POST',
        body: body
      }),
      invalidatesTags: [{ type: 'Images' as const, id: 'LIST' }]
    }),
    deleteUploadedImage: build.mutation<{ id: string }, string>({
      query: id => ({
        url: `images/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Images' as const, id: 'LIST' }]
    })
  })
});

export const {
  useGetUploadImagesQuery,
  useAddUploadedImageMutation,
  useDeleteUploadedImageMutation
} = uploadImageApi;
