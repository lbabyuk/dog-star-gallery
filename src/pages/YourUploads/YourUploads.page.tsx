import { useState, FC, ChangeEvent } from 'react';
import { ImageList, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useGetUploadImagesQuery } from '../../services/images';
import { LoadingStatus } from '../../components/molecules/LoadingStatus';
import { PaginationComponent } from '../../components/molecules/Pagination';
import { StyledImageListItem } from '../Images/ImagesStyled';

export const YourUploads: FC = () => {
  const [page, setPage] = useState(0);

  const { data: uploadImages, isLoading } = useGetUploadImagesQuery({
    sub_id: 'olena'
  });

  const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };

  return (
    <>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <h1>Your Upload</h1>
      <ul>
        {(uploadImages || []).length === 0 ? (
          <>
            <Typography variant="h4" component="h4" align="center" m={4} p={4}>
              No uploads images yet
            </Typography>
            <Link to="/upload">Upload images here</Link>
          </>
        ) : (
          <>
            <ImageList>
              {(uploadImages || []).map(uploadImage => (
                <StyledImageListItem key={uploadImage.id}>
                  <img src={uploadImage.url} alt="img" />
                </StyledImageListItem>
              ))}
            </ImageList>
            <PaginationComponent
              count={4}
              page={page}
              onChange={handlePagination}
            />
          </>
        )}
      </ul>
    </>
  );
};
