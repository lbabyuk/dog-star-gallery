import { ChangeEvent, useState } from 'react';
import { useGetImagesQuery } from '../../services/images';
import { GalleryImages } from './components/GalleryImages';
import { Container, Box, SelectChangeEvent, Typography } from '@mui/material';
import {
  PaginationComponent,
  SortedComponent
} from '../../components/molecules';
import { Image } from '../../services/images';
import { PageSkeleton } from '../../components/atoms/PageSkeleton/PageSkeleton';
import { SelectComponent } from '../../components/molecules/SelectComponent';

export const Gallery = () => {
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState('RANDOM');
  const [imageType, setImageType] = useState('jpg');

  const { data: images } = useGetImagesQuery({
    has_breeds: true,
    order,
    page,
    limit: 6,
    mime_types: imageType
  }) as { data: Image[] };

  const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };

  const handleImageTypeChange = (event: SelectChangeEvent) => {
    setImageType(event.target.value as string);
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr',
            md: '1fr 1fr',
            lg: '1fr 1fr'
          },
          justifyItems: { sx: 'stretch', md: 'center' }
        }}
      >
        <SelectComponent
          imageType={imageType}
          onHandleImageTypeChange={handleImageTypeChange}
        />
        <SortedComponent ordered={setOrder} />
      </Box>
      {!images ? (
        <PageSkeleton />
      ) : images.length === 0 ? (
        <Box
          sx={{ textAlign: 'center', mt: 4, height: 'auto', minHeight: '70vh' }}
        >
          <Typography variant="h6" color="primary">
            No images found for the selected type.
          </Typography>
        </Box>
      ) : (
        <GalleryImages images={images} />
      )}

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
