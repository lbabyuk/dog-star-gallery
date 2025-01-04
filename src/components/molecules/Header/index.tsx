import { NavLink } from 'react-router-dom';
import { Toolbar, Container, styled, Box, AppBar } from '@mui/material';
import { HeaderLinks } from './components/HeaderLinks';
import { HeaderPopupMenu } from '../HeaderPopupMenu';
import { BigLogoIcon } from '../../atoms/Icons';
import { HeaderIconLinks } from './components/HeaderIconLinks';

export const StyledHeader = styled(AppBar)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.grey[500],
  boxShadow: `3px 3px 0 0 ${theme.palette.grey[900]}`,
  borderRadius: '0 0 20px 20px',
  height: '82px'
}));

export const Header = () => (
  <StyledHeader position="sticky">
    <Container>
      <Toolbar disableGutters>
        <NavLink to="/">
          <BigLogoIcon
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              width: { xs: '100px', md: '150px' },
              height: { xs: '40px', md: '40px' }
            }}
          />
        </NavLink>
        <Box
          sx={{
            flexGrow: { xs: 1, md: 0 },
            display: { xs: 'flex', md: 'none' }
          }}
        >
          <HeaderPopupMenu />
        </Box>
        <Box
          sx={{
            justifyContent: 'center',
            flexGrow: { xs: 1, md: 0 }
          }}
        >
          <NavLink to="/">
            <BigLogoIcon
              sx={{
                display: { xs: 'flex', md: 'none' },
                mr: 1,
                width: { xs: '150px', md: '130px' },
                height: { xs: '40px', md: '40px' }
              }}
            />
          </NavLink>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <HeaderLinks />
        </Box>
        <HeaderIconLinks />
      </Toolbar>
    </Container>
  </StyledHeader>
);
