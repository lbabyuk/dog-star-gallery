import { useState, FC, ChangeEvent } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { Button } from '@mui/material';
import { useGetImagesQuery } from '../../services/images';
import LoadingStatus from '../../components/atoms/LoadingStatus';
import PaginationComponent from '../../components/molecules/Pagination/PaginationComponent';

export const Upload: FC = () => {
  const [page, setPage] = useState(0);
  const [uploadImages, setUploadImages] = useState([]);
  const maxNumber = 69;

  const { data: images, isLoading } = useGetImagesQuery({ page });
  console.log(images);

  const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
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
          <div className="upload__image-wrapper">
            <Button onClick={onImageUpload}>Click here</Button>
            &nbsp;
            <Button onClick={onImageRemoveAll}>Remove all images</Button>
            {imageList.map((image, index) => (
              <div key={image.dataURL} className="image-item">
                <img src={image.dataURL} alt={image.dataURL} width="100" />
                <div className="image-item__btn-wrapper">
                  <Button onClick={() => onImageUpdate(index)}>Update</Button>
                  <Button onClick={() => onImageRemove(index)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <PaginationComponent count={4} page={page} onChange={handlePagination} />
    </>
  );
};
