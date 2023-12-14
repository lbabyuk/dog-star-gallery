import { FC, PropsWithChildren, useState } from 'react';
import {
  Button,
  Container,
  Pagination,
  ImageList,
  ImageListItem,
  Box
} from '@mui/material';

import { useAddFavoritesMutation } from '../services/favorites';
import { useGetImagesWithFavorites } from '../utilities';

import YellowBorderHeartIcon from '../components/atoms/Icons/YellowBorderHeartIcon';
import BlackBorderHeartIcon from '../components/atoms/Icons/BlackBorderHeartIcon';
import LoadingStatus from '../components/atoms/LoadingStatus';

type HeartIconProps = {
  state: 'active' | 'default';
};

export const ImageIcon: FC<PropsWithChildren<HeartIconProps>> = ({ state }) => {
  if (state === 'active') {
    return <YellowBorderHeartIcon />;
  }
  if (state === 'default') {
    return <BlackBorderHeartIcon />;
  }

  throw new Error(`Invalid state: ${state}`);
};

export const Main = () => {
  const [page, setPage] = useState(0);

  const { data: favoriteImages, isLoading } = useGetImagesWithFavorites({
    page
  });

  const [addFavorite] = useAddFavoritesMutation();

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
      onClick={handleAddClick(favoriteImage.id)}
      sx={{ boxShadow: '8px 8px 10px #000', m: 2, borderRadius: '20px' }}
    >
      <Button sx={{ position: 'absolute' }}>
        <ImageIcon state={favoriteImage.isFavorite ? 'active' : 'default'} />
      </Button>
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
