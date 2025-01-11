import { useNavigate } from 'react-router-dom';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useGetFavoritesQuery } from '../../services/favorites';
import { LoadingStatus } from '../../components/molecules/LoadingStatus';
import { FavoriteImageList } from './components/FavoriteImageList';
import { PowIcon, YellowArrowIcon } from '../../components/atoms/Icons';
import { CustomButton } from '../../components/atoms/Button';
import { HOME } from '../../constants/routes';

export const Favorites = () => {
  const { data: favoriteImages, isLoading } = useGetFavoritesQuery({
    sub_id: 'olena'
  });

  const navigate = useNavigate();

  if (isLoading) return <LoadingStatus />;
  if (favoriteImages?.length === 0) {
    return (
      <Container>
        <Box
          sx={{
            textAlign: 'center',
            mt: 4,
            height: 'auto'
          }}
        >
          <Typography variant="h2" m={4} p={4}>
            No favorite dogs yet 🙁 Try again
          </Typography>
          <CustomButton
            onClick={() => navigate(HOME.IMAGES)}
            variant="textPrimary"
            endIcon={<YellowArrowIcon />}
          >
            Add Favorite Breed Here
          </CustomButton>
        </Box>
      </Container>
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
