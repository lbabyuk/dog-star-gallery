import { useGetImagesQuery } from '../../services/images';
//import { selectImagesWithFavorites } from '../../services/selectors';
import { selectVotesImages } from '../../services/selectors';
import { useTypedSelector } from '../../services/store';
import { useGetVotesQuery } from '../../services/votes';

export type GetImagesWithVotesProps = {
  limit?: number;
  page: number;
  mime_types?: string;
  order?: string;
};

export const useGetVotesImages = ({
  limit = 6,
  page,
  mime_types,
  order
}: GetImagesWithVotesProps) => {
  const { isLoading: isLoadingImages } = useGetImagesQuery({
    limit,
    page,
    mime_types,
    order
  });
  const { isLoading: isLoadingVotes } = useGetVotesQuery({
    sub_id: 'olena'
  });
  const votesImages = useTypedSelector(
    selectVotesImages({
      getVotesProps: { limit, page, mime_types, order },
      sub_id: 'olena',
      value: 1
    })
  );

  return {
    data: votesImages,
    isLoading: isLoadingImages || isLoadingVotes
  };
};
