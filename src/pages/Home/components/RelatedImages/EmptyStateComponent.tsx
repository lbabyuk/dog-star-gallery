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
        <Typography variant="h4" color="primary">
          No related images found :( Try again
        </Typography>
        <CustomButton
          onClick={() => navigate('/')}
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
          Back to Gallery
        </CustomButton>
      </Box>
    </Container>
  );
};
