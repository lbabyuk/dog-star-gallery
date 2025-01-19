import { useNavigate } from 'react-router-dom';
import { List, Box, Container } from '@mui/material';
import {
  DefaultInfo,
  LoadingStatus,
  TitleComponent
} from '../../components/molecules';
import { useGetVotesQuery } from '../../services/votes';
import { HistoryList } from './components/HistoryList';
import { HOME } from '../../constants/routes';
import { TITLES_DATA } from '../../constants/titlesData';
import { MotionTransitionWrapper } from '../../components/atoms';

export const History = () => {
  const { data: breeds, isLoading } = useGetVotesQuery({ sub_id: 'olena' });
  const navigate = useNavigate();
  if (isLoading) return <LoadingStatus />;

  if (breeds?.length === 0) {
    return (
      <DefaultInfo
        title="No voted breed yet"
        btnText="Vote Breed Here"
        onClick={() => navigate(HOME.VOTES)}
        icon
      />
    );
  }

  return (
    <Container>
      <MotionTransitionWrapper>
        <TitleComponent title={TITLES_DATA.historyPageTitle} />
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
      </MotionTransitionWrapper>
    </Container>
  );
};
