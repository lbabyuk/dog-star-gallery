import styled from '@emotion/styled';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)({
  backgroundColor: '#ADA7B8',
  boxShadow: '5px 5px 8px #212121',
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30
});

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 1,
  gap: 5
});

export const StyledTypography = styled(Typography)({
  color: '#5F556D',
  fontWeight: 700,
  fontFamily: 'Goldmen'
});

export const StyledButton = styled(IconButton)(() => ({
  margin: '8px',
  '&:focus': {
    outline: 'none'
  }
}));
