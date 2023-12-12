import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import Container from '@mui/material/Container';

import { Link } from 'react-router-dom';
import HeaderLinks from '../HeaderLinks';
import CrossIcon from '../../atoms/Icons/CrossIcon';
import LogoIcon from '../../atoms/Icons/LogoIcon';
import YellowBorderHeartIcon from '../../atoms/Icons/YellowBorderHeartIcon';

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

const HeaderComponent = () => (
  <StyledAppBar position="sticky">
    <Container maxWidth="md">
      <StyledToolbar disableGutters>
        <StyledTypography
          variant="h6"
          sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 30 }}
        >
          Dog
        </StyledTypography>
        <LogoIcon />
        <StyledTypography
          variant="h6"
          sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 20 }}
        >
          Star Gallery
        </StyledTypography>

        <HeaderLinks />

        <Box sx={{ flexGrow: 0 }}>
          <Link to="/favorites">
            <IconButton sx={{ m: 1 }}>
              <YellowBorderHeartIcon />
            </IconButton>
          </Link>
          <IconButton sx={{ m: 1 }}>
            <CrossIcon />
          </IconButton>
        </Box>
      </StyledToolbar>
    </Container>
  </StyledAppBar>
);
export default HeaderComponent;
