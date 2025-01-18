import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { HOME } from '../../../constants/routes';
import { GridWrapper } from '../../../components/atoms';
import { GalleryImagesContent, GalleryItemProps } from './GalleryImagesContent';

type GalleryImagesProps = {
  images: GalleryItemProps[];
};

export const GalleryImages = ({ images }: GalleryImagesProps) => {
  const navigate = useNavigate();
  const handleImageClick = (image: GalleryItemProps) => {
    navigate(HOME.RELATED, { state: { clickedImage: image, images } });
  };

  return (
    <Container>
      <GridWrapper>
        {images?.map(item => {
          const breed = item.breeds[0];
          return (
            <GalleryImagesContent
              key={item.id}
              item={item}
              breedName={breed?.name}
              onHandleImageClick={handleImageClick}
            />
          );
        })}
      </GridWrapper>
    </Container>
  );
};
