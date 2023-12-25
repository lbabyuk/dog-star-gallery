import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(4, 2),
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: theme.spacing(0, 2)
}));
