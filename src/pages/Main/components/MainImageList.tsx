import { Box } from '@mui/material';
import { MainImageItem } from './MainImageItem';

type MainImageListProps = {
  favoriteImages: Array<{ id: string; url: string; isFavorite: boolean }>;
  onAddFavorite: (id: string) => () => void;
};

export const MainImageList = ({
  favoriteImages,
  onAddFavorite
}: MainImageListProps) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: {
        sx: '1fr',
        md: '1fr 1fr',
        lg: '1fr 1fr 1fr'
      },
      gap: '20px',
      padding: '20px'
    }}
  >
    {(favoriteImages || []).map(favoriteImage => (
      <MainImageItem
        key={favoriteImage.id}
        favoriteImage={favoriteImage}
        onAddFavorite={onAddFavorite}
      />
    ))}
  </Box>
);
