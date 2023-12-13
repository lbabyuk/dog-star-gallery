import { useState } from 'react';
import { Box, Button, Stack } from '@mui/material';
import { useGetImagesQuery } from '../services/images';
import { useAddFavoritesMutation } from '../services/favorites';

export const Main = () => {
  const [page, setPage] = useState(0);
  const { data: images, isLoading } = useGetImagesQuery({ limit: 4, page });
  const [addfavorite] = useAddFavoritesMutation();

  const handleAddClick = (id: string) => () => {
    addfavorite({ image_id: id });
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
      <Stack direction="row">
        {(images || []).map(image => (
          <Box key={image.id} sx={{ maxWidth: '300px' }}>
            <Button onClick={handleAddClick(image.id)}>Like</Button>
            <img src={image.url} width="100%" alt={image.id} />
          </Box>
        ))}
      </Stack>
    </>
  );
};
