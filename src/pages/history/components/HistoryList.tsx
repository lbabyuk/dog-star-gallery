import { Divider, ListItem, Typography } from '@mui/material';
import moment from 'moment';
import { useDeleteVotesMutation } from '../../../services/votes';
import { getVoteFeedback } from './historyData';
import { CustomImage } from '../../../components/atoms/CustomImage';
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
          alignItems: 'center',
          gap: '5px'
        }}
      >
        {voteIcon}
        <Typography variant="semiBold1" width="200px" align="center">
          {voteMessage}
        </Typography>

        <CustomImage
          src={breed.image.url}
          alt={breed.image_id}
          sx={{
            borderRadius: '50%',
            width: '50px',
            height: '50px'
          }}
        />
        <Typography variant="semiBold1" width="200px" align="center">
          {moment(breed.created_at).format('MMMM Do YYYY')}
        </Typography>
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
