import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import arrowLeft from '../../../assets/arrow-left.svg';
import arrowRight from '../../../assets/arrow-right.svg';
import { VotesImage } from './VotesImage';
import { VOTES_BUTTONS_DATA } from './voteButtonsData';
import { CustomButton } from '../../../components/atoms';

type VotesImagesProps = {
  handleLikeClick: (id: string, value: number) => () => void;
  votesImages: { id: string; url: string }[];
};

export const VotesSlider = ({
  handleLikeClick,
  votesImages
}: VotesImagesProps) => (
  <Box>
    <Swiper
      modules={[EffectCoverflow, Navigation]}
      navigation={{
        prevEl: '.button-prev',
        nextEl: '.button-next'
      }}
      grabCursor
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
      className="mySwiper"
    >
      {(votesImages || []).map(votesImage => (
        <SwiperSlide key={votesImage.id} className="slide-inner">
          {({ isActive }) =>
            isActive ? (
              <>
                <VotesImage src={votesImage.url} alt={votesImage.id} isActive />

                {VOTES_BUTTONS_DATA(votesImage.id, handleLikeClick).map(
                  item => (
                    <CustomButton
                      variant="textSecondary"
                      key={item.key}
                      onClick={item.onclick}
                      startIcon={item.icon}
                      sx={item.sx}
                    />
                  )
                )}
              </>
            ) : (
              <VotesImage src={votesImage.url} alt={votesImage.id} />
            )
          }
        </SwiperSlide>
      ))}
      <div className="button-prev">
        <img src={arrowLeft} alt="Left" />
      </div>
      <div className="button-next">
        <img src={arrowRight} alt="Right" />
      </div>
    </Swiper>
  </Box>
);
