import { ChangeEvent, useState } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Votes.css';
import { LoadingStatus } from '../../components/molecules/LoadingStatus';
import { PaginationComponent } from '../../components/molecules/Pagination';
import { useAddVotesMutation } from '../../services/votes';
import { useGetImagesQuery } from '../../services/images';
import { VotesSlider } from './components/VotesSlider';
import { PowIcon } from '../../components/atoms/Icons';
import { LIMIT, TOTAL_COUNT } from '../../constants/paginationStyleData';

export const Votes = () => {
  const [page, setPage] = useState(1);

  const limit = LIMIT;
  const { data: votesImages, isLoading } = useGetImagesQuery({
    page,
    limit
  });

  const [addVotedImage] = useAddVotesMutation();

  const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };

  const handleLikeClick = (id: string, value: number) => () => {
    addVotedImage({ image_id: id, sub_id: 'olena', value });
  };

  if (isLoading) return <LoadingStatus />;

  return (
    <Container>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Typography variant="h2">Your can vote here</Typography>
        <PowIcon
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60px',
            height: '60px'
          }}
        />
      </Stack>

      <VotesSlider
        votesImages={votesImages || []}
        handleLikeClick={handleLikeClick}
      />

      <PaginationComponent
        count={Math.ceil(TOTAL_COUNT / limit)}
        page={page}
        onChange={handlePagination}
      />
    </Container>
  );
};
