import { GridWrapper } from '../../../components/atoms';
import { BreedsListContent } from './BreedsListContent';

export type BreedsListProps = {
  filteredBreeds: Array<{
    id: number;
    name: string;
    temperament: string;
    image: { id: string; url: string };
  }>;
};
export const BreedsList = ({ filteredBreeds }: BreedsListProps) => (
  <GridWrapper>
    {(filteredBreeds || []).map(filteredBreed => (
      <BreedsListContent filteredBreed={filteredBreed} key={filteredBreed.id} />
    ))}
  </GridWrapper>
);
