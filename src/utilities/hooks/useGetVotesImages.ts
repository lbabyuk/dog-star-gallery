import { useGetImagesQuery } from '../../services/images';
import { selectImagesWithFavorites } from '../../services/selectors';
import { useTypedSelector } from '../../services/store';
import { useGetVotesQuery } from '../../services/votes';

type GetImagesWithFavoritesProps = {
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
}: GetImagesWithFavoritesProps) => {
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
    selectImagesWithFavorites({
      getImagesProps: { limit, page, mime_types, order },
      sub_id: 'olena'
    })
  );
  return {
    data: votesImages,
    isLoading: isLoadingImages || isLoadingVotes
  };
};
