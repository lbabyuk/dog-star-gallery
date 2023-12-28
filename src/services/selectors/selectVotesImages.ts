import { createSelector } from '@reduxjs/toolkit';
import { votesApi } from '../votes';
import { imagesApi } from '../images';
import { RootState } from '../store';

export interface GetImageProps {
  getImagesProps: {
    limit: number;
    page: number;
    mime_types?: string;
    order?: string;
  };
}

export const selectImagesWithFavorites = ({
  getImagesProps,
  sub_id
}: GetImageProps) =>
  createSelector(
    (state: RootState) =>
      imagesApi.endpoints.getImages.select(getImagesProps)(state)?.data || [],
    (state: RootState) =>
      votesApi.endpoints.getVotes.select({ sub_id })(state)?.data || [],
    (images, votes) => {
      const votesIds = new Set(votes.map(vote => vote.image_id));
      return images.map(image => ({
        ...image,
        isFavorite: votesIds.has(image.id)
      }));
    }
  );
