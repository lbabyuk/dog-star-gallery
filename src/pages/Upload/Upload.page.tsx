import { useState } from 'react';
import { Box, Container, Stack } from '@mui/material';
import {
  DefaultInfo,
  LoadingStatus,
  TitleComponent
} from '../../components/molecules';
import {
  GridWrapper,
  CustomButton,
  MotionTransitionWrapper,
  YellowArrowIcon
} from '../../components/atoms';
import { UploadImage, UploadedImages } from './components';

import {
  useAddUploadedImageMutation,
  useGetUploadImagesQuery,
  useDeleteUploadedImageMutation
} from '../../services/upload';
import { TITLES_DATA } from '../../constants/titlesData';
import { useVisibleImage } from '../../hooks';

export const Upload = () => {
  const [file, setFile] = useState<File | null>(null);

  const { data: uploadedImages, isLoading } = useGetUploadImagesQuery({
    sub_id: 'olena'
  });

  const { visibleData, handleShowImages, isAllVisible } = useVisibleImage(
    uploadedImages,
    3,
    3
  );

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
      <MotionTransitionWrapper>
        <TitleComponent title={TITLES_DATA.uploadPageTitle} />
        <Stack alignItems="center" gap={2}>
          <UploadImage
            handleUploadImage={handleUploadImage}
            handleFileChange={handleFileChange}
            file={file}
            isUploading={isUploading}
          />
        </Stack>

        {uploadedImages?.length === 0 ? (
          <DefaultInfo title="" />
        ) : (
          <>
            <GridWrapper>
              {visibleData.map(image => (
                <UploadedImages
                  image={image}
                  key={image.id}
                  handleDelete={handleDelete}
                />
              ))}
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
                onClick={handleShowImages}
                endIcon={<YellowArrowIcon />}
              >
                {isAllVisible ? 'Show Less' : 'Show More'}
              </CustomButton>
            </Box>
          </>
        )}
      </MotionTransitionWrapper>
    </Container>
  );
};
