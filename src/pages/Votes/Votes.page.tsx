import { ChangeEvent, useState } from 'react';
import { Container } from '@mui/material';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Votes.css';

import {
  PaginationComponent,
  TitleComponent,
  LoadingStatus
} from '../../components/molecules';
import { useAddVotesMutation } from '../../services/votes';
import { useGetImagesQuery } from '../../services/images';
import { VotesSlider } from './components/VotesSlider';

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
      <TitleComponent title="Your can vote here" />
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
