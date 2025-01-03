import { Box, Button } from '@mui/material';
//import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';

type FavoriteImageListItemProps = {
  onDeleteFavorite: (id: number) => void;
  favoriteImage: {
    id: number;
    image_id: string;
    image: { url: string; id: string };
  };
};

export const FavoriteImageListItem = ({
  favoriteImage,
  onDeleteFavorite
}: FavoriteImageListItemProps) => (
  <>
    <Box
      sx={{
        position: 'relative'
      }}
    >
      <Box
        component="img"
        src={favoriteImage.image.url}
        alt={favoriteImage.image_id}
        loading="lazy"
        sx={{
          width: '100%',
          height: '100%',
          aspectRatio: 1,
          objectFit: 'cover',
          borderRadius: '20px',
          marginBottom: '16px',
          boxShadow: theme => `4px 4px 0 0 ${theme.palette.grey[900]}`,
          '&:hover': {
            boxShadow: theme => `6px 6px 8px 0 ${theme.palette.action.hover}`
          }
        }}
      />
      <Button
        variant="text"
        disableRipple
        size="large"
        color="warning"
        onClick={() => onDeleteFavorite(favoriteImage.id)}
        endIcon={
          <FavoriteIcon
            sx={{
              color: theme => theme.palette.warning.main,
              width: '40px',
              height: '40px'
            }}
          />
        }
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '5px',
          fontWeight: 'bold',
          color: theme => theme.palette.primary.main,
          '&:hover': {
            color: theme => theme.palette.action.hover
          },
          '&:active': {
            outline: 'none'
          },
          '&:focus': {
            outline: 'none'
          }
        }}
      >
        Delete
      </Button>
    </Box>
  </>
);
