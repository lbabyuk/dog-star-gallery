import { useNavigate } from 'react-router-dom';
import { StyledContainer } from './ErrorStyled';
import errorImage from '../../assets/404.png';
import { MotionTransitionWrapper, CustomButton } from '../../components/atoms';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const handelRefreshPage = () => navigate('/');

  return (
    <StyledContainer maxWidth="md">
      <MotionTransitionWrapper>
        <img src={errorImage} alt="error" />
        <CustomButton variant="containedPrimary" onClick={handelRefreshPage}>
          Refresh the page
        </CustomButton>
      </MotionTransitionWrapper>
    </StyledContainer>
  );
};
