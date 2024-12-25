import { useState, ChangeEvent } from 'react';
import { Container, ImageList, Box } from '@mui/material';
import { useAddFavoritesMutation } from '../../services/favorites';
import { useGetImagesWithFavorites } from '../../utilities';
import BorderHeartIcon from '../../components/atoms/Icons/BorderHeartIcon';
import LoadingStatus from '../../components/atoms/LoadingStatus';
import SortedComponent from '../../components/molecules/SortedComponent';
import PaginationComponent from '../../components/molecules/Pagination/PaginationComponent';
import {
  StyledBox,
  StyledImageListItem,
  StyledButton,
  StyledImage
} from './MainStyled';

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
      <Box sx={{ m: 4 }}>
        {isLoading && <LoadingStatus />}
        <SortedComponent ordered={setOrder} order={order} />
        <ImageList rowHeight={350}>
          {(favoriteImages || []).map(favoriteImage => (
            <StyledImageListItem key={favoriteImage.id}>
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
              <StyledImage
                src={favoriteImage.url}
                alt={favoriteImage.id}
                loading="lazy"
              />
            </StyledImageListItem>
          ))}
        </ImageList>
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
