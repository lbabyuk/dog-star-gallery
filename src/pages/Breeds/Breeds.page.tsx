import { useState, useEffect } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useGetBreedsQuery, Breed } from '../../services/breeds';
import { LoadingStatus, SearchComponent } from '../../components/molecules';
import { YellowArrowIcon } from '../../components/atoms/Icons';
import { StyledBox } from './BreedsStyled';
import { BreedsList } from './components/BreedsList';
import { SortBreed } from './components/SortBreed';
import { useDebounce } from '../../utilities/hooks';

export const Breeds = () => {
  const limit = 20;
  const { data: breeds, isLoading } = useGetBreedsQuery({ limit });
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
      <StyledBox>
        <SearchComponent onChange={handleChange} input={searchQuery} />
        <SortBreed
          onHandleSortDown={handleSortedDown}
          onHandleSortUp={handleSortedUp}
        />
      </StyledBox>

      {filteredBreeds.length === 0 ? (
        <Box
          sx={{
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography variant="h5">
            Ups, no breed found :(. Try again!
          </Typography>
        </Box>
      ) : (
        <BreedsList
          filteredBreeds={filteredBreeds}
          visibleCount={visibleCount}
        />
      )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          width: '100%'
        }}
      >
        <Button
          variant="text"
          onClick={loadMore}
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
          Load More breeds
        </Button>
      </Box>
    </Container>
  );
};
