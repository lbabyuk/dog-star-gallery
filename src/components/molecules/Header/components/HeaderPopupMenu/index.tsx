import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton, MenuItem, Typography, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { headerMenu } from '../../../../../constants/headerMenu';

export const HeaderPopupMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <IconButton
        size="large"
        onClick={handleOpenNavMenu}
        sx={{
          color: theme => theme.palette.primary.main,
          border: 'none',
          '&:focused': { outline: 'none' },
          '&:active': { outline: 'none' }
        }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {headerMenu.map(page => (
          <MenuItem
            key={page.title}
            onClick={handleCloseNavMenu}
            sx={{
              '&:hover': {
                backgroundColor: 'transparent'
              }
            }}
          >
            <NavLink
              to={page.path}
              end
              style={{
                textDecoration: 'none'
              }}
            >
              {({ isActive }) => (
                <Typography
                  variant="subtitle3"
                  sx={{
                    color: theme =>
                      isActive
                        ? theme.palette.action.selected
                        : theme.palette.text.primary,

                    '&:hover': {
                      color: theme => theme.palette.action.hover
                    }
                  }}
                >
                  {page.title}
                </Typography>
              )}
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
