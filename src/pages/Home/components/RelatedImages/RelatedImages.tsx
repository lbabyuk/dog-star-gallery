import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Stack } from '@mui/material';
import { GalleryItemProps } from '../GalleryImagesContent';
import { RelatedImagesContent } from './RelatedImagesContent';
import { CustomImage } from '../../../../components/atoms';
import { TitleComponent, DefaultInfo } from '../../../../components/molecules';

export const RelatedImages = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { clickedImage, images } = location.state || {};

  if (!clickedImage || !images) {
    return (
      <DefaultInfo
        icon
        title=" No related images found 🙁 Try again"
        btnText=" Back to Gallery"
        onClick={() => navigate('/')}
      />
    );
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
