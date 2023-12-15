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
  Typography,
  Autocomplete,
  Stack,
  TextField,
  styled
} from '@mui/material';
import { useGetBreedsQuery } from '../services/breeds';
import LoadingStatus from '../components/atoms/LoadingStatus';
import YellowArrowIcon from '../components/atoms/Icons/YellowArrowIcon';
import SortedComponent from '../components/molecules/SortedComponent';

export const StyledBox = styled(Box)(() => ({
  margin: 40,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}));

export const Breeds = () => {
  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const { data: breeds, isLoading } = useGetBreedsQuery();

  const options = (breeds || []).map(breed => breed.name);

  const searchedBreed = (breeds || []).filter(breed => {
    if (input === '') {
      return breed;
    }
    return breed.name.toLowerCase().includes(input);
  });

  const inputHandler = event => {
    const lowerCase = event.target.value.toLowerCase();
    setInput(lowerCase);
  };

  return (
    <Container>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <StyledBox>
        <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={options}
            onChange={inputHandler}
            renderInput={params => (
              <TextField
                {...params}
                label="Search dog by name"
                InputProps={{
                  ...params.InputProps,
                  type: 'search'
                }}
              />
            )}
          />
        </Stack>

        <SortedComponent />
      </StyledBox>

      <Box>
        <ImageList>
          {(searchedBreed || []).map(breed => (
            <ImageListItem
              key={breed.id}
              sx={{ boxShadow: '8px 8px 5px #000', m: 2, borderRadius: '20px' }}
            >
              <img
                src={breed.image.url}
                alt={breed.name}
                style={{ borderRadius: '20px' }}
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
