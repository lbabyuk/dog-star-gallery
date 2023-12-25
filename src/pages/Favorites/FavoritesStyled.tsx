import { styled, Button, Paper, Box } from '@mui/material';
import image from '../../assets/cat-footprint.png';

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

export const StyledPaper = styled(Paper)(() => ({
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: '20px',
  padding: '50px'
}));

export const StyledBox = styled(Box)(() => ({
  paddingTop: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));
