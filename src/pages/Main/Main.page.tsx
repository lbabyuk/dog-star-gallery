import { useState, ChangeEvent } from 'react';
import { Container, Box } from '@mui/material';
import { useAddFavoritesMutation } from '../../services/favorites';
import { useGetImagesWithFavorites } from '../../utilities';
import LoadingStatus from '../../components/atoms/LoadingStatus';
import SortedComponent from '../../components/molecules/SortedComponent';
import PaginationComponent from '../../components/molecules/Pagination/PaginationComponent';
import { StyledBox } from './MainStyled';
import { MainImageList } from '../../components/molecules/MainImageComponent/MainImageList';

export const Main = () => {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('RANDOM');

  const { data: favoriteImages, isLoading } = useGetImagesWithFavorites({
    page,
    order
  });

  const [addFavorite] = useAddFavoritesMutation();

  const handleAddClick = (id: string) => () => {
    addFavorite({ image_id: id, sub_id: 'olena' });
  };

  const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };

  return (
    <Container>
      {isLoading && <LoadingStatus />}
      <Box sx={{ mt: '50px' }}>
        <SortedComponent ordered={setOrder} order={order} />
      </Box>
      <MainImageList
        favoriteImages={favoriteImages}
        onAddFavorite={handleAddClick}
      />
      <StyledBox display="flex" justifyContent="flex-end" alignItems="center">
        <PaginationComponent
          count={favoriteImages.length}
          page={page}
          onChange={handlePagination}
        />
      </StyledBox>
    </Container>
  );
};
