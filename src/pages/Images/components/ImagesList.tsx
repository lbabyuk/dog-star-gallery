import { Box } from '@mui/material';
import { ImagesListItem } from './ImagesListItem';

type ImagesListProps = {
  favoriteImages: Array<{ id: string; url: string; isFavorite: boolean }>;
  onAddFavorite: (id: string) => () => void;
};

export const ImagesList = ({
  favoriteImages,
  onAddFavorite
}: ImagesListProps) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: '1fr 1fr',
        md: '1fr 1fr',
        lg: '1fr 1fr 1fr'
      },
      gap: '20px',
      padding: '20px'
    }}
  >
    {(favoriteImages || []).map(favoriteImage => (
      <ImagesListItem
        key={favoriteImage.id}
        favoriteImage={favoriteImage}
        onAddFavorite={onAddFavorite}
      />
    ))}
  </Box>
);
