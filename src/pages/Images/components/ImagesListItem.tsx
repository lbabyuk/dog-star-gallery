import { Box, Button } from '@mui/material';
import { BorderHeartIcon } from '../../../components/atoms/Icons';

type ImagesListItemProps = {
  favoriteImage: { id: string; url: string; isFavorite: boolean };
  onAddFavorite: (id: string) => () => void;
};

export const ImagesListItem = ({
  favoriteImage,
  onAddFavorite
}: ImagesListItemProps) => (
  <Box
    sx={{
      position: 'relative'
    }}
  >
    <Box
      component="img"
      src={favoriteImage.url}
      alt={favoriteImage.id}
      loading="lazy"
      sx={{
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        objectFit: 'cover',
        borderRadius: '20px',
        marginBottom: '16px',
        boxShadow: theme =>
          favoriteImage.isFavorite
            ? `6px 6px 8px 0 ${theme.palette.action.selected}`
            : `6px 6px 0 0 ${theme.palette.grey[900]}`,
        '&:hover': {
          boxShadow: theme => `6px 6px 8px 0 ${theme.palette.action.hover}`
        }
      }}
    />
    <Button
      sx={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '5px',
        '&:active': {
          outline: 'none'
        },
        '&:focus': {
          outline: 'none'
        }
      }}
      onClick={onAddFavorite(favoriteImage.id)}
      startIcon={
        favoriteImage.isFavorite ? (
          <BorderHeartIcon
            sx={{
              color: theme => theme.palette.warning.main,
              width: '45px',
              height: '45px'
            }}
          />
        ) : (
          <BorderHeartIcon
            sx={{
              color: theme => theme.palette.primary.main,
              width: '45px',
              height: '45px'
            }}
          />
        )
      }
    />
  </Box>
);
