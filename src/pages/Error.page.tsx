import { FC } from 'react';
import { Button, Container, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import errorImage from '../assets/404 .png';

export const StyledContainer = styled(Container)(() => ({
  margin: '0 auto',
  height: '90vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

const ErrorPage: FC = () => {
  const navigate = useNavigate();
  const handelRefreshPage = () => navigate('/main');

  return (
    <StyledContainer maxWidth="md">
      <img src={errorImage} alt="error" />
      <Button variant="contained" onClick={handelRefreshPage}>
        Refresh the page
      </Button>
    </StyledContainer>
  );
};

export default ErrorPage;
