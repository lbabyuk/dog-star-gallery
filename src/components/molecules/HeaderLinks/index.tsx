import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

const headerMenu = [
  {
    title: 'Main',
    path: '/main'
  },
  {
    title: 'Breeds',
    path: '/breeds'
  },
  {
    title: 'Votes',
    path: '/votes'
  },
  {
    title: 'History',
    path: '/history'
  },
  {
    title: 'Your Uploads',
    path: '/yourUploads'
  }
];

const HeaderLinks = () => (
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
    {headerMenu.map(item => (
      <NavLink
        key={item.title}
        to={item.path}
        style={{
          textDecoration: 'none',
          color: '#5F556D'
        }}
        end
      >
        {({ isActive }) => (
          <Box
            style={{
              display: 'inline-block',
              margin: 5,
              color: isActive ? '#921FED' : 'inherit',
              fontSize: 20
            }}
          >
            {item.title}
          </Box>
        )}
      </NavLink>
    ))}
  </Box>
);

export default HeaderLinks;
