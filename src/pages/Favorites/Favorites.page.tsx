import { Box, Container, Stack, Typography } from '@mui/material';
import { useGetFavoritesQuery } from '../../services/favorites';
import { LoadingStatus } from '../../components/molecules/LoadingStatus';
import { FavoriteImageList } from './components/FavoriteImageList';
import { PowIcon } from '../../components/atoms/Icons';

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
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <Typography variant="h5">Your favorite images</Typography>
          <PowIcon
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px'
            }}
          />
        </Stack>
        <FavoriteImageList favoriteImages={favoriteImages ?? []} />
      </Box>
    </Container>
  );
};
