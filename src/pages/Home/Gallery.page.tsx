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
import { LIMIT, TOTAL_COUNT } from '../../constants/paginationStyleData';

export const Gallery = () => {
  const [order, setOrder] = useState('RANDOM');
  const [imageType, setImageType] = useState('jpg');
  const [page, setPage] = useState(1);

  const limit = LIMIT;

  const { data: images, isLoading } = useGetImagesQuery({
    has_breeds: true,
    order,
    page,
    limit,
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

      {images?.length === 0 ? (
        <Box
          sx={{ textAlign: 'center', mt: 4, height: 'auto', minHeight: '60vh' }}
        >
          <Typography variant="h2" color="primary">
            No images found for the selected type
          </Typography>
        </Box>
      ) : (
        <GalleryImages images={images || []} />
      )}

      <PaginationComponent
        count={Math.ceil(TOTAL_COUNT / limit)}
        page={page}
        onChange={handlePagination}
      />
    </Container>
  );
};
