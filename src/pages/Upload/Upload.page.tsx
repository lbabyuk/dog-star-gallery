import { useState } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { LoadingStatus } from '../../components/molecules';
import { GridWrapper } from '../../components/atoms/GridWrapper';
import { PowIcon } from '../../components/atoms/Icons';
import { UploadImage } from './components/UploadImage';
import { UploadedImages } from './components/UploadedImages';
import {
  useAddUploadedImageMutation,
  useGetUploadImagesQuery,
  useDeleteUploadedImageMutation
} from '../../services/upload';

export const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const { data: uploadedImages, isLoading } = useGetUploadImagesQuery({
    sub_id: 'olena'
  });

  const [addUploadedImage, { isLoading: isUploading }] =
    useAddUploadedImageMutation();
  const [deleteImage] = useDeleteUploadedImageMutation();

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
        {uploadedImages?.map(image => {
          return (
            <UploadedImages
              image={image}
              key={image.id}
              handleDelete={handleDelete}
            />
          );
        })}
      </GridWrapper>
    </Container>
  );
};
