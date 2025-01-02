import { styled, Button, Box } from '@mui/material';

export const StyledDiv = styled('div')(() => ({
  width: 540,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  margin: theme.spacing(3),
  '&:focus': {
    outline: 'none'
  }
}));

export const StyledBox = styled(Box)(() => ({
  paddingTop: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));
