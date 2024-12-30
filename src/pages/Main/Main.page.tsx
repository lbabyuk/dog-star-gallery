import { useState, ChangeEvent } from 'react';
import { Container, Box } from '@mui/material';
import { useAddFavoritesMutation } from '../../services/favorites';
import { useGetImagesWithFavorites } from '../../utilities';
import BorderHeartIcon from '../../components/atoms/Icons/BorderHeartIcon';
import LoadingStatus from '../../components/atoms/LoadingStatus';
import SortedComponent from '../../components/molecules/SortedComponent';
import PaginationComponent from '../../components/molecules/Pagination/PaginationComponent';
import { StyledBox, StyledButton } from './MainStyled';

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
          <Box key={favoriteImage.id}>
            <StyledButton
              onClick={handleAddClick(favoriteImage.id)}
              startIcon={
                favoriteImage.isFavorite ? (
                  <BorderHeartIcon
                    sx={{
                      color: theme => theme.palette.warning.main,
                      width: '35px',
                      height: '35px'
                    }}
                  />
                ) : (
                  <BorderHeartIcon
                    sx={{
                      color: theme => theme.palette.grey[900],
                      width: '35px',
                      height: '35px'
                    }}
                  />
                )
              }
            />
            <img
              src={favoriteImage.url}
              alt={favoriteImage.id}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                aspectRatio: 1,
                objectFit: 'cover',
                borderRadius: '20px',
                marginBottom: '16px',
                boxShadow: `6px 6px 0 0 #212121`
              }}
            />
          </Box>
        ))}
      </Box>
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
