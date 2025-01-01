import { NavLink } from 'react-router-dom';
import { Toolbar, Container, styled, Box, AppBar } from '@mui/material';

import BorderHeartIcon from '../../atoms/Icons/BorderHeartIcon';
import HeaderLinks from '../HeaderLinks';

import { HeaderPopupMenu } from '../HeaderPopupMenu';
import HeartIcon from '../../atoms/Icons/HeartIcon';
import BigLogoIcon from '../../atoms/Icons/BigLogoIcon';

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

const HeaderComponent = () => (
  <StyledHeader position="sticky">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <NavLink to="/">
          <BigLogoIcon
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              width: { xs: '100px', md: '160px' },
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
        <Box
          sx={{
            flexGrow: 0,
            width: { md: '160px' },
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
        >
          <NavLink to="/favorites" end>
            {({ isActive }) =>
              isActive ? (
                <HeartIcon
                  sx={{
                    display: 'flex',
                    width: { xs: '35px', md: '40px' },
                    height: { xs: '35px', md: '40px' },
                    p: 0
                  }}
                />
              ) : (
                <BorderHeartIcon
                  sx={{
                    display: 'flex',
                    color: theme => theme.palette.warning.main,
                    width: { xs: '35px', md: '40px' },
                    height: { xs: '35px', md: '40px' },
                    p: 0
                  }}
                />
              )
            }
          </NavLink>
        </Box>
      </Toolbar>
    </Container>
  </StyledHeader>
);
export default HeaderComponent;
