import { Fragment, useState } from 'react';
import { Box } from '@mui/material';
import { DeleteFavoriteImageModal } from './DeleteFavoriteImageModal';
import { useDeleteFavoritesMutation } from '../../../services/favorites';
import { FavoriteImageListItem } from './FavoriteImageListItem';

type FavoriteImageListProps = {
  favoriteImages: Array<{
    id: number;
    image: { id: string; url: string };
    image_id: string;
    user_id: string;
    sub_id: string | null;
    created_at: string;
  }>;
};

export const FavoriteImageList = ({
  favoriteImages = []
}: FavoriteImageListProps) => {
  const [open, setOpen] = useState(false);
  const [deleteFavorite] = useDeleteFavoritesMutation();

  const handleDeleteFavorite = (id: number) => {
    deleteFavorite(id);
    setOpen(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            sx: '1fr',
            md: '1fr 1fr',
            lg: '1fr 1fr 1fr'
          },
          gap: '20px',
          padding: '20px'
        }}
      >
        {(favoriteImages || []).map(favoriteImage => (
          <Fragment key={favoriteImage.id}>
            <FavoriteImageListItem
              favoriteImage={favoriteImage}
              onOpen={handleOpen}
            />
            <DeleteFavoriteImageModal
              favoriteImageId={favoriteImage.id}
              open={open}
              onDeleteFavorite={handleDeleteFavorite}
              onClose={handleClose}
            />
          </Fragment>
        ))}
      </Box>
    </Box>
  );
};
