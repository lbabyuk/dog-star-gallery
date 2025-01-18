import { Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CustomImage } from '../../../components/atoms/CustomImage';
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
  <Box
    sx={{
      position: 'relative'
    }}
  >
    <CustomImage
      src={favoriteImage.image.url}
      alt={favoriteImage.image_id}
      sx={{
        marginBottom: '16px'
      }}
    />
    <CustomButton
      variant="textSecondary"
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
      sx={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '5px'
      }}
    >
      Delete
    </CustomButton>
  </Box>
);
