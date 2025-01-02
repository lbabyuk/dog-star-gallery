import { CircularProgress, Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh'
}));

export const LoadingStatus = () => (
  <StyledBox>
    <CircularProgress color="inherit" />
  </StyledBox>
);
