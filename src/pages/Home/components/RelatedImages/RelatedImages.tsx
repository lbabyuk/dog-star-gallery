import { useLocation } from 'react-router-dom';
import { Container, Typography, Stack } from '@mui/material';
import { GalleryItemProps } from '../GalleryImagesContent';
import { LogoIcon } from '../../../../components/atoms/Icons';
import { EmptyStateComponent } from './EmptyStateComponent';
import { RelatedImagesContent } from './RelatedImagesContent';
import { CustomImage } from '../../../../components/atoms/Image';

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
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          <Typography variant="h2">
            {clickedBreed?.name ? clickedBreed?.name : '***'}
          </Typography>
          <LogoIcon />
        </Stack>
        <RelatedImagesContent name={clickedBreed?.name} url={url} />
        <Stack
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
        >
          {relatedImages.map((item: GalleryItemProps) => (
            <CustomImage
              component="img"
              key={item.id}
              src={item.url}
              alt={'Related Dog'}
              sx={(theme: { palette: { grey: number[] } }) => ({
                width: '250px',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '20px',
                margin: '5px',
                boxShadow: `6px 6px 0 0 ${theme.palette.grey[900]}`
              })}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};
