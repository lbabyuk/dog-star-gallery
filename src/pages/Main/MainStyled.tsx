import { Box, ImageListItem, styled, Button } from '@mui/material';

export const StyledBox = styled(Box)(() => ({
  margin: 40,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}));

export const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
  boxShadow: `2px 4px 6px #000`,
  margin: theme.spacing(2),
  borderRadius: '20px'
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  margin: theme.spacing(2),
  '&:focus': {
    outline: 'none'
  }
}));

export const StyledImage = styled('img')(({ theme }) => ({
  borderRadius: '20px',
  width: '100%',
  height: '100%',
  display: 'block',
  objectFit: 'cover',
  '&:hover': {
    boxShadow: `6px 6px 0 0 ${theme.palette.action.hover}`
  }
}));
