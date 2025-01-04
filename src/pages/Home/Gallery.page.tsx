import { ChangeEvent, useState } from 'react';
import { useGetImagesQuery } from '../../services/images';
import { GalleryImages } from './components/GalleryImages';
import { Container, Box } from '@mui/material';
import {
  PaginationComponent,
  SortedComponent
} from '../../components/molecules';
import { Image } from '../../services/images';

export const Gallery = () => {
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState('RANDOM');

  const { data: images } = useGetImagesQuery({
    has_breeds: true,
    order,
    page,
    limit: 9
  }) as { data: Image[] };

  const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };

  return (
    <Container>
      <SortedComponent ordered={setOrder} />
      <GalleryImages images={images} />
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <PaginationComponent
          count={(images ?? []).length || 0}
          page={page}
          onChange={handlePagination}
        />
      </Box>
    </Container>
  );
};
