import { GridWrapper } from '../../../components/atoms/GridWrapper';
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
  <GridWrapper>
    {(filteredBreeds || []).slice(0, visibleCount).map(filteredBreed => (
      <BreedsListContent filteredBreed={filteredBreed} key={filteredBreed.id} />
    ))}
  </GridWrapper>
);
