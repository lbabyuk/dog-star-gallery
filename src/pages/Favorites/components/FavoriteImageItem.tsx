import { Box, Button } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

type FavoriteImageItemProps = {
  onOpen: () => void;
  favoriteImage: {
    image: { url: string };
    image_id: string;
  };
};

export const FavoriteImageItem = ({
  favoriteImage,
  onOpen
}: FavoriteImageItemProps) => (
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
          boxShadow: theme => `4px 4px 0 0 ${theme.palette.action.hover}`
        }
      }}
    />
    <Button
      disableRipple
      size="large"
      color="warning"
      onClick={onOpen}
      endIcon={
        <DeleteTwoToneIcon
          sx={{
            color: theme => theme.palette.warning.main,
            width: '45px',
            height: '45px'
          }}
        />
      }
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
    />
  </Box>
);
