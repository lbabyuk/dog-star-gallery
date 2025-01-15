import { useState } from 'react';
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
import { CustomButton } from '../../components/atoms';
import { HOME } from '../../constants/routes';
import { TITLES_DATA } from '../../constants/titlesData';

export const Favorites = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const { data: favoriteImages, isLoading } = useGetFavoritesQuery({
    sub_id: 'olena'
  });
  const navigate = useNavigate();

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

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
      <Box>
        <TitleComponent title={TITLES_DATA.favoritesPageTitle} />
        <FavoriteImageList
          favoriteImages={favoriteImages ?? []}
          visibleCount={visibleCount}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <CustomButton
            variant="textPrimary"
            onClick={loadMore}
            endIcon={<YellowArrowIcon />}
          >
            Load More
          </CustomButton>
        </Box>
      </Box>
    </Container>
  );
};
