import { useState } from 'react';
import { Box, Button, Stack } from '@mui/material';
import { useAddFavoritesMutation } from '../services/favorites';
import { useGetImagesWithFavorites } from '../utilities';

export const Main = () => {
  const [page, setPage] = useState(0);
  const { data: favoriteImages, isLoading } = useGetImagesWithFavorites({
    page
  });
  const [addFavorite] = useAddFavoritesMutation();

  const handleAddClick = (id: string) => () => {
    addFavorite({ image_id: id, sub_id: 'olena' });
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {page && `Page: ${page}`}
      <Button type="button" onClick={() => setPage(prev => prev + 1)}>
        Next
      </Button>
      <Button type="button" onClick={() => setPage(prev => prev - 1)}>
        PREV
      </Button>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      <Stack direction="row">
        {(favoriteImages || []).map(favoriteImage => (
          <Box key={favoriteImage.id} sx={{ maxWidth: '300px' }}>
            <Button onClick={handleAddClick(favoriteImage.id)}>Like</Button>
            <img src={favoriteImage.url} alt={favoriteImage.id} width="100%" />
            <p>{favoriteImage.id}</p>
          </Box>
        ))}
      </Stack>
    </>
  );
};
