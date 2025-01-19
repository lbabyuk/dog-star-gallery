import { ChangeEvent, useState } from 'react';
import { Container, Box, SelectChangeEvent, styled } from '@mui/material';
import { useGetImagesQuery } from '../../services/images';
import { GalleryImages } from './components/GalleryImages';
import {
  DefaultInfo,
  LoadingStatus,
  PaginationComponent,
  SortedComponent,
  TitleComponent,
  SelectComponent
} from '../../components/molecules';
import { LIMIT, TOTAL_COUNT } from '../../constants/paginationStyleData';
import { TITLES_DATA } from '../../constants/titlesData';
import {
  DEFAULT_IMAGE_TYPE,
  DEFAULT_ORDER_TYPE
} from '../../constants/imageTypeData';
import { MotionTransitionWrapper } from '../../components/atoms';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export const Gallery = () => {
  const [order, setOrder] = useState(DEFAULT_ORDER_TYPE);
  const [imageType, setImageType] = useState(DEFAULT_IMAGE_TYPE);
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
      <MotionTransitionWrapper>
        <TitleComponent title="Breed Gallery" />
        <StyledBox>
          <SelectComponent
            imageType={imageType}
            onHandleImageTypeChange={handleImageTypeChange}
          />
          <SortedComponent ordered={setOrder} />
        </StyledBox>

        {images?.length === 0 ? (
          <DefaultInfo title={TITLES_DATA.noImagesFound} />
        ) : (
          <GalleryImages images={images || []} />
        )}

        <PaginationComponent
          count={Math.ceil(TOTAL_COUNT / limit)}
          page={page}
          onChange={handlePagination}
        />
      </MotionTransitionWrapper>
    </Container>
  );
};
