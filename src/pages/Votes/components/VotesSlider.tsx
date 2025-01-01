import { CSSProperties } from 'react';
import { Box, Button, styled } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import {
  DislikeIcon,
  HeartIcon,
  LikeIcon
} from '../../../components/atoms/Icons';
import { VOTES_VALUE, ICON_STYLE } from '../../../constants/votesData';
import Image from '../../../components/atoms/Image';
import arrowLeft from '../../../assets/arrow-left.svg';
import arrowRight from '../../../assets/arrow-right.svg';

type VotesImagesProps = {
  handleLikeClick: (id: string, value: number) => void;
  votesImages: { id: string; url: string }[];
};

export const StyledImage = styled('img')(() => ({
  position: 'absolute',
  borderRadius: '20px',
  display: 'block',
  width: '100%',
  height: '100%',
  boxShadow: `4px 4px 0 0 #212121`,
  cursor: 'pointer'
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  '&:focus': {
    outline: 'none'
  }
}));

export const VotesSlider = ({
  handleLikeClick,
  votesImages
}: VotesImagesProps) => {
  const votesButtonData = (votesImageId: string) => [
    {
      key: 'HEART',
      style: {
        position: 'absolute' as CSSProperties['position'],
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)'
      },
      onclick: handleLikeClick(votesImageId, VOTES_VALUE.HEART),
      icon: <HeartIcon sx={ICON_STYLE} />
    },
    {
      key: 'LIKE',
      style: {
        position: 'absolute' as CSSProperties['position'],
        bottom: '10px',
        left: '10px'
      },
      onclick: handleLikeClick(votesImageId, VOTES_VALUE.LIKE),
      icon: <LikeIcon sx={ICON_STYLE} />
    },
    {
      key: 'DISLIKE',
      style: {
        position: 'absolute' as CSSProperties['position'],
        bottom: '10px',
        right: '-10px'
      },
      onclick: handleLikeClick(votesImageId, VOTES_VALUE.DISLIKE),
      icon: <DislikeIcon sx={ICON_STYLE} />
    }
  ];

  return (
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
            {({ isActive }) => (
              // eslint-disable-next-line react/jsx-no-useless-fragment
              <>
                {isActive ? (
                  <>
                    <StyledImage src={votesImage.url} alt={votesImage.url} />
                    {votesButtonData(votesImage.id).map(buttonProps => (
                      <StyledButton
                        variant="text"
                        key={buttonProps.key}
                        style={
                          isActive
                            ? buttonProps.style
                            : { filter: 'grayscale(100%)' }
                        }
                        onClick={buttonProps.onclick}
                        startIcon={buttonProps.icon}
                      />
                    ))}
                  </>
                ) : (
                  <StyledImage
                    src={votesImage.url}
                    alt={votesImage.url}
                    style={{ filter: 'grayscale(100%)' }}
                  />
                )}
              </>
            )}
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
};
