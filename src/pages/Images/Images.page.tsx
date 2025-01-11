import { useState, ChangeEvent } from 'react';
import { Container} from '@mui/material';
import { useAddFavoritesMutation } from '../../services/favorites';
import { useGetImagesWithFavorites } from '../../utilities';
import {
  SortedComponent,
  LoadingStatus,
  PaginationComponent
} from '../../components/molecules';
import { ImagesList } from './components/ImagesList';

export const Images = () => {
  const [page, setPage] = useState(1);
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

  if (isLoading) return <LoadingStatus />;

  return (
    <Container>
      <SortedComponent ordered={setOrder} />

      <ImagesList
        favoriteImages={favoriteImages}
        onAddFavorite={handleAddClick}
      />

      <PaginationComponent
        count={favoriteImages.length}
        page={page}
        onChange={handlePagination}
      />
    </Container>
  );
};
