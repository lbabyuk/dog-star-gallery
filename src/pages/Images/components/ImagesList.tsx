import { Box } from '@mui/material';
import { ImagesListItem } from './ImagesListItem';

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
  <Box
    sx={{
      margin: '20px 0',
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: '1fr 1fr',
        md: '1fr 1fr 1fr',
        lg: 'repeat(8, 1fr)'
      },
      gridTemplateRows: { lg: 'repeat(8, 5vw)', xs: 'auto' },
      gap: '1.5rem'
    }}
  >
    {(favoriteImages || []).map((favoriteImage, index) => {
      return (
        <ImagesListItem
          key={favoriteImage.id}
          index={index}
          favoriteImage={favoriteImage}
          onAddFavorite={onAddFavorite}
        />
      );
    })}
  </Box>
);
{
}
