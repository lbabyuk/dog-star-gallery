import { ChangeEvent, useState } from 'react';
import { useGetImagesQuery } from '../../services/images';
import { GalleryImages } from './components/GalleryImages';
import { Container, Box, SelectChangeEvent, Typography } from '@mui/material';
import {
  LoadingStatus,
  PaginationComponent,
  SortedComponent
} from '../../components/molecules';
import { SelectComponent } from '../../components/molecules/SelectComponent';

export const Gallery = () => {
  // const [page, setPage] = useState(1);
  const [order, setOrder] = useState('RANDOM');
  const [imageType, setImageType] = useState('jpg');
  const [page, setPage] = useState(1);

  const { data: images, isLoading } = useGetImagesQuery({
    has_breeds: true,
    order,
    page,
    limit: 9,
    mime_types: imageType
  });

  const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };

  const handleImageTypeChange = (event: SelectChangeEvent) => {
    setImageType(event.target.value as string);
  };

  if (isLoading) return <LoadingStatus />;

  if (images?.length === 0) {
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
        <Box
          sx={{ textAlign: 'center', mt: 4, height: 'auto', minHeight: '70vh' }}
        >
          <Typography variant="h4" color="primary">
            No images found for the selected type
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <PaginationComponent
            count={(images ?? []).length || 0}
            page={page}
            onChange={handlePagination}
          />
        </Box>
      </Container>
    );
  }

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
