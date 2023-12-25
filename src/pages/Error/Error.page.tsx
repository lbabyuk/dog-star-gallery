import { FC } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledContainer } from './ErrorStyled';
import errorImage from '../../assets/404.png';

export const ErrorPage: FC = () => {
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
