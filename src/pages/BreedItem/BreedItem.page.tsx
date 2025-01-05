import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Button, Typography } from '@mui/material';
import { useGetBreedsQuery } from '../../services/breeds';
import { LoadingStatus } from '../../components/molecules/LoadingStatus';
import { YellowArrowIcon } from '../../components/atoms/Icons';
import { HOME } from '../../constants/routes';
import { BreedItemContent } from './components/BreedItemContent';

export const BreedItem = () => {
  const { breedId } = useParams();
  const limit = 20;
  const { data: breeds, isLoading } = useGetBreedsQuery({ limit });
  const navigate = useNavigate();

  const breed = (breeds || []).find(item => item.id === Number(breedId));
  if (isLoading) return <LoadingStatus />;

  if (!breed) {
    return (
      <Container>
        <Typography variant="h4" align="center" m={4} p={4}>
          The Breed not found :(
        </Typography>

        <Button
          onClick={() => navigate(HOME.BREEDS)}
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
          Back to Breeds
        </Button>
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
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '100%',
            aspectRatio: 1,
            objectFit: 'cover',
            borderRadius: '20px',
            marginBottom: '16px',
            boxShadow: theme => `6px 6px 0 0 ${theme.palette.grey[900]}`
          }}
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
            <Button
              onClick={() => navigate(`/breeds`)}
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
              Back to Breeds
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
