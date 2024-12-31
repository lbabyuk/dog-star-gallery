import { ChangeEvent, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, styled, Container, Button } from '@mui/material';
import LoadingStatus from '../../components/atoms/LoadingStatus';
import PaginationComponent from '../../components/molecules/Pagination/PaginationComponent';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import { useGetVotesImages } from '../../utilities';
import './Votes.css';
import LikeIcon from '../../components/atoms/Icons/LikeIcon';
import DislikeIcon from '../../components/atoms/Icons/DislikeIcon';
import Image from '../../components/atoms/Image';
import { useAddVotesMutation } from '../../services/votes';
import HeartIcon from '../../components/atoms/Icons/HeartIcon';

export const StyledImage = styled('img')(() => ({
  position: 'absolute',
  borderRadius: '20px',
  width: '100%',
  height: '100%',
  boxShadow: `4px 4px 0 0 #212121`,
  cursor: 'pointer',
  '&:hover': {
    boxShadow: `4px 4px 0 0 #A239F4,`
  }
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  '&:focus': {
    outline: 'none'
  }
}));

export const Votes = () => {
  const [page, setPage] = useState(0);
  const { data: votesImages, isLoading } = useGetVotesImages({ page });

  const [addVoted] = useAddVotesMutation();

  const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };

  const handleLikeClick = (id: string, value: number) => () => {
    addVoted({ image_id: id, sub_id: 'olena', value });
  };

  return (
    <Container>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
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
              {({ isActive }) => (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <>
                  {isActive ? (
                    <>
                      <StyledImage src={votesImage.url} alt={votesImage.url} />
                      <StyledButton
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '50%',
                          transform: 'translateX(-50%)'
                        }}
                        variant="text"
                        onClick={handleLikeClick(votesImage.id, 0)}
                        startIcon={
                          <HeartIcon
                            sx={{
                              width: '45px',
                              height: '45px'
                            }}
                          />
                        }
                      />
                      <StyledButton
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '10px'
                        }}
                        variant="text"
                        onClick={handleLikeClick(votesImage.id, 1)}
                        startIcon={
                          <LikeIcon style={{ width: '45px', height: '45px' }} />
                        }
                      />

                      <StyledButton
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          right: '-10px'
                        }}
                        variant="text"
                        onClick={handleLikeClick(votesImage.id, -1)}
                        startIcon={
                          <DislikeIcon
                            style={{ width: '45px', height: '45px' }}
                          />
                        }
                      />
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
      <Box display="flex" justifyContent="center" alignItems="center">
        <PaginationComponent
          count={10}
          page={page}
          onChange={handlePagination}
        />
      </Box>
    </Container>
  );
};
