import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, Stack } from '@mui/material';
import { GalleryItemProps } from './GalleryImagesContent';
import { LogoIcon, YellowArrowIcon } from '../../../components/atoms/Icons';

export const RelatedImages = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { clickedImage, images } = location.state || {};

  if (!clickedImage || !images) {
    return (
      <Container>
        <Box>
          <Typography variant="h4" align="center" m={4} p={4}>
            No related images found :( Try again
          </Typography>
          <Button
            onClick={() => navigate('/')}
            variant="text"
            endIcon={<YellowArrowIcon />}
            sx={{
              '&:hover': {
                backgroundColor: theme => theme.palette.action.hover,
                boxShadow: theme => `2px 2px 0 0 ${theme.palette.grey[900]}`,
                color: theme => theme.palette.grey[600],
                border: theme => theme.palette.grey[600]
              }
            }}
          >
            Back to Gallery
          </Button>
        </Box>
      </Container>
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
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          <Typography variant="h6">
            {clickedBreed?.name ? clickedBreed?.name : '***'}
          </Typography>
          <LogoIcon />
        </Stack>
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr' },
            gap: '60px',
            flexGrow: 1,
            overflowX: 'hidden',
            padding: '10px'
          }}
        >
          <Box
            component="img"
            loading="lazy"
            src={url}
            alt={clickedBreed?.name || 'Clicked Dog'}
            sx={{
              width: '100%',
              height: '100%',
              aspectRatio: 1,
              objectFit: 'cover',
              borderRadius: '20px',
              marginBottom: '16px',
              boxShadow: theme => `6px 6px 0 0 ${theme.palette.grey[900]}`
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}
          >
            <Box>
              <Button
                onClick={() => navigate('/')}
                endIcon={<YellowArrowIcon />}
                sx={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  color: theme => theme.palette.grey[900],
                  border: theme => `1px solid ${theme.palette.grey[800]}`,
                  backgroundColor: theme => theme.palette.background.paper,
                  boxShadow: theme => `4px 4px 0 0 ${theme.palette.grey[900]}`,
                  fontWeight: 400,
                  '&:hover': {
                    backgroundColor: theme => theme.palette.action.hover,
                    color: theme => theme.palette.grey[600]
                  }
                }}
              >
                Back to Gallery
              </Button>
            </Box>
          </Box>
        </Box>
        <Stack
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {relatedImages.map((item: GalleryItemProps) => (
            <Box
              component="img"
              key={item.id}
              src={item.url}
              alt={'Related Dog'}
              sx={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '20px',
                marginBottom: '16px',
                boxShadow: theme => `6px 6px 0 0 ${theme.palette.grey[900]}`
              }}
            />
          ))}
        </Stack>
      </Stack>

      
    </Container>
  );
};
