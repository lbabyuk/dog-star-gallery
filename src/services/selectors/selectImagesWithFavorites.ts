import { createSelector } from '@reduxjs/toolkit';
import { favoritesApi } from '../favorites';
import { imagesApi } from '../images';
import { RootState } from '../store';

export interface GetImageProps {
  getImagesProps: {
    limit: number;
    page: number;
    mime_types?: string;
    order?: string;
  };
  sub_id: string;
}

export const selectImagesWithFavorites = ({
  getImagesProps,
  sub_id
}: GetImageProps) =>
  createSelector(
    (state: RootState) =>
      imagesApi.endpoints.getImages.select(getImagesProps)(state)?.data || [],
    (state: RootState) =>
      favoritesApi.endpoints.getFavorites.select({ sub_id })(state)?.data || [],
    (images, favorites) => {
      const favoriteIds = new Set(favorites.map(fav => fav.image_id));
      return images.map(image => ({
        ...image,
        isFavorite: favoriteIds.has(image.id)
      }));
    }
  );
