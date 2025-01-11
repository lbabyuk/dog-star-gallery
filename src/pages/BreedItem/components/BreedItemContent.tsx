import { Stack, Typography } from '@mui/material';
import { LogoIcon } from '../../../components/atoms/Icons';

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
}: BreedItemContentProps) => {
  return (
    <Stack spacing={2} mb={{ xs: 5, md: 0 }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="h3">{name ? name : '***'}</Typography> <LogoIcon />
      </Stack>
      <Stack spacing={2}>
        <Typography variant="body1">
          Origin:{' '}
          <Typography
            variant="span"
            sx={{ color: theme => theme.palette.grey[500] }}
          >
            {origin ? origin : '***'}
          </Typography>
        </Typography>
        <Typography>
          Weight Range:{' '}
          <Typography
            variant="span"
            sx={{ color: theme => theme.palette.grey[500] }}
          >
            {weight ? weight : '***'} kg
          </Typography>
        </Typography>
        <Typography>
          Height:{' '}
          <Typography
            variant="span"
            sx={{ color: theme => theme.palette.grey[500] }}
          >
            {height ? height : '***'} sm
          </Typography>
        </Typography>
        <Typography>
          Life span:{' '}
          <Typography
            variant="span"
            sx={{ color: theme => theme.palette.grey[500] }}
          >
            {life ? life : '***'}
          </Typography>
        </Typography>
        <Typography>
          Bred for:{' '}
          <Typography
            variant="span"
            sx={{ color: theme => theme.palette.grey[500] }}
          >
            {breedFor ? breedFor : '***'}
          </Typography>
        </Typography>
        <Typography>
          Breed group:{' '}
          <Typography
            variant="span"
            sx={{ color: theme => theme.palette.grey[500] }}
          >
            {breedGroup ? breedGroup : '***'}
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
};
