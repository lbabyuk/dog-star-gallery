import { Link } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import HeaderLinks from '../HeaderLinks';
import CrossIcon from '../../atoms/Icons/CrossIcon';
import LogoIcon from '../../atoms/Icons/LogoIcon';
import BorderHeartIcon from '../../atoms/Icons/BorderHeartIcon';
import {
  StyledAppBar,
  StyledToolbar,
  StyledTypography,
  StyledButton
} from './HeaderStyled';

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
            <StyledButton>
              <BorderHeartIcon sx={{ color: '#FFCF32' }} />
            </StyledButton>
          </Link>
          <Link to="/upload">
            <StyledButton>
              <CrossIcon />
            </StyledButton>
          </Link>
        </Box>
      </StyledToolbar>
    </Container>
  </StyledAppBar>
);
export default HeaderComponent;
