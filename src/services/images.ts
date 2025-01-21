import { api } from './api';

export interface Image {
  id: string;
  url: string;
  width: number;
  height: number;
  mime_type: string;
  image_id: string;
  breeds: [
    {
      weight: {
        imperial: string;
        metric: string;
      };
      height: {
        imperial: string;
        metric: string;
      };
      id: number;
      name: string;
      bred_for: string;
      breed_group: string;
      life_span: string;
      temperament: string;
      reference_image_id: string;
    }
  ];
}

export type ImagesResponse = Image[];

export const imagesApi = api.injectEndpoints({
  endpoints: build => ({
    getImages: build.query<
      ImagesResponse,
      {
        limit?: number;
        page?: number;
        order?: string;
        mime_types?: string;
        has_breeds?: boolean;
      }
    >({
      query: ({
        limit = 9,
        page = 0,
        order = 'RANDOM',
        mime_types = 'jpg',
        has_breeds = true
      }) => ({
        url: `images/search?size=medium&limit=${limit}&page=${page}&order=${order}&mime_types=${mime_types}&has_breeds=${has_breeds}`
      }),
      providesTags: (result = []) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Images', id }) as const),
              { type: 'Images', id: 'LIST' }
            ]
          : [{ type: 'Images' as const, id: 'LIST' }]
    }),
    deleteImage: build.mutation<{ id: string }, string>({
      query: id => ({
        url: `images/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Images' as const, id: 'LIST' }]
    }),
    getImageById: build.query<ImagesResponse, { id?: string }>({
      query: ({ id }) => ({
        url: `images/${id}`
      })
    })
  })
});

export const {
  useGetImagesQuery,
  useGetImageByIdQuery,
  useDeleteImageMutation
} = imagesApi;
