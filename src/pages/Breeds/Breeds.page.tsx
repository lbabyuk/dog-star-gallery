import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { useGetBreedsQuery, Breed } from '../../services/breeds';
import {
  DefaultInfo,
  LoadingStatus,
  SearchComponent,
  TitleComponent
} from '../../components/molecules';
import { YellowArrowIcon } from '../../components/atoms/Icons';
import { StyledBox } from './BreedsStyled';
import { BreedsList } from './components/BreedsList';
import { SortBreed } from './components/SortBreed';
import { useDebounce } from '../../utilities/hooks';
import { CustomButton } from '../../components/atoms';
import { TITLES_DATA } from '../../constants/titlesData';

export const Breeds = () => {
  const { data: breeds, isLoading } = useGetBreedsQuery({ limit: 25 });
  const [searchQuery, setSearchQuery] = useState('');
  const [sorted, setSorted] = useState<Breed[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const debouncedSearchTerm = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (breeds) {
      setSorted(breeds);
    }
  }, [breeds]);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  const handleSortedUp = () => {
    const sortedBreeds = [...sorted].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setSorted(sortedBreeds);
  };

  const handleSortedDown = () => {
    const sortedBreeds = [...sorted].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSorted(sortedBreeds);
  };

  const filteredBreeds = searchQuery
    ? sorted.filter(breed =>
        breed.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
    : sorted;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  if (isLoading) return <LoadingStatus />;

  return (
    <Container>
      <TitleComponent title={TITLES_DATA.breedsPageTitle} />
      <StyledBox>
        <SearchComponent onChange={handleChange} input={searchQuery} />
        <SortBreed
          onHandleSortDown={handleSortedDown}
          onHandleSortUp={handleSortedUp}
        />
      </StyledBox>

      {filteredBreeds?.length === 0 ? (
        <DefaultInfo title=" Ups, no breed found 🙁. Try again!" />
      ) : (
        <BreedsList
          filteredBreeds={filteredBreeds}
          visibleCount={visibleCount}
        />
      )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <CustomButton
          variant="textPrimary"
          onClick={loadMore}
          endIcon={<YellowArrowIcon />}
        >
          Load More
        </CustomButton>
      </Box>
    </Container>
  );
};
