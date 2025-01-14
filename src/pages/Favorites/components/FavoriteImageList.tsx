import { useDeleteFavoritesMutation } from '../../../services/favorites';
import { FavoriteImageListItem } from './FavoriteImageListItem';
import { GridWrapper } from '../../../components/atoms/GridWrapper';

type FavoriteImageListProps = {
  favoriteImages: Array<{
    id: number;
    image: { id: string; url: string };
    image_id: string;
    user_id: string;
    sub_id: string | null;
    created_at: string;
  }>;
  visibleCount: number;
};

export const FavoriteImageList = ({
  favoriteImages = [],
  visibleCount
}: FavoriteImageListProps) => {
  const [deleteFavorite] = useDeleteFavoritesMutation();

  const handleDeleteFavorite = (id: number) => {
    deleteFavorite(id);
  };

  return (
    <GridWrapper>
      {(favoriteImages || []).slice(0, visibleCount).map(favoriteImage => (
        <FavoriteImageListItem
          key={favoriteImage.id}
          favoriteImage={favoriteImage}
          onDeleteFavorite={handleDeleteFavorite}
        />
      ))}
    </GridWrapper>
  );
};
