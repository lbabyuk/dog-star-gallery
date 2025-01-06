import { useNavigate } from 'react-router-dom';
import { List, Box, Container, Typography } from '@mui/material';
import { LoadingStatus } from '../../components/molecules/LoadingStatus';
import { useGetVotesQuery } from '../../services/votes';
import { HistoryList } from './components/HistoryList';
import { CustomButton } from '../../components/atoms/Button';
import { YellowArrowIcon } from '../../components/atoms/Icons';

export const History = () => {
  const { data: breeds, isLoading } = useGetVotesQuery({ sub_id: 'olena' });
  const navigate = useNavigate();
  if (isLoading) return <LoadingStatus />;

  if (breeds?.length === 0) {
    return (
      <Container>
        <Box>
          <Typography variant="h4" align="center" m={4} p={4}>
            No votes breed yet
          </Typography>
          <CustomButton
            onClick={() => navigate('/votes')}
            variant="text"
            endIcon={<YellowArrowIcon />}
            sx={{
              '&:hover': {
                backgroundColor: theme => theme.palette.action.hover,
                boxShadow: theme => `2px 2px 0 0 ${theme.palette.grey[900]}`,
                color: theme => theme.palette.grey[600],
                border: theme => theme.palette.grey[600]
              }
            }}
          >
            Vote Breed Here
          </CustomButton>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '50px 0'
        }}
      >
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
      </Box>
    </Container>
  );
};
