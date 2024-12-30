/* eslint-disable react/jsx-props-no-spreading */
import { number, string, func, shape } from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { styled, Button, Box } from '@mui/material';
import arrowLeft from '../../../assets/arrow-left.svg';
import arrowRight from '../../../assets/arrow-right.svg';

import '../../../pages/Votes/Votes.css';
import LikeIcon from '../../atoms/Icons/LikeIcon';
import Image from '../../atoms/Image';

export const StyledImage = styled('img')(() => ({
  borderRadius: '20px',
  width: '100%',
  height: '100%',
  boxShadow: '4px 4px 2px #000'
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  '&:focus': {
    outline: 'none'
  }
}));

export const SliderComponent = ({ votesImages, handleLikeClick }) => (
  <Box>
    <Swiper
      modules={[EffectCoverflow, Navigation]}
      navigation={{
        prevEl: '.button-prev',
        nextEl: '.button-next'
      }}
      speed={1000}
      slidesPerView="auto"
      centeredSlides
      effect="coverflow"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
    >
      {(votesImages || []).map(votesImage => (
        <SwiperSlide key={votesImage.id} className="slide-inner">
          {({ isActive }) =>
            isActive ? (
              <>
                <StyledImage src={votesImage.url} alt={votesImage.url} />
                <StyledButton
                  style={{ position: 'absolute', bottom: 0 }}
                  variant="text"
                  onClick={handleLikeClick(votesImage.id)}
                  startIcon={
                    <LikeIcon style={{ width: '45px', height: '45px' }} />
                  }
                />
              </>
            ) : (
              <StyledImage
                src={votesImage.url}
                alt={votesImage.url}
                style={{ filter: 'grayscale(100%)' }}
              />
            )
          }
        </SwiperSlide>
      ))}
      <div className="button-prev">
        <Image src={arrowLeft} alt="Left" />
      </div>
      <div className="button-next">
        <Image src={arrowRight} alt="Right" />
      </div>
    </Swiper>
  </Box>
);

export { SwiperSlide as Slide };

SliderComponent.propTypes = {
  votesImages: shape({
    id: number,
    url: string
  }),
  handleLikeClick: func
};
