import { Stack, Typography } from '@mui/material';

import { LogoIcon } from '../../../components/atoms/Icons';
import { TypographyElement } from '../BreedItemStyled';

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
        <Typography variant="h6">{name ? name : '***'}</Typography> <LogoIcon />
      </Stack>
      <Stack spacing={0.5}>
        <TypographyElement>
          Origin: <span className="span">{origin ? origin : '***'}</span>
        </TypographyElement>
        <TypographyElement>
          Weight Range:{' '}
          <span className="span">{weight ? weight : '***'} kg</span>
        </TypographyElement>
        <TypographyElement>
          Height: <span className="span">{height ? height : '***'} sm</span>
        </TypographyElement>
        <TypographyElement>
          Life span: <span className="span">{life ? life : '***'}</span>
        </TypographyElement>
        <TypographyElement>
          Bred for: <span className="span">{breedFor ? breedFor : '***'}</span>
        </TypographyElement>
        <TypographyElement>
          Breed group:{' '}
          <span className="span">{breedGroup ? breedGroup : '***'}</span>
        </TypographyElement>
      </Stack>
    </Stack>
  );
};
