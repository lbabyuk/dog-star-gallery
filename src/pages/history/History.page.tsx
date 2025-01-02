import { Link } from 'react-router-dom';
import { List, Box, Container, Typography } from '@mui/material';
import { LoadingStatus } from '../../components/molecules/LoadingStatus';
import { useGetVotesQuery } from '../../services/votes';
import { HistoryList } from './components/HistoryList';

export const History = () => {
  const { data: breeds, isLoading } = useGetVotesQuery({ sub_id: 'olena' });

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
              <HistoryList breed={breed} key={breed.id} />
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
};
