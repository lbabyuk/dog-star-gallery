import { Box, Container, Typography } from '@mui/material';
import { useGetFavoritesQuery } from '../../services/favorites';
import { LoadingStatus } from '../../components/molecules/LoadingStatus';
import { FavoriteImageList } from './components/FavoriteImageList';

export const Favorites = () => {
  const { data: favoriteImages, isLoading } = useGetFavoritesQuery({
    sub_id: 'olena'
  });

  if (isLoading) return <LoadingStatus />;
  if ((favoriteImages || []).length === 0) {
    return (
      <Box>
        <Typography variant="h4" component="h4" align="center" m={4} p={4}>
          No favorite dogs yet
        </Typography>
      </Box>
    );
  }

  return (
    <Container>
      <Box>
        <FavoriteImageList favoriteImages={favoriteImages ?? []} />
      </Box>
    </Container>
  );
};
