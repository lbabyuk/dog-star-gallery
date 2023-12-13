import { useGetFavoritesQuery } from '../../services/favorites';
import { useGetImagesQuery } from '../../services/images';
import { selectImagesWithFavorites } from '../../services/selectors';
import { useTypedSelector } from '../../services/store';

type GetImagesWithFavoritesProps = {
  limit?: number;
  page: number;
};

export const useGetImagesWithFavorites = ({
  limit = 4,
  page
}: GetImagesWithFavoritesProps) => {
  const { isLoading: isLoadingImages } = useGetImagesQuery({
    limit,
    page
  });
  const { isLoading: isLoadingFavorites } = useGetFavoritesQuery();
  const favoriteImages = useTypedSelector(
    selectImagesWithFavorites({
      getImagesProps: { limit, page }
    })
  );
  return {
    data: favoriteImages,
    isLoading: isLoadingImages || isLoadingFavorites
  };
};
