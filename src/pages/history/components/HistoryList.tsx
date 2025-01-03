import { ListItem, Button, Box } from '@mui/material';
import moment from 'moment';
import { useDeleteVotesMutation } from '../../../services/votes';
import { getVoteFeedback } from './historyData';
import { TypographyElement } from './HistoryListStyled';

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
    <ListItem
      sx={{
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}
    >
      {voteIcon}
      <TypographyElement>{voteMessage}</TypographyElement>

      <Box
        component="img"
        src={breed.image.url}
        alt={breed.image_id}
        sx={{
          borderRadius: '10%',
          width: '50px',
          height: '40px',
          objectFit: 'cover',
          aspectRatio: 1,
          boxShadow: theme => `2px 2px 0 0 ${theme.palette.grey[900]}`
        }}
      />
      <TypographyElement width="200px">
        {moment(breed.created_at).format('MMMM Do YYYY')}
      </TypographyElement>
      <Button
        variant="contained"
        onClick={() => handleDeleteVotedImages(breed.id)}
        sx={{
          borderRadius: '6px',
          padding: '6px 12px',
          width: { sx: '50px', md: '80px', lg: '120px' }
        }}
      >
        Delete
      </Button>
    </ListItem>
  );
};
