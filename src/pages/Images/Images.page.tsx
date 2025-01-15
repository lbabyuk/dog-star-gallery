import { useState, ChangeEvent } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import {
  useAddFavoritesMutation,
  useGetFavoritesQuery
} from '../../services/favorites';
import {
  SortedComponent,
  LoadingStatus,
  PaginationComponent
} from '../../components/molecules';
import { ImagesList } from './components/ImagesList';
import { useGetImagesQuery } from '../../services/images';
import { TOTAL_COUNT } from '../../constants/paginationStyleData';
import { PowIcon } from '../../components/atoms/Icons';

export const Images = () => {
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState('RANDOM');

  const limit = 12;
  const { data: images, isLoading } = useGetImagesQuery({
    limit,
    page,
    order
  });

  const { data: favorites } = useGetFavoritesQuery({
    sub_id: 'olena'
  });
  const favoriteIds = new Set(favorites?.map(fav => fav.image_id));
  const [addFavoriteImage] = useAddFavoritesMutation();

  const handleAddClick = (id: string) => () => {
    addFavoriteImage({ image_id: id, sub_id: 'olena' });
  };

  if (isLoading) return <LoadingStatus />;

  const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };

  return (
    <Container>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
         mb="20px"
      >
        <Typography variant="h2">
          Choose your favorite image
        </Typography>
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
      <SortedComponent ordered={setOrder} />
      <ImagesList
        images={images || []}
        onAddFavorite={handleAddClick}
        favoriteIds={favoriteIds}
      />
      <PaginationComponent
        count={Math.ceil(TOTAL_COUNT / limit)}
        page={page}
        onChange={handlePagination}
      />
    </Container>
  );
};
