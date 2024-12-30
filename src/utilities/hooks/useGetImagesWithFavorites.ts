import { useGetFavoritesQuery } from '../../services/favorites';
import { useGetImagesQuery } from '../../services/images';
import { selectImagesWithFavorites } from '../../services/selectors';
import { useTypedSelector } from '../../services/store';

type GetImagesWithFavoritesProps = {
  limit?: number;
  page: number;
  mime_types?: string;
  order?: string;
};

export const useGetImagesWithFavorites = ({
  limit = 12,
  page,
  mime_types,
  order
}: GetImagesWithFavoritesProps) => {
  const { isLoading: isLoadingImages } = useGetImagesQuery({
    limit,
    page,
    mime_types,
    order
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
