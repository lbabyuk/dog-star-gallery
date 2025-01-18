import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StyledContainer } from './ErrorStyled';
import errorImage from '../../assets/404.png';
import { CustomButton } from '../../components/atoms/Button';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const handelRefreshPage = () => navigate('/');

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 2 }}
    >
      <StyledContainer maxWidth="md">
        <img src={errorImage} alt="error" />
        <CustomButton variant="containedPrimary" onClick={handelRefreshPage}>
          Refresh the page
        </CustomButton>
      </StyledContainer>
    </motion.div>
  );
};
