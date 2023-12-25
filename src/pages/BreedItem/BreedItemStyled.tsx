import { Paper, styled, Button, Typography, alpha } from '@mui/material';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export const TypographyElement = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0),
  margin: theme.spacing(0),
  fontSize: '1.65rem'
}));

export const ButtonElement = styled(Button)(({ theme }) => ({
  color: theme.palette.common.black,
  boxShadow: `inset 0px -4px 0px ${alpha(
    theme.palette.common.black,
    1
  )}, inset 0px 2px 16px ${alpha(theme.palette.common.black, 0.1)}`,
  borderColor: theme.palette.common.white,
  padding: theme.spacing(2)
}));

export const ImageElement = styled('img')(({ theme }) => ({
  padding: theme.spacing(2, 1),
  margin: theme.spacing(2, 0),
  width: '100%'
}));
