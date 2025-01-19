import { Typography } from '@mui/material';
import {
  CustomImage,
  CustomButton,
  CardWrapper,
  PowIcon,
  YellowArrowIcon
} from '../../../../components/atoms';
import { GalleryItemProps } from './types';

export type GalleryImagesContentProps = {
  onHandleImageClick: (item: GalleryItemProps) => void;
  breedName: string;
  item: GalleryItemProps;
};

export const GalleryImagesContent = ({
  item,
  breedName,
  onHandleImageClick
}: GalleryImagesContentProps) => (
  <CardWrapper>
    <CustomImage
      sx={{
        borderRadius: '8px',
        marginBottom: '16px',
        boxShadow: 'none',
        ':hover': {
          boxShadow: 'none'
        }
      }}
      src={item.url}
      alt={breedName || 'Dog'}
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
  </CardWrapper>
);
