import { ChangeEvent, useState } from 'react';
import { Box, Container } from '@mui/material';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LoadingStatus from '../../components/atoms/LoadingStatus';
import { PaginationComponent } from '../../components/molecules/Pagination';
import { useGetVotesImages } from '../../utilities';
import './Votes.css';
import { useAddVotesMutation } from '../../services/votes';
import { VotesSlider } from './components/VotesSlider';

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

      <VotesSlider
        votesImages={votesImages}
        handleLikeClick={handleLikeClick}
      />

      <Box display="flex" justifyContent="center" alignItems="center">
        <PaginationComponent
          count={votesImages.length}
          page={page}
          onChange={handlePagination}
        />
      </Box>
    </Container>
  );
};
