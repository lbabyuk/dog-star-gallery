import { useNavigate } from 'react-router-dom';
// import { StyledContainer } from './ErrorStyled';
import { Container, Stack } from '@mui/material';
import errorImage from '../../assets/404.png';
import { MotionTransitionWrapper, CustomButton } from '../../components/atoms';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const handelRefreshPage = () => navigate('/');

  return (
    <Container>
      <MotionTransitionWrapper>
        <Stack
          sx={{
            margin: '0 auto',
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img src={errorImage} alt="error" />
          <CustomButton variant="containedPrimary" onClick={handelRefreshPage}>
            Refresh the page
          </CustomButton>
        </Stack>
      </MotionTransitionWrapper>
    </Container>
  );
};
