import { ChangeEvent, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, styled, Container, Button, ButtonGroup } from '@mui/material';
// import { useGetImagesQuery } from '../../services/images';
import LoadingStatus from '../../components/atoms/LoadingStatus';
import PaginationComponent from '../../components/molecules/Pagination/PaginationComponent';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import { useGetImagesWithFavorites } from '../../utilities';

import './Votes.css';
import LikeIcon from '../../components/atoms/Icons/LikeIcon';
import HeartIcon from '../../components/atoms/Icons/HeartIcon';

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

export const Votes = () => {
  const [page, setPage] = useState(0);
  // const { data: images, isLoading } = useGetImagesQuery({ page });

  const { data: favoriteImages, isLoading } = useGetImagesWithFavorites({
    page
  });

  const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };

  const handleLikeClick = () => console.log('like');
  const handleHeartClick = () => console.log('heart');

  return (
    <>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <Container>
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
          {(favoriteImages || []).map(slide => (
            <SwiperSlide key={slide.id} className="slide-inner">
              {({ isActive }) => (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <>
                  {isActive ? (
                    <>
                      <StyledImage src={slide.url} alt={slide.url} />
                      <ButtonGroup
                        style={{ position: 'absolute', bottom: 0 }}
                        variant="text"
                      >
                        <StyledButton
                          startIcon={<LikeIcon />}
                          onClick={handleLikeClick}
                        />
                        <StyledButton
                          endIcon={<HeartIcon />}
                          onClick={handleHeartClick}
                        />
                      </ButtonGroup>
                    </>
                  ) : (
                    <StyledImage
                      src={slide.url}
                      alt={slide.url}
                      style={{ filter: 'grayscale(100%)' }}
                    />
                  )}
                </>
              )}
            </SwiperSlide>
          ))}
          <div className="button-prev">
            <img src={arrowLeft} alt="Left" />
          </div>
          <div className="button-next">
            <img src={arrowRight} alt="Right" />
          </div>
        </Swiper>
        <Box display="flex" justifyContent="center" alignItems="center">
          <PaginationComponent
            count={10}
            page={page}
            onChange={handlePagination}
          />
        </Box>
      </Container>
    </>
  );
};
