import { Box, ImageListItem, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
  boxShadow: `2px 4px 6px #000`,
  margin: theme.spacing(2),
  borderRadius: '20px'
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
