/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Container,
  Typography
} from '@mui/material';
import { useGetBreedsQuery } from '../../services/breeds';
import LoadingStatus from '../../components/atoms/LoadingStatus';
import YellowArrowIcon from '../../components/atoms/Icons/YellowArrowIcon';
import SearchComponent from '../../components/molecules/SearchComponent';
import { StyledBox } from './BreedsStyled';

export const Breeds = () => {
  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const { data: breeds, isLoading } = useGetBreedsQuery();

  const getFilteredBreed = () => {
    if (input === '') {
      return breeds;
    }
    return (breeds || []).filter(breed =>
      breed.name.toLowerCase().includes(input)
    );
  };

  const searchedBreed = getFilteredBreed();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <Container>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <StyledBox>
        <SearchComponent onChange={handleChange} input={input} />
      </StyledBox>

      <Box>
        <ImageList>
          {(searchedBreed || []).map(breed => (
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
                      color: '#FFF',
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
