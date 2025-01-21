import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Container, Stack } from '@mui/material';

import {
  CustomButton,
  LeftArrowIcon,
  MotionTransitionWrapper
} from '../../../../components/atoms';
import { TitleComponent, DefaultInfo } from '../../../../components/molecules';
import { GalleryItemProps } from '../GalleryImages/types';
import { RelatedImagesSlider } from './RelatedImagesSlider';

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

  const { breeds } = clickedImage;
  const clickedBreed = breeds[0] || {};
  const { name, id } = clickedBreed;

  const relatedImages = images.filter((item: GalleryItemProps) => {
    const breed = item.breeds[0];
    return breed?.id === id || breed?.name === name;
  });

  return (
    <Container>
      <MotionTransitionWrapper>
        <Stack gap={1}>
          <Stack justifyContent="center" alignItems="center">
            <TitleComponent
              title={clickedBreed?.name ? clickedBreed?.name : '***'}
            />
            <Box sx={{ alignItems: 'flex-start' }}>
              <CustomButton
                onClick={() => navigate('/')}
                startIcon={<LeftArrowIcon />}
                variant="textPrimary"
              >
                Back to Gallery
              </CustomButton>
            </Box>
          </Stack>
          <RelatedImagesSlider relatedImages={relatedImages} />
        </Stack>
      </MotionTransitionWrapper>
    </Container>
  );
};
