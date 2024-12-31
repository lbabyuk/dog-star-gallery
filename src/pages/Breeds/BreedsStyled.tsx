import { Box, styled, Button } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(4, 2),
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
}));

export const StyledButton = styled(Button)(({ theme: { palette } }) => ({
  '&:focus': {
    outline: 'none'
  },
  '&:focus svg': {
    outline: 'none',
    fill: palette.warning.main
  },
  '&:focus-visible svg': {
    outline: 'none',
    fill: palette.warning.main
  }
}));
