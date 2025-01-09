import { useNavigate } from 'react-router-dom';
import { List, Box, Container, Typography } from '@mui/material';
import { LoadingStatus } from '../../components/molecules/LoadingStatus';
import { useGetVotesQuery } from '../../services/votes';
import { HistoryList } from './components/HistoryList';
import { CustomButton } from '../../components/atoms/Button';
import { YellowArrowIcon } from '../../components/atoms/Icons';
import { HOME } from '../../constants/routes';

export const History = () => {
  const { data: breeds, isLoading } = useGetVotesQuery({ sub_id: 'olena' });
  const navigate = useNavigate();
  if (isLoading) return <LoadingStatus />;

  if (breeds?.length === 0) {
    return (
      <Container>
        <Box
          sx={{ textAlign: 'center', mt: 4, height: 'auto', minHeight: '70vh' }}
        >
          <Typography variant="h4" color="primary">
            No voted breed yet
          </Typography>
          <CustomButton
            onClick={() => navigate(HOME.VOTES)}
            variant="textPrimary"
            endIcon={<YellowArrowIcon />}
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
