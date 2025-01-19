import { Stack, Typography } from '@mui/material';
import { LogoIcon } from '../../../components/atoms';

type BreedItemContentProps = {
  name: string;
  origin: string;
  weight: string;
  height: string;
  life: string;
  breedFor: string;
  breedGroup: string;
};

export const BreedItemContent = ({
  name,
  origin,
  weight,
  height,
  life,
  breedFor,
  breedGroup
}: BreedItemContentProps) => (
  <Stack spacing={2} mb={{ xs: 5, md: 0 }}>
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography variant="h3">{name || '***'}</Typography> <LogoIcon />
    </Stack>
    <Stack spacing={2}>
      <Typography variant="body1">
        Origin:{' '}
        <Typography
          variant="span"
          sx={{ color: theme => theme.palette.grey[500] }}
        >
          {origin || '***'}
        </Typography>
      </Typography>
      <Typography>
        Weight Range:{' '}
        <Typography
          variant="span"
          sx={{ color: theme => theme.palette.grey[500] }}
        >
          {weight || '***'} kg
        </Typography>
      </Typography>
      <Typography>
        Height:{' '}
        <Typography
          variant="span"
          sx={{ color: theme => theme.palette.grey[500] }}
        >
          {height || '***'} sm
        </Typography>
      </Typography>
      <Typography>
        Life span:{' '}
        <Typography
          variant="span"
          sx={{ color: theme => theme.palette.grey[500] }}
        >
          {life || '***'}
        </Typography>
      </Typography>
      <Typography>
        Bred for:{' '}
        <Typography
          variant="span"
          sx={{ color: theme => theme.palette.grey[500] }}
        >
          {breedFor || '***'}
        </Typography>
      </Typography>
      <Typography>
        Breed group:{' '}
        <Typography
          variant="span"
          sx={{ color: theme => theme.palette.grey[500] }}
        >
          {breedGroup || '***'}
        </Typography>
      </Typography>
    </Stack>
  </Stack>
);
