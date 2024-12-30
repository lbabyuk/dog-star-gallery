/* eslint-disable no-nested-ternary */
import {
  List,
  Box,
  Container,
  ListItem,
  Typography,
  Button,
  styled
} from '@mui/material';
import moment from 'moment';
import { Link } from 'react-router-dom';
import LoadingStatus from '../../components/atoms/LoadingStatus';
import { useDeleteVotesMutation, useGetVotesQuery } from '../../services/votes';
import LikeIcon from '../../components/atoms/Icons/LikeIcon';
import DislikeIcon from '../../components/atoms/Icons/DislikeIcon/index';
import BorderHeartIcon from '../../components/atoms/Icons/BorderHeartIcon';

const TypographyElement = styled(Typography)(({ theme }) => ({
  padding: '4px 0',
  margin: '8px',
  width: '200px',
  fontSize: '1.45rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.8rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem'
  }
}));

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
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '50px 0'
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
          <List
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {(breeds || []).map(breed => (
              <ListItem
                key={breed.id}
                sx={{
                  width: '100%',
                  justifyContent: 'space-evenly',
                  alignItems: 'center'
                }}
              >
                {breed.value === 0 ? (
                  <>
                    <BorderHeartIcon
                      sx={{
                        color: theme => theme.palette.warning.main,
                        width: '35px',
                        height: '35px'
                      }}
                    />
                    <TypographyElement>you like this photo</TypographyElement>
                  </>
                ) : breed.value === 1 ? (
                  <>
                    <LikeIcon />
                    <TypographyElement>you like this photo</TypographyElement>
                  </>
                ) : (
                  <>
                    <DislikeIcon />
                    <TypographyElement>
                      you dislike this photo
                    </TypographyElement>
                  </>
                )}

                <img
                  src={breed.image.url}
                  alt={breed.image_id}
                  style={{
                    borderRadius: '10%',
                    width: '50px',
                    height: '50px',
                    objectFit: 'cover',
                    aspectRatio: 1
                  }}
                />
                <TypographyElement width="200px">
                  {/* {moment(breed.created_at).format('DD.MM.YYYY HH:MM')} */}
                  {/* {moment(breed.created_at).calendar()} */}

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
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
};
