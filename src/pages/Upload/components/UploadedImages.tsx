import { Box } from '@mui/material';
import { CustomButton } from '../../../components/atoms/Button';
import { CustomImage } from '../../../components/atoms/Image';

type UploadedImagesProps = {
  image: {
    url: string;
    id: string;
  };
  handleDelete: (id: string) => void;
};

export const UploadedImages = ({
  image,
  handleDelete
}: UploadedImagesProps) => {
  return (
    <Box
      key={image.id}
      sx={{
        position: 'relative'
      }}
    >
      <CustomImage
        component="img"
        src={image.url}
        alt={image.id}
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
        variant="textSecondary"
        size="large"
        color="warning"
        onClick={() => handleDelete(image.id)}
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
};
