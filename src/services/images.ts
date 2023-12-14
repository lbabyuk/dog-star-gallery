import { api } from './api';

export interface Image {
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
      reference_image_ig: string;
    }
  ];
  id: string;
  url: string;
  width: number;
  height: number;
}

type ImagesResponse = Image[];

export const imagesApi = api.injectEndpoints({
  endpoints: build => ({
    getImages: build.query<
      ImagesResponse,
      {
        limit?: number;
        page?: number;
        order?: string;
        mime_types?: string;
      }
    >({
      query: ({
        limit = 10,
        page = 0,
        order = 'RANDOM',
        mime_types = 'jpg'
      }) => ({
        url: `images/search?limit=${limit}&page=${page}&order=${order}&mime_types=${mime_types}`
      }),
      providesTags: (result = []) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Images', id }) as const),
              { type: 'Images', id: 'LIST' }
            ]
          : [{ type: 'Images' as const, id: 'LIST' }]
    }),
    getImageById: build.query<ImagesResponse, { id?: string }>({
      query: ({ id }) => ({
        url: `images/${id}?`
      })
    })
  })
});

export const { useGetImagesQuery, useGetImageByIdQuery } = imagesApi;
