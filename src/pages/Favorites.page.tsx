import { Button, ImageListItem } from '@mui/material';
import {
  useDeleteFavoritesMutation,
  useGetFavoritesQuery
} from '../services/favorites';

export const Favorites = () => {
  const { data: breeds, isLoading } = useGetFavoritesQuery();
  const [deleteFavorite] = useDeleteFavoritesMutation();

  const handleDeleteFavorite = (id: number) => {
    deleteFavorite(id);
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {(breeds || []).map(breed => (
        <ImageListItem
          key={breed.id}
          sx={{ maxWidth: '50px', m: 4, display: 'flex' }}
        >
          <img src={breed.image.url} alt={breed.image_id} />
          <p>{breed.id}</p>
          <Button onClick={() => handleDeleteFavorite(breed.id)}>Delete</Button>
        </ImageListItem>
      ))}
    </>
  );
};
