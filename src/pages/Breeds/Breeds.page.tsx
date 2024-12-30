/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  styled,
  ButtonGroup
} from '@mui/material';
import { useGetBreedsQuery, Breed } from '../../services/breeds';
import LoadingStatus from '../../components/atoms/LoadingStatus';
import YellowArrowIcon from '../../components/atoms/Icons/YellowArrowIcon';
import SearchComponent from '../../components/molecules/SearchComponent';
import { StyledBox } from './BreedsStyled';
import { SortDownIcon } from '../../components/atoms/Icons/SortDownIcon';
import { SortUpIcon } from '../../components/atoms/Icons/SortUpIcon';
import { useDebounce } from '../../utilities/hooks/useDebounce';

const StyledTypography = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.grey[500],
  textAlign: 'left',
  fontSize: 20
}));

export const Breeds = () => {
  const { data: breeds, isLoading } = useGetBreedsQuery();
  const [searchQuery, setSearchQuery] = useState('');
  const [sorted, setSorted] = useState<Breed[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const navigate = useNavigate();

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
        <StyledTypography variant="caption">Sort by:</StyledTypography>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={handleSortedDown}>
            <SortDownIcon />
          </Button>
          <Button onClick={handleSortedUp}>
            <SortUpIcon />
          </Button>
        </ButtonGroup>
      </StyledBox>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
          gap: '20px',
          padding: '20px'
        }}
      >
        {(filteredBreeds || []).slice(0, visibleCount).map(breed => (
          <Box
            key={breed.id}
            onClick={() => navigate(`/breeds/${breed.id}`)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #ccc',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: theme => `6px 6px 0 0  ${theme.palette.grey[900]}`,
              cursor: 'pointer',
              '&:hover': {
                boxShadow: theme => `6px 6px 0 0 ${theme.palette.action.hover}`
              }
            }}
          >
            <img
              style={{
                width: '100%',
                aspectRatio: 1,
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '16px'
              }}
              src={breed.image.url}
              alt={breed.name}
              loading="lazy"
            />
            <Typography variant="body1">{breed.name}</Typography>

            <Typography
              variant="body2"
              sx={{
                color: theme => theme.palette.grey[900],
                marginBottom: '16px'
              }}
            >
              Temperament:{' '}
              <Typography
                component="span"
                sx={{
                  color: theme => theme.palette.grey[700],
                  fontSize: '1.2rem'
                }}
              >
                {breed.temperament
                  ? breed.temperament
                  : 'Playful, Adventures, Curious'}
              </Typography>
            </Typography>

            <Box>
              <Button
                endIcon={<YellowArrowIcon />}
                onClick={() => navigate(`/breeds/${breed.id}`)}
                sx={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  color: theme => theme.palette.secondary.main,
                  backgroundColor: theme => theme.palette.action.selected,
                  fontWeight: 400,
                  '&:hover': {
                    backgroundColor: theme => theme.palette.action.hover,
                    boxShadow: theme =>
                      `2px 2px 0 0 ${theme.palette.grey[900]}`,
                    color: theme => theme.palette.grey[600]
                  }
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
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
