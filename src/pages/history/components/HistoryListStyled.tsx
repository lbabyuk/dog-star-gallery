import { Typography, styled } from '@mui/material';

export const TypographyElement = styled(Typography)(({ theme }) => ({
  padding: '4px 0',
  margin: '8px',
  width: '200px',
  fontSize: '1.45rem',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.8rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem'
  }
}));
