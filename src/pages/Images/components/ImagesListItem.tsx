import { Box, Theme } from '@mui/material';

import {
  CustomButton,
  CustomImage,
  BorderHeartIcon
} from '../../../components/atoms';
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
}: ImagesListItemProps) => (
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
      src={image.url}
      alt={image.id}
      sx={{
        boxShadow: isFavorite
          ? (theme: Theme) => `3px 3px 0 0 ${theme.palette.action.selected}`
          : (theme: Theme) => `3px 3px 0 0 ${theme.palette.grey[900]}`
      }}
    />

    <CustomButton
      variant="textSecondary"
      sx={{
        position: 'absolute',
        top: { xs: '10px' },
        right: '-15px',
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
