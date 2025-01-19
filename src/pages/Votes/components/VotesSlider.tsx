import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import { CustomButton } from '../../../components/atoms';
import { VOTES_BUTTONS_DATA } from './voteButtonsData';
import { VotesImage } from './VotesImage';

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
      modules={[EffectCoverflow, Pagination, Navigation]}
      pagination={{
        clickable: true
      }}
      navigation
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
    </Swiper>
  </Box>
);
