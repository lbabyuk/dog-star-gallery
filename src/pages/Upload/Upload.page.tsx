import { useState } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { LoadingStatus } from '../../components/molecules';
import { GridWrapper } from '../../components/atoms/GridWrapper';
import { PowIcon, YellowArrowIcon } from '../../components/atoms/Icons';
import { UploadImage } from './components/UploadImage';
import { UploadedImages } from './components/UploadedImages';
import {
  useAddUploadedImageMutation,
  useGetUploadImagesQuery,
  useDeleteUploadedImageMutation
} from '../../services/upload';
import { CustomButton } from '../../components/atoms/Button';

export const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const { data: uploadedImages, isLoading } = useGetUploadImagesQuery({
    sub_id: 'olena'
  });

  const [addUploadedImage, { isLoading: isUploading }] =
    useAddUploadedImageMutation();
  const [deleteImage] = useDeleteUploadedImageMutation();

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  const handleDelete = (id: string) => {
    deleteImage(id);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };
  const handleUploadImage = () => {
    if (!file) return;
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('sub_id', 'olena');
    addUploadedImage(formData);
    setFile(null);
  };

  if (isLoading) return <LoadingStatus />;

  return (
    <Container>
      <Stack alignItems="center" gap={2}>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <Typography variant="h5">Your uploads</Typography>
          <PowIcon
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px'
            }}
          />
        </Stack>
        <UploadImage
          handleUploadImage={handleUploadImage}
          handleFileChange={handleFileChange}
          file={file}
          isUploading={isUploading}
        />
      </Stack>
      <GridWrapper>
        {(uploadedImages || []).slice(0, visibleCount).map(image => {
          return (
            <UploadedImages
              image={image}
              key={image.id}
              handleDelete={handleDelete}
            />
          );
        })}
      </GridWrapper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <CustomButton
          variant="textPrimary"
          onClick={loadMore}
          endIcon={<YellowArrowIcon />}
        >
          Load More
        </CustomButton>
      </Box>
    </Container>
  );
};
