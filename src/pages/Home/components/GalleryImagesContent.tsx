import { Typography } from '@mui/material';
import { CustomImage } from '../../../components/atoms/CustomImage';
import { CustomButton } from '../../../components/atoms/Button';
import { PowIcon, YellowArrowIcon } from '../../../components/atoms/Icons';
import { CardWrapper } from '../../../components/atoms/CardWrapper';

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
};
