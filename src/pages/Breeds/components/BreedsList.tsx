import { Box } from '@mui/material';

import { BreedsListContent } from './BreedsListContent';

export type BreedsListProps = {
  filteredBreeds: Array<{
    id: number;
    name: string;
    temperament: string;
    image: { id: string; url: string };
  }>;
  visibleCount: number;
};
export const BreedsList = ({
  filteredBreeds,
  visibleCount
}: BreedsListProps) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: '1fr 1fr',
        md: '1fr 1fr',
        lg: '1fr 1fr 1fr'
      },
      gap: '20px',
      padding: '20px'
    }}
  >
    {(filteredBreeds || []).slice(0, visibleCount).map(filteredBreed => (
      <BreedsListContent filteredBreed={filteredBreed} key={filteredBreed.id} />
    ))}
  </Box>
);
