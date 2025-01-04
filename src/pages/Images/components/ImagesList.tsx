import { ImagesListItem } from './ImagesListItem';
import { GridWrapper } from '../../../components/atoms/GridWrapper';

type ImagesListProps = {
  favoriteImages: Array<{
    id: string;
    url: string;
    isFavorite: boolean;
  }>;
  onAddFavorite: (id: string) => () => void;
};

export const ImagesList = ({
  favoriteImages,
  onAddFavorite
}: ImagesListProps) => (
  <GridWrapper>
    {(favoriteImages || []).map(favoriteImage => {
      return (
        <ImagesListItem
          key={favoriteImage.id}
          favoriteImage={favoriteImage}
          onAddFavorite={onAddFavorite}
        />
      );
    })}
  </GridWrapper>
);
