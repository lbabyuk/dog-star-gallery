import { Container, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { YellowArrowIcon } from '../../../../components/atoms/Icons';
import { CustomButton } from '../../../../components/atoms/Button';

export const EmptyStateComponent = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box
        sx={{ textAlign: 'center', mt: 4, height: 'auto', minHeight: '70vh' }}
      >
        <Typography variant="h2" m={4} p={4}>
          No related images found 🙁 Try again
        </Typography>
        <CustomButton
          onClick={() => navigate('/')}
          variant="textPrimary"
          endIcon={<YellowArrowIcon />}
        >
          Back to Gallery
        </CustomButton>
      </Box>
    </Container>
  );
};
