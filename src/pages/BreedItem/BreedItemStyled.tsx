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

export const ImageElement = styled('img')(({ theme }) => ({
  padding: theme.spacing(2, 1),
  margin: theme.spacing(2, 0),
  width: '100%'
}));
