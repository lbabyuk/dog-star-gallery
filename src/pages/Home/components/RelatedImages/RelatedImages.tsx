import { useLocation } from 'react-router-dom';
import { Container, Stack } from '@mui/material';
import { GalleryItemProps } from '../GalleryImagesContent';
import { EmptyStateComponent } from './EmptyStateComponent';
import { RelatedImagesContent } from './RelatedImagesContent';
import { CustomImage } from '../../../../components/atoms/CustomImage';
import { TitleComponent } from '../../../../components/molecules';

export const RelatedImages = () => {
  const location = useLocation();

  const { clickedImage, images } = location.state || {};

  if (!clickedImage || !images) {
    return <EmptyStateComponent />;
  }

  const { breeds, url } = clickedImage;
  const clickedBreed = breeds[0] || {};
  const { name, id } = clickedBreed;

  const relatedImages = images.filter((item: GalleryItemProps) => {
    const breed = item.breeds[0];

    return breed?.id === id || breed?.name === name;
  });

  return (
    <Container>
      <Stack justifyContent="space-between" gap={3}>
        <TitleComponent
          title={clickedBreed?.name ? clickedBreed?.name : '***'}
        />
        <RelatedImagesContent name={clickedBreed?.name} url={url} />
        <Stack
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
        >
          {relatedImages.map((item: GalleryItemProps) => (
            <CustomImage
              key={item.id}
              src={item.url}
              alt={'Related Dog'}
              sx={{
                margin: '5px',
                width: '250px',
                height: '250px'
              }}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};
