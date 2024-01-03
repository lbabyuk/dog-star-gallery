import {
  List,
  Box,
  Container,
  ListItem,
  Typography,
  Button
} from '@mui/material';
import moment from 'moment';
import { Link } from 'react-router-dom';
import LoadingStatus from '../../components/atoms/LoadingStatus';
import { useDeleteVotesMutation, useGetVotesQuery } from '../../services/votes';
import LikeIcon from '../../components/atoms/Icons/LikeIcon';

export const History = () => {
  const { data: breeds, isLoading } = useGetVotesQuery({ sub_id: 'olena' });
  const [deleteVoted] = useDeleteVotesMutation();

  const handleDeleteVotedImages = (id: number) => {
    deleteVoted(id);
  };

  return (
    <Container>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {(breeds || []).length === 0 ? (
          <>
            <Typography variant="h4" component="h4" align="center" m={4} p={4}>
              No votes dogs breed yet
            </Typography>
            <Link to="/votes">Vote breed here</Link>
          </>
        ) : (
          <List>
            {(breeds || []).map(breed => (
              <ListItem key={breed.id}>
                <LikeIcon fontSize="large" />
                <Typography
                  variant="body1"
                  component="span"
                  align="center"
                  m={1}
                  p={1}
                >
                  you like the photo
                </Typography>
                <img
                  src={breed.image.url}
                  alt={breed.image_id}
                  style={{
                    borderRadius: '20%',
                    width: '50px',
                    height: '50px',
                    objectFit: 'cover'
                  }}
                />
                <Typography
                  variant="body1"
                  component="span"
                  align="center"
                  m={1}
                  p={1}
                >
                  {moment(breed.created_at).format('DD.MM.YYYY HH:MM')}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleDeleteVotedImages(breed.id)}
                >
                  Delete
                </Button>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
};
