import { useGetFavoritesQuery } from '../../services/favorites';
import { useGetImagesQuery } from '../../services/images';
import { selectImagesWithFavorites } from '../../services/selectors';
import { useTypedSelector } from '../../services/store';

type GetImagesWithFavoritesProps = {
  limit?: number;
  page: number;
  mime_types?: string;
  order?: string;
  has_breeds?: boolean;
};

export const useGetImagesWithFavorites = ({
  limit = 6,
  page,
  mime_types,
  order,
  has_breeds
}: GetImagesWithFavoritesProps) => {
  const { isLoading: isLoadingImages } = useGetImagesQuery({
    limit,
    page,
    mime_types,
    order,
    has_breeds
  });

  const { isLoading: isLoadingFavorites } = useGetFavoritesQuery({
    sub_id: 'olena'
  });
  const favoriteImages = useTypedSelector(
    selectImagesWithFavorites({
      getImagesProps: { limit, page, mime_types, order },
      sub_id: 'olena'
    })
  );
  return {
    data: favoriteImages,
    isLoading: isLoadingImages || isLoadingFavorites
  };
};
