import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { useGetFavoritesQuery } from '../../services/favorites';
import {
  DefaultInfo,
  LoadingStatus,
  TitleComponent
} from '../../components/molecules';
import { FavoriteImageList } from './components/FavoriteImageList';
import { YellowArrowIcon } from '../../components/atoms/Icons';
import { CustomButton, MotionTransitionWrapper } from '../../components/atoms';
import { HOME } from '../../constants/routes';
import { TITLES_DATA } from '../../constants/titlesData';
import { useVisibleImage } from '../../hooks/useVisibleImage';

export const Favorites = () => {
  const { data: favoriteImages, isLoading } = useGetFavoritesQuery({
    sub_id: 'olena'
  });
  const navigate = useNavigate();
  const { visibleData, handleShowImages, isAllVisible } = useVisibleImage(
    favoriteImages,
    6,
    3
  );

  if (isLoading) return <LoadingStatus />;

  if (favoriteImages?.length === 0) {
    return (
      <DefaultInfo
        icon
        title=" No favorite dogs yet 🙁 Try again"
        btnText="Add Favorite Breed Here"
        onClick={() => navigate(HOME.IMAGES)}
      />
    );
  }

  return (
    <Container>
      <MotionTransitionWrapper>
        <Box>
          <TitleComponent title={TITLES_DATA.favoritesPageTitle} />
          <FavoriteImageList favoriteImages={visibleData} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <CustomButton
              variant="textPrimary"
              onClick={handleShowImages}
              endIcon={<YellowArrowIcon />}
            >
              {isAllVisible ? 'Show less' : 'Show More'}
            </CustomButton>
          </Box>
        </Box>
      </MotionTransitionWrapper>
    </Container>
  );
};
