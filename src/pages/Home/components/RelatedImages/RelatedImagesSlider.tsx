import { GalleryItemProps } from '../GalleryImages/types';
import { RelatedImage } from './RelatedImage';
import { CustomSlider } from '../../../../components/molecules/CustomSlider.tsx/CustomSlider';

type RelatedImagesProps = { relatedImages: GalleryItemProps[] };

export const RelatedImagesSlider = ({ relatedImages }: RelatedImagesProps) => (
  <CustomSlider
    data={relatedImages}
    getKey={item => item.id}
    renderItem={item => <RelatedImage item={item} />}
    slidesPerView="auto"
    centeredSlides
    effect="coverflow"
    coverflowEffectConfig={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false
    }}
    showPagination
    showNavigation
    className="mySwiper"
  />
);
