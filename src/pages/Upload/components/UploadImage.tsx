import { Stack, Box, Typography, styled } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CustomButton } from '../../../components/atoms/Button';

const VisuallyHiddenInput = styled('input')(({ theme: { palette } }) => ({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
  '&:disabled + label': {
    backgroundColor: palette.grey[300],
    color: palette.secondary.main
  }
}));

type UploadImageProps = {
  isUploading: boolean;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUploadImage: () => void;
  file: File | null;
};

export const UploadImage = ({
  isUploading,
  handleFileChange,
  handleUploadImage,
  file
}: UploadImageProps) => {
  return (
    <Stack
      sx={theme => ({
        backgroundColor: theme.palette.grey[100],
        width: '100%',
        maxWidth: '360px',
        height: '160px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
        margin: '20px',
        padding: '5px',
        boxShadow: `4px 4px 0 0 ${theme.palette.grey[900]}`,
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: '20px'
      })}
    >
      <Box>
        <Typography variant="body1" gutterBottom>
          Upload a Dog Image
        </Typography>
      </Box>
      <Stack alignItems="center" direction="row">
        <CustomButton
          tabIndex={-1}
          component="label"
          variant="containedPrimary"
          startIcon={<CloudUploadIcon />}
          sx={{ mr: 2 }}
          disabled={isUploading}
        >
          Upload an image
          <VisuallyHiddenInput type="file" hidden onChange={handleFileChange} />
        </CustomButton>
        <CustomButton
          variant="containedPrimary"
          onClick={handleUploadImage}
          disabled={isUploading || !file}
        >
          {isUploading ? 'Uploading...' : 'Upload'}
        </CustomButton>
      </Stack>
    </Stack>
  );
};
