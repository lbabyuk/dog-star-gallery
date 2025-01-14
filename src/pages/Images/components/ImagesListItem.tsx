import { Box } from '@mui/material';
import { BorderHeartIcon } from '../../../components/atoms/Icons';
import { CustomImage } from '../../../components/atoms/Image';
import { CustomButton } from '../../../components/atoms/Button';
import {
  ICON_SIZE,
  IMAGES_LAYOUT_DATA
} from '../../../constants/imagesStyleData';

type ImagesListItemProps = {
  image: {
    id: string;
    url: string;
  };
  onAddFavorite: (id: string) => () => void;
  index: number;
  isFavorite: boolean;
};

export const ImagesListItem = ({
  image,
  onAddFavorite,
  index,
  isFavorite
}: ImagesListItemProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        ...(IMAGES_LAYOUT_DATA[index] || {
          gridColumn: 'span 1',
          gridRow: 'auto'
        })
      }}
    >
      <CustomImage
        component="img"
        src={image.url}
        alt={image.id}
        loading="lazy"
        sx={(theme: {
          palette: {
            action: { selected: string; hover: string };
            grey: number[];
          };
        }) => ({
          display: 'block',
          width: '100%',
          height: '100%',
          aspectRatio: 1,
          objectFit: 'cover',
          borderRadius: '20px',
          marginBottom: '16px',
          boxShadow: isFavorite
            ? `6px 6px 8px 0 ${theme.palette.action.selected}`
            : `6px 6px 0 0 ${theme.palette.grey[900]}`,
          '&:hover': {
            boxShadow: `6px 6px 8px 0 ${theme.palette.action.hover}`
          }
        })}
      />

      <CustomButton
        variant="textSecondary"
        sx={{
          position: 'absolute',
          top: { xs: '10px' },
          right: '-5px',
          padding: '5px'
        }}
        onClick={onAddFavorite(image.id)}
        startIcon={
          <BorderHeartIcon
            sx={theme => ({
              color: isFavorite
                ? theme.palette.warning.main
                : theme.palette.primary.main,
              width: ICON_SIZE,
              height: ICON_SIZE
            })}
          />
        }
      />
    </Box>
  );
};
