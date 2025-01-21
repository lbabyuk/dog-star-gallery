import { Stack, Box, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CustomButton } from '../../../components/atoms';
import { StyledStack, VisuallyHiddenInput } from '../UploadStyled';

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
}: UploadImageProps) => (
  <StyledStack>
    <Box>
      <Typography variant="body1" gutterBottom>
        Upload a{' '}
        <Typography
          variant="span"
          sx={{ color: theme => theme.palette.error.main }}
        >
          Dog!!!{' '}
        </Typography>
        Image
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
  </StyledStack>
);
