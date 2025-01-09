import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { useGetBreedsQuery } from '../../services/breeds';
import { LoadingStatus } from '../../components/molecules/LoadingStatus';
import { YellowArrowIcon } from '../../components/atoms/Icons';
import { HOME } from '../../constants/routes';
import { BreedItemContent } from './components/BreedItemContent';
import { CustomButton } from '../../components/atoms/Button';
import { CustomImage } from '../../components/atoms/Image';

export const BreedItem = () => {
  const { breedId } = useParams();

  const { data: breeds, isLoading } = useGetBreedsQuery({ limit: 25 });
  const navigate = useNavigate();

  const breed = (breeds || []).find(item => item.id === Number(breedId));

  if (isLoading) return <LoadingStatus />;

  if (!breed) {
    return (
      <Container>
        <Box
          sx={{ textAlign: 'center', mt: 4, height: 'auto', minHeight: '70vh' }}
        >
          <Typography variant="h4" align="center" m={4} p={4}>
            The Breed not found :(
          </Typography>

          <CustomButton
            onClick={() => navigate(HOME.BREEDS)}
            variant="textPrimary"
            endIcon={<YellowArrowIcon />}
          >
            Back to Breeds
          </CustomButton>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
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
        <CustomImage
          component="img"
          sx={(theme: { palette: { grey: number[] } }) => ({
            width: '100%',
            height: '100%',
            aspectRatio: 1,
            objectFit: 'cover',
            borderRadius: '20px',
            marginBottom: '16px',
            boxShadow: `6px 6px 0 0 ${theme.palette.grey[900]}`
          })}
          src={breed?.image.url || ''}
          alt={breed?.name}
          loading="lazy"
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}
        >
          <BreedItemContent
            name={breed?.name}
            origin={breed?.origin}
            weight={breed?.weight?.imperial}
            height={breed?.height?.imperial}
            life={breed?.life_span}
            breedFor={breed?.bred_for}
            breedGroup={breed?.breed_group}
          />

          <Box>
            <CustomButton
              onClick={() => navigate(`/breeds`)}
              endIcon={<YellowArrowIcon />}
              variant="outlinedPrimary"
            >
              Back to Breeds
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
