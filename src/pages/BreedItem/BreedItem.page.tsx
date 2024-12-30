/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Stack,
  Button,
  Typography,
  styled
} from '@mui/material';
import { useGetBreedsQuery } from '../../services/breeds';
import LoadingStatus from '../../components/atoms/LoadingStatus';
import { ImageElement } from './BreedItemStyled';
import './BreedItem.css';

import YellowArrowIcon from '../../components/atoms/Icons/YellowArrowIcon';
import powGroup from '../../assets/path-group.png';
import LogoIcon from '../../components/atoms/Icons/LogoIcon';

const TypographyElement = styled(Typography)(({ theme }) => ({
  padding: '8px 0',
  margin: '8px',
  fontSize: '1.65rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.45rem'
  },
  span: {
    fontSize: '1.65rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.45rem'
    }
  }
}));

export const BreedItem: FC = () => {
  const { breedId } = useParams();
  const { data: breeds, isLoading } = useGetBreedsQuery();
  const navigate = useNavigate();

  const breed = (breeds || []).find(item => item.id === Number(breedId));

  return (
    <Container
      sx={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px',
        overflowX: 'hidden'
      }}
    >
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr' },
          margin: '50px 0',
          gap: '60px',
          flexGrow: 1,
          overflowX: 'hidden',
          padding: '10px'
        }}
      >
        <img
          style={{
            width: '100%',
            height: '100%',
            aspectRatio: 1,
            objectFit: 'cover',
            borderRadius: '20px',
            marginBottom: '16px',
            boxShadow: `6px 6px 0 0 #212121`
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
          <Stack spacing={2}>
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
                border: '1px solid #ccc',
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
      <Box>
        <ImageElement src={powGroup} alt="powGroup" />
      </Box>
    </Container>
  );
};
