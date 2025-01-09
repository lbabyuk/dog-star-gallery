import { Box, Typography } from '@mui/material';
import { CustomImage } from '../../../components/atoms/Image';
import { CustomButton } from '../../../components/atoms/Button';
import { PowIcon, YellowArrowIcon } from '../../../components/atoms/Icons';

export type GalleryItemProps = {
  id: string;
  url: string;
  breeds: [
    {
      id: number;
      name: string;
      breed_group: string;
    }
  ];
};

export type GalleryImagesContentProps = {
  onHandleImageClick: (item: GalleryItemProps) => void;
  breedName: string;
  item: GalleryItemProps;
};

export const GalleryImagesContent = ({
  item,
  breedName,
  onHandleImageClick
}: GalleryImagesContentProps) => {
  return (
    <Box
      sx={theme => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: `1px solid ${theme.palette.grey[800]}`,
        padding: '16px',
        borderRadius: '8px',
        gap: '10px',
        boxShadow: `6px 6px 0 0  ${theme.palette.grey[900]}`,
        cursor: 'pointer',
        '&:hover': {
          boxShadow: `6px 6px 8px 0 ${theme.palette.action.hover}`
        }
      })}
    >
      <CustomImage
        component="img"
        sx={{
          width: '100%',
          aspectRatio: 1,
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '16px'
        }}
        src={item.url}
        alt={breedName || 'Dog'}
        loading="lazy"
      />
      <Typography variant="body1" textAlign="center">
        {breedName}
      </Typography>
      <CustomButton
        startIcon={<PowIcon />}
        endIcon={<YellowArrowIcon />}
        onClick={() => onHandleImageClick(item)}
        variant="containedPrimary"
      >
        Show Related
      </CustomButton>
    </Box>
  );
};
