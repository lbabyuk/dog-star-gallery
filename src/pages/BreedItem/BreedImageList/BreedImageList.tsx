import { FC } from 'react';

import { ImageList, ImageListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGetBreedsQuery } from '../../../services/breeds';
import { LoadingStatus } from '../../../components/molecules';

import './BreedsImageList.css';

const BreedImageList: FC = () => {
  const { data: breeds, isLoading } = useGetBreedsQuery();

  const navigate = useNavigate();

  return (
    <>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <ImageList cols={1} variant="standard" className="image-list">
        {(breeds || []).map(item => (
          <ImageListItem key={item.id} className="image-list-item">
            <img
              src={item.image.url}
              alt={item.name}
              className="image"
              aria-hidden="true"
              onClick={() => navigate(`/breeds/${item.id}`)}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default BreedImageList;
