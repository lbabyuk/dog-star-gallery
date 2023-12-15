import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  ImageList,
  ImageListItem,
  Typography
} from '@mui/material';
import {
  useDeleteFavoritesMutation,
  useGetFavoritesQuery
} from '../services/favorites';
import LoadingStatus from '../components/atoms/LoadingStatus';

export const Favorites = () => {
  const { data: breeds, isLoading } = useGetFavoritesQuery({ sub_id: 'olena' });
  const [deleteFavorite] = useDeleteFavoritesMutation();

  const handleDeleteFavorite = (id: number) => {
    deleteFavorite(id);
  };

  const renderBreedsList = (breeds || []).map(breed => (
    <ImageListItem
      key={breed.id}
      sx={{ boxShadow: '8px 8px 10px #000', m: 2, borderRadius: '20px' }}
    >
      <img
        src={breed.image.url}
        alt={breed.image_id}
        loading="lazy"
        style={{ borderRadius: '20px' }}
      />
      <Button
        variant="contained"
        onClick={() => handleDeleteFavorite(breed.id)}
        sx={{ position: 'absolute', m: 2 }}
      >
        Delete
      </Button>
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
        {renderBreedsList.length === 0 ? (
          <>
            <Typography variant="h4" component="h4" align="center" m={4} p={4}>
              No favorite dogs breed yet
            </Typography>
            <Link to="/main">Choose your favorite breed here</Link>
          </>
        ) : (
          <ImageList>{renderBreedsList}</ImageList>
        )}
      </Box>
    </Container>
  );
};
