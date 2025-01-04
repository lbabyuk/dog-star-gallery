import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { HOME } from '../../../../../constants/routes';
import {
  HeartIcon,
  BorderHeartIcon,
  CrossContainedIcon,
  CrossOutlinedIcon
} from '../../../../atoms/Icons';

export const HeaderIconLinks = () => {
  return (
    <Box
      sx={{
        flexGrow: 0,
        width: { md: '160px' },
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: { xs: '5px', sm: '10px', md: '20px' }
      }}
    >
      <NavLink to={HOME.FAVORITES} end>
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
      <NavLink to={HOME.RELATED} end>
        {({ isActive }) =>
          isActive ? (
            <CrossContainedIcon
              sx={{
                display: 'flex',
                width: { xs: '35px', md: '45px' },
                height: { xs: '35px', md: '45px' },
                p: 0
              }}
            />
          ) : (
            <CrossOutlinedIcon
              sx={{
                display: 'flex',
                width: { xs: '35px', md: '40px' },
                height: { xs: '35px', md: '40px' },
                p: 0
              }}
            />
          )
        }
      </NavLink>
    </Box>
  );
};
