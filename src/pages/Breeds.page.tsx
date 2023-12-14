import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Container
} from '@mui/material';
import { useGetBreedsQuery } from '../services/breeds';
import LoadingStatus from '../components/atoms/LoadingStatus';

export const Breeds = () => {
  const { data: breeds, isLoading } = useGetBreedsQuery();
  const navigate = useNavigate();

  const renderBreeds = (breeds || []).map(breed => (
    <ImageListItem
      key={breed.id}
      sx={{ boxShadow: '8px 8px 10px #000', m: 2, borderRadius: '20px' }}
    >
      <Button
        variant="outlined"
        onClick={() => navigate(`/breeds/${breed.id}`)}
        sx={{
          position: 'absolute',
          backgroundColor: '#fff',
          color: '#000',
          m: 2
        }}
      >
        More
      </Button>
      <img
        src={breed.image.url}
        alt={breed.name}
        style={{ borderRadius: '20px' }}
        loading="lazy"
      />
      <ImageListItemBar title={<p>{breed.name}</p>} />
    </ImageListItem>
  ));

  return (
    <Container>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <Box>
        <ImageList>{renderBreeds}</ImageList>
      </Box>
    </Container>
  );
};
