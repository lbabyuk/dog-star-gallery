import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { useGetBreedsQuery } from '../../services/breeds';
import { YellowArrowIcon } from '../../components/atoms/Icons';
import { HOME } from '../../constants/routes';
import { BreedItemContent } from './components/BreedItemContent';
import { CustomButton, CustomImage } from '../../components/atoms';
import { DefaultInfo, LoadingStatus } from '../../components/molecules';

export const BreedItem = () => {
  const { breedId } = useParams();

  const { data: breeds, isLoading } = useGetBreedsQuery({ limit: 25 });
  const navigate = useNavigate();

  const breed = (breeds || []).find(item => item.id === Number(breedId));

  if (isLoading) return <LoadingStatus />;

  if (!breed) {
    return (
      <DefaultInfo
        title="The Breed not found 🙁."
        btnText=" Back to Breeds"
        onClick={() => navigate(HOME.BREEDS)}
        icon
      />
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
          sx={{
            marginBottom: '16px'
          }}
          src={breed?.image.url || ''}
          alt={breed?.name}
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
