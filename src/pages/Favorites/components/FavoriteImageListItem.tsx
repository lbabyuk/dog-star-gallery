import { Box } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { CustomImage } from '../../../components/atoms/Image';
import { CustomButton } from '../../../components/atoms/Button';

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
      <CustomImage
        component="img"
        src={favoriteImage.image.url}
        alt={favoriteImage.image_id}
        loading="lazy"
        sx={(theme: {
          palette: { grey: number[]; action: { hover: string } };
        }) => ({
          width: '100%',
          height: '100%',
          aspectRatio: 1,
          objectFit: 'cover',
          borderRadius: '20px',
          marginBottom: '16px',
          boxShadow: `4px 4px 0 0 ${theme.palette.grey[900]}`,
          '&:hover': {
            boxShadow: `6px 6px 8px 0 ${theme.palette.action.hover}`
          }
        })}
      />
      <CustomButton
        variant="text"
        disableRipple
        size="large"
        color="warning"
        onClick={() => onDeleteFavorite(favoriteImage.id)}
        endIcon={
          <FavoriteIcon
            sx={theme => ({
              color: theme.palette.warning.main,
              width: '40px',
              height: '40px'
            })}
          />
        }
        sx={theme => ({
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '5px',
          fontWeight: 'bold',
          color: theme.palette.primary.main,
          '&:hover': {
            color: theme.palette.action.hover
          },
          '&:active': {
            outline: 'none'
          },
          '&:focus': {
            outline: 'none'
          }
        })}
      >
        Delete
      </CustomButton>
    </Box>
  </>
);
