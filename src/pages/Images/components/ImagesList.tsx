import { Box } from '@mui/material';
import { ImagesListItem } from './ImagesListItem';

type ImagesListProps = {
  images: Array<{
    id: string;
    url: string;
  }>;
  favoriteIds: Set<string>;
  onAddFavorite: (id: string) => () => void;
};

export const ImagesList = ({
  images,
  onAddFavorite,
  favoriteIds
}: ImagesListProps) => (
  <Box
    sx={{
      height: '100%',
      minHeight: '70vh',
      margin: '20px 0',
      padding: '0 20px',
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
    {(images || []).map((image, index) => {
      return (
        <ImagesListItem
          key={image.id}
          index={index}
          image={image}
          isFavorite={favoriteIds.has(image.id)}
          onAddFavorite={onAddFavorite}
        />
      );
    })}
  </Box>
);
