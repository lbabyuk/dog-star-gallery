import { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import {
  useAddUploadedImageMutation,
  useGetUploadImagesQuery
} from '../../services/images';
import { LoadingStatus } from '../../components/molecules/LoadingStatus';

export const Uploads = () => {
  const [uploadImages, setUploadImages] = useState([]);
  const { data: uploadImg, isLoading } = useGetUploadImagesQuery({
    sub_id: 'olena'
  });

  const [addUploadImage] = useAddUploadedImageMutation();
  const maxNumber = 69;

  const onChange = imageList => {
    addUploadImage(imageList);
    setUploadImages(imageList as never[]);
  };

  return (
    <>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <ImageUploading
        multiple
        value={uploadImages}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              type="button"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button type="button" onClick={onImageRemoveAll}>
              Remove all images
            </button>
            {imageList?.map((image, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={image.id} className="image-item">
                <img src={image.dataURL} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button type="button" onClick={() => onImageUpdate(index)}>
                    Update
                  </button>
                  <button type="button" onClick={() => onImageRemove(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </>
  );
};
