import { Divider, ListItem } from '@mui/material';
import moment from 'moment';
import { useDeleteVotesMutation } from '../../../services/votes';
import { getVoteFeedback } from './historyData';
import { TypographyElement } from './HistoryListStyled';
import { CustomImage } from '../../../components/atoms/Image';
import { CustomButton } from '../../../components/atoms/Button';

type BreedProps = {
  breed: {
    id: number;
    created_at: string;
    image_id: string;
    image: { url: string };
    value: number;
  };
};

export const HistoryList = ({ breed }: BreedProps) => {
  const [deleteVoted] = useDeleteVotesMutation();

  const handleDeleteVotedImages = (id: number) => {
    deleteVoted(id);
  };

  const { voteIcon, voteMessage } = getVoteFeedback(breed.value);

  return (
    <>
      <ListItem
        sx={{
          width: '100%',
          padding: 'none',
          flexDirection: { xs: 'column', sm: 'row', md: 'row' },
          justifyContent: { xs: 'center', sm: 'center', md: 'space-evenly' },
          alignItems: 'center'
        }}
      >
        {voteIcon}
        <TypographyElement>{voteMessage}</TypographyElement>

        <CustomImage
          component="img"
          src={breed.image.url}
          alt={breed.image_id}
          sx={(theme: { palette: { grey: number[] } }) => ({
            borderRadius: '10%',
            width: '50px',
            height: '40px',
            objectFit: 'cover',
            aspectRatio: 1,
            boxShadow: `2px 2px 0 0 ${theme.palette.grey[900]}`
          })}
        />
        <TypographyElement width="200px">
          {moment(breed.created_at).format('MMMM Do YYYY')}
        </TypographyElement>
        <CustomButton
          variant="containedPrimary"
          onClick={() => handleDeleteVotedImages(breed.id)}
          sx={{
            padding: '4px 12px',
            width: { sx: '100%', md: '80px', lg: '120px' }
          }}
        >
          Delete
        </CustomButton>
      </ListItem>
      <Divider sx={{ width: '100%' }} />
    </>
  );
};
