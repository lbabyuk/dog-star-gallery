import { Box, Button, Typography } from '@mui/material';

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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: theme => `1px solid ${theme.palette.grey[800]}`,
        padding: '16px',
        borderRadius: '8px',
        gap: '10px',
        boxShadow: theme => `6px 6px 0 0  ${theme.palette.grey[900]}`,
        cursor: 'pointer',
        '&:hover': {
          boxShadow: theme => `6px 6px 8px 0 ${theme.palette.action.hover}`
        }
      }}
    >
      <Box
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
      <Button
        onClick={() => onHandleImageClick(item)}
        sx={{
          padding: '8px 16px',
          borderRadius: '6px',
          color: theme => theme.palette.secondary.main,
          backgroundColor: theme => theme.palette.action.selected,
          fontWeight: 400,
          '&:hover': {
            backgroundColor: theme => theme.palette.action.hover,
            boxShadow: theme => `2px 2px 0 0 ${theme.palette.grey[900]}`,
            color: theme => theme.palette.grey[600]
          }
        }}
      >
        Show Related Images
      </Button>
    </Box>
  );
};
