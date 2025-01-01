/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  styled,
  ButtonGroup
} from '@mui/material';
import { useGetBreedsQuery, Breed } from '../../services/breeds';
import LoadingStatus from '../../components/molecules/LoadingStatus';
import {
  YellowArrowIcon,
  SortDownIcon,
  SortUpIcon
} from '../../components/atoms/Icons';
import SearchComponent from '../../components/molecules/SearchComponent';
import { StyledBox, StyledButton } from './BreedsStyled';

import { useDebounce } from '../../utilities/hooks/useDebounce';
import { BreedsList } from './components/BreedsList';

const StyledTypography = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.grey[500],
  textAlign: 'left',
  fontSize: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const Breeds = () => {
  const { data: breeds, isLoading } = useGetBreedsQuery();
  const [searchQuery, setSearchQuery] = useState('');
  const [sorted, setSorted] = useState<Breed[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

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

  const filteredBreeds = sorted.filter(breed =>
    breed.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <StyledBox>
        <SearchComponent onChange={handleChange} input={searchQuery} />
        <ButtonGroup
          variant="text"
          aria-label="text button group"
          sx={{ marginTop: { xs: '20px', md: 0, lg: 0 } }}
        >
          <StyledTypography variant="caption">Sort by:</StyledTypography>
          <StyledButton onClick={handleSortedDown}>
            <SortDownIcon />
          </StyledButton>
          <StyledButton onClick={handleSortedUp}>
            <SortUpIcon />
          </StyledButton>
        </ButtonGroup>
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
          width: '100%',
          margin: '50px 0'
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
