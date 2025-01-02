import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, ListItemButton, Typography } from '@mui/material';
import { headerMenu } from '../../../constants/headerMenu';

export const HeaderLinks = () => (
  <Box
    sx={{
      flexGrow: 1,
      display: {
        md: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }}
  >
    <List
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '50px'
      }}
    >
      {headerMenu.map(item => (
        <ListItem key={item.title}>
          <NavLink
            to={item.path}
            end
            style={{
              textDecoration: 'none'
            }}
          >
            {({ isActive }) => (
              <ListItemButton
                sx={{
                  height: '33px',
                  padding: '4px 10px',
                  borderRadius: '6px',

                  color: theme =>
                    isActive
                      ? theme.palette.grey[600]
                      : theme.palette.text.primary,

                  boxShadow: theme =>
                    isActive
                      ? `2px 2px 0 0 ${theme.palette.grey[900]}`
                      : 'none',

                  backgroundColor: theme =>
                    isActive ? theme.palette.action.selected : 'none',
                  fontWeight: 400,

                  '&:hover': {
                    backgroundColor: theme => theme.palette.action.hover,
                    color: theme => theme.palette.grey[600]
                  }
                }}
              >
                <Typography variant="body1">{item.title}</Typography>
              </ListItemButton>
            )}
          </NavLink>
        </ListItem>
      ))}
    </List>
  </Box>
);
