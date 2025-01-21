import { Box } from '@mui/material';
import { CustomButton, CustomImage } from '../../../components/atoms';

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
}: UploadedImagesProps) => (
  <Box
    key={image.id}
    sx={{
      position: 'relative'
    }}
  >
    <CustomImage
      src={image.url}
      alt={image.id}
      sx={{
        marginBottom: '16px'
      }}
    />
    <CustomButton
      variant="textSecondary"
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
