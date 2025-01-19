import { useDeleteFavoritesMutation } from '../../../services/favorites';
import { FavoriteImageListItem } from './FavoriteImageListItem';
import { GridWrapper } from '../../../components/atoms';

type FavoriteImageListProps = {
  favoriteImages: Array<{
    id: number;
    image: { id: string; url: string };
    image_id: string;
    user_id: string;
    sub_id: string | null;
    created_at: string;
  }>;
};

export const FavoriteImageList = ({
  favoriteImages = []
}: FavoriteImageListProps) => {
  const [deleteFavorite] = useDeleteFavoritesMutation();

  const handleDeleteFavorite = (id: number) => {
    deleteFavorite(id);
  };

  return (
    <GridWrapper>
      {favoriteImages.map(favoriteImage => (
        <FavoriteImageListItem
          key={favoriteImage.id}
          favoriteImage={favoriteImage}
          onDeleteFavorite={handleDeleteFavorite}
        />
      ))}
    </GridWrapper>
  );
};
