/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
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

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const navigate = useNavigate();

  useEffect(() => {
    if (breeds) {
      setSorted(breeds);
    }
  }, [breeds]);

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

      <Box>
        <ImageList>
          {(filteredBreeds || []).map(breed => (
            <ImageListItem
              key={breed.id}
              sx={{ boxShadow: '8px 8px 5px #000', m: 2 }}
            >
              <img
                src={breed.image.url}
                alt={breed.name}
                className="image"
                loading="lazy"
              />
              <ImageListItemBar
                title={
                  <Typography noWrap textAlign="left">
                    {breed.name}
                  </Typography>
                }
                actionIcon={
                  <Button
                    variant="text"
                    endIcon={<YellowArrowIcon />}
                    onClick={() => navigate(`/breeds/${breed.id}`)}
                    sx={{
                      color: '#fff',
                      m: 2
                    }}
                  >
                    Learn More
                  </Button>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
};
