import { createSelector } from '@reduxjs/toolkit';
import { votesApi } from '../votes';
import { imagesApi } from '../images';
import { RootState } from '../store';

interface GetImageProps {
  getVotesProps: {
    limit: number;
    page: number;
    mime_types?: string;
    order?: string;
  };
  sub_id: string;
  value: number;
}

export const selectVotesImages = ({ getVotesProps, sub_id }: GetImageProps) =>
  createSelector(
    (state: RootState) =>
      imagesApi.endpoints.getImages.select(getVotesProps)(state)?.data || [],
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
