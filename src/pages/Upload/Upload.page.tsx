import { useState } from 'react';
import { Box, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  DefaultInfo,
  LoadingStatus,
  TitleComponent
} from '../../components/molecules';
import { GridWrapper, CustomButton } from '../../components/atoms';
import { YellowArrowIcon } from '../../components/atoms/Icons';
import { UploadImage } from './components/UploadImage';
import { UploadedImages } from './components/UploadedImages';
import {
  useAddUploadedImageMutation,
  useGetUploadImagesQuery,
  useDeleteUploadedImageMutation
} from '../../services/upload';
import { TITLES_DATA } from '../../constants/titlesData';

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
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 2 }}
      >
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
              {(uploadedImages || []).slice(0, visibleCount).map(image => (
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
                onClick={loadMore}
                endIcon={<YellowArrowIcon />}
              >
                Load More
              </CustomButton>
            </Box>
          </>
        )}
      </motion.div>
    </Container>
  );
};
