import { styled, Typography } from '@mui/material';

export const TypographyElement = styled(Typography)(({ theme }) => ({
  padding: '8px 0',
  margin: '8px',
  fontSize: '1.65rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.45rem'
  },
  span: {
    fontSize: '1.65rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.45rem'
    }
  }
}));
