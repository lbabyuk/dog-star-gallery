import { NavLink } from 'react-router-dom';
import {
  Toolbar,
  Container,
  styled,
  IconButton,
  Box,
  AppBar
} from '@mui/material';

import BorderHeartIcon from '../../atoms/Icons/BorderHeartIcon';
import LogoIcon from '../../atoms/Icons/LogoIcon';
import HeaderLinks from '../HeaderLinks';

import { HeaderPopupMenu } from '../HeaderPopupMenu';
import HeartIcon from '../../atoms/Icons/HeartIcon';

export const StyledHeader = styled(AppBar)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.grey[500],
  boxShadow: `3px 3px 0 0 ${theme.palette.grey[900]}`,
  borderRadius: '0 0 32px 32px',
  height: '82px'
}));

const HeaderComponent = () => (
  <StyledHeader position="sticky">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <NavLink to="/">
          <LogoIcon
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              width: { xs: '35px', md: '40px' },
              height: { xs: '35px', md: '40px' }
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
            <LogoIcon
              sx={{
                display: { xs: 'flex', md: 'none' },
                mr: 1
              }}
            />
          </NavLink>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <HeaderLinks />
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <NavLink to="/favorites" end>
            {({ isActive }) => (
              <IconButton sx={{ p: 0 }}>
                {isActive ? (
                  <HeartIcon
                    sx={{
                      width: { xs: '35px', md: '40px' },
                      height: { xs: '35px', md: '40px' }
                    }}
                  />
                ) : (
                  <BorderHeartIcon
                    sx={{
                      color: theme => theme.palette.warning.main,
                      width: { xs: '35px', md: '40px' },
                      height: { xs: '35px', md: '40px' }
                    }}
                  />
                )}
              </IconButton>
            )}
          </NavLink>
        </Box>
      </Toolbar>
    </Container>
  </StyledHeader>
);
export default HeaderComponent;
