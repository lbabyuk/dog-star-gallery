import { useState, FC, ChangeEvent } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { Button, Modal, Typography } from '@mui/material';
import { useGetImagesQuery } from '../../services/images';
import LoadingStatus, { StyledBox } from '../../components/atoms/LoadingStatus';
import PaginationComponent from '../../components/molecules/Pagination/PaginationComponent';
import { StyledPaper } from '../Favorites/FavoritesStyled';

export const Upload: FC = () => {
  const [page, setPage] = useState(0);
  const [uploadImages, setUploadImages] = useState([]);
  const [open, setOpen] = useState(false);

  const maxNumber = 69;

  const { data: images, isLoading } = useGetImagesQuery({ page });
  console.log(images);

  const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onChange = (
    imageList: ImageListType
    // addUpdateIndex: number[] | undefined
  ) => {
    // console.log(imageList, addUpdateIndex);
    setUploadImages(imageList as never[]);
  };

  return (
    <>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <h1>Your Upload</h1>
      <ImageUploading
        multiple
        value={uploadImages}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          onImageUpload
        }) => (
          <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="upload__image-wrapper">
                <Button onClick={handleOpen}>Update Image</Button>
                &nbsp;
                <Button onClick={onImageUpload}>Click here</Button>
                &nbsp;
                <Button onClick={onImageRemoveAll}>Remove all images</Button>
                {imageList.map((image, index) => (
                  <div key={image.dataURL} className="image-item">
                    <img src={image.dataURL} alt={image.dataURL} width="100" />

                    <StyledPaper elevation={3}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        textAlign="center"
                      >
                        Upload a Dog image
                      </Typography>
                      <StyledBox>
                        <Button onClick={handleClose}>Cancel</Button>
                        <div className="image-item__btn-wrapper">
                          <Button onClick={() => onImageUpdate(index)}>
                            Update
                          </Button>
                          <Button onClick={() => onImageRemove(index)}>
                            Remove
                          </Button>
                        </div>
                      </StyledBox>
                    </StyledPaper>
                  </div>
                ))}
              </div>
            </Modal>
          </>
        )}
      </ImageUploading>
      <PaginationComponent count={4} page={page} onChange={handlePagination} />
    </>
  );
};
