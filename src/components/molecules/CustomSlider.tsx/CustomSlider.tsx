import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';

type CustomSliderProps<T> = {
  data: T[];
  renderItem: (item: T, slideProps: { isActive?: boolean }) => ReactNode;
  getKey: (item: T) => string | number;
  slidesPerView?: number | 'auto' | undefined;
  centeredSlides?: boolean;
  effect?: 'coverflow' | 'slide' | 'fade' | 'cube' | 'flip';
  coverflowEffectConfig?: {
    rotate?: number;
    stretch?: number;
    depth?: number;
    modifier?: number;
    slideShadows?: boolean;
  };
  showPagination?: boolean;
  showNavigation?: boolean;
  className?: string;
};

export const CustomSlider = <T,>({
  data,
  renderItem,
  getKey,
  slidesPerView,
  centeredSlides,
  effect = 'coverflow',
  coverflowEffectConfig = {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  showPagination,
  showNavigation,
  className
}: CustomSliderProps<T>) => (
  <Swiper
    modules={[EffectCoverflow, Pagination, Navigation]}
    pagination={showPagination ? { clickable: true } : false}
    navigation={showNavigation}
    grabCursor
    slidesPerView={slidesPerView}
    centeredSlides={centeredSlides}
    effect={effect}
    coverflowEffect={coverflowEffectConfig}
    className={className}
  >
    {data.map(item => (
      <SwiperSlide key={getKey(item)} className="slide-inner">
        {({ isActive }: { isActive: boolean }) =>
          renderItem(item, { isActive })
        }
      </SwiperSlide>
    ))}
  </Swiper>
);
