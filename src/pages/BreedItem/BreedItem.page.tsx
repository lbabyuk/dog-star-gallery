import { useParams, useNavigate, Link } from 'react-router-dom';
import { Box, Container, Stack, Button, Typography } from '@mui/material';
import { useGetBreedsQuery } from '../../services/breeds';
import { LoadingStatus } from '../../components/molecules/LoadingStatus';
import { TypographyElement } from './BreedItemStyled';
import { LogoIcon, YellowArrowIcon } from '../../components/atoms/Icons';

export const BreedItem = () => {
  const { breedId } = useParams();
  const { data: breeds, isLoading } = useGetBreedsQuery();
  const navigate = useNavigate();

  const breed = (breeds || []).find(item => item.id === Number(breedId));

  return (
    <Container>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}

      {breed === undefined ? (
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Typography sx={{ textAlign: 'center' }} variant="h6">
            The Breed not found :(
          </Typography>

          <Link
            to="/breeds"
            style={{
              color: '#921FED',
              display: 'flex',
              gap: '10px'
            }}
          >
            Back to Breeds
            <YellowArrowIcon />
          </Link>
        </Stack>
      ) : (
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
            <Stack spacing={2} mb={{ xs: 5, md: 0 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="h6">
                  {breed?.name ? breed?.name : '***'}
                </Typography>{' '}
                <LogoIcon />
              </Stack>

              <Stack spacing={0.5}>
                <TypographyElement>
                  Bred for:{' '}
                  <span className="span">
                    {breed?.bred_for ? breed?.bred_for : '***'}
                  </span>
                </TypographyElement>
                <TypographyElement>
                  Breed group:{' '}
                  <span className="span">
                    {breed?.breed_group ? breed?.breed_group : '***'}
                  </span>
                </TypographyElement>
                <TypographyElement>
                  Life span:{' '}
                  <span className="span">
                    {breed?.life_span ? breed?.life_span : '***'}
                  </span>
                </TypographyElement>
                <TypographyElement>
                  Temperament:{' '}
                  <span className="span">
                    {breed?.temperament ? breed?.temperament : '***'}
                  </span>
                </TypographyElement>
              </Stack>
            </Stack>
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
      )}
    </Container>
  );
};
