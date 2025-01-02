import { Box, Container, Typography } from '@mui/material';
import { useGetFavoritesQuery } from '../../services/favorites';
import { LoadingStatus } from '../../components/molecules/LoadingStatus';
import { FavoriteImageList } from './components/FavoriteImageList';

export const Favorites = () => {
  const { data: favoriteImages, isLoading } = useGetFavoritesQuery({
    sub_id: 'olena'
  });

  return (
    <Container>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <Box>
        {(favoriteImages || []).length === 0 ? (
          <Typography variant="h4" component="h4" align="center" m={4} p={4}>
            No favorite dogs yet
          </Typography>
        ) : (
          <FavoriteImageList favoriteImages={favoriteImages ?? []} />
        )}
      </Box>
    </Container>
  );
};
