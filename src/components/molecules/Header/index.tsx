import { NavLink } from 'react-router-dom';
import { Toolbar, Container, styled, IconButton, Stack } from '@mui/material';
import HeaderLinks from '../HeaderLinks';
import LogoIcon from '../../atoms/Icons/LogoIcon';
import BorderHeartIcon from '../../atoms/Icons/BorderHeartIcon';

export const StyledHeader = styled('header')(({ theme }) => ({
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
  <StyledHeader>
    <Container maxWidth="lg">
      <Toolbar disableGutters>
        <NavLink to="/">
          <LogoIcon />
        </NavLink>
        <HeaderLinks />

        <Stack flexDirection="row" sx={{ flexGrow: 0, gap: '30px' }}>
          <IconButton
            sx={{
              padding: 0
            }}
            end
            component={NavLink}
            to="/favorites"
          >
            <BorderHeartIcon
              sx={{ color: theme => theme.palette.warning.main }}
            />
          </IconButton>
        </Stack>
      </Toolbar>
    </Container>
  </StyledHeader>
);
export default HeaderComponent;
