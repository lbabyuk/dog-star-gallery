import { useState } from 'react';
import {
  Button,
  Container,
  Pagination,
  ImageList,
  ImageListItem,
  Box,
  styled,
  Autocomplete,
  TextField,
  Stack,
  List,
  ListItem
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAddFavoritesMutation } from '../services/favorites';
import { useGetImagesWithFavorites } from '../utilities';

import YellowBorderHeartIcon from '../components/atoms/Icons/YellowBorderHeartIcon';
import LoadingStatus from '../components/atoms/LoadingStatus';
import SortedComponent from '../components/molecules/SortedComponent';
import { useGetBreedsQuery } from '../services/breeds';
import YellowArrowIcon from '../components/atoms/Icons/YellowArrowIcon';

export const StyledBox = styled(Box)(() => ({
  margin: 40,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}));

export const Main = () => {
  const [page, setPage] = useState(0);
  const [input, setInput] = useState('');

  const { data: favoriteImages, isLoading } = useGetImagesWithFavorites({
    page
  });

  const { data: breeds } = useGetBreedsQuery();
  const navigate = useNavigate();

  const [addFavorite] = useAddFavoritesMutation();

  // *****

  const searchedBreed = (breeds || []).filter(breed =>
    breed.name.toLocaleLowerCase().includes(input)
  );

  const image = searchedBreed.map(item => (
    <ListItem key={item.id}>
      <img src={item.image.url} alt="breed" width="300px" />
      <Button
        variant="text"
        endIcon={<YellowArrowIcon />}
        onClick={() => navigate(`/breeds/${item.id}`)}
        sx={{
          color: '#FFF',
          m: 2
        }}
      />
    </ListItem>
  ));

  const inputHandler = event => {
    const lowerCase = event.target.value.toLowerCase();
    setInput(lowerCase);
  };

  // *****

  const handleAddClick = (id: string) => () => {
    addFavorite({ image_id: id, sub_id: 'olena' });
  };

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event.preventDefault();
    setPage(value);
  };

  const renderFavoriteImage = (favoriteImages || []).map(favoriteImage => (
    <ImageListItem
      key={favoriteImage.id}
      sx={{ boxShadow: '8px 8px 10px #000', m: 2, borderRadius: '20px' }}
    >
      <Button
        onClick={handleAddClick(favoriteImage.id)}
        sx={{ position: 'absolute', m: 2 }}
        variant="text"
        startIcon={<YellowBorderHeartIcon />}
      />
      <img
        src={favoriteImage.url}
        alt={favoriteImage.id}
        loading="lazy"
        style={{ borderRadius: '20px' }}
      />
    </ImageListItem>
  ));

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
            options={(breeds || []).map(breed => breed.name)}
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

      <List>{image}</List>

      <Box>
        <ImageList>{renderFavoriteImage}</ImageList>
      </Box>
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <Pagination
          count={favoriteImages.length}
          page={page}
          onChange={handlePagination}
          showFirstButton
          showLastButton
        />
      </Box>
    </Container>
  );
};
