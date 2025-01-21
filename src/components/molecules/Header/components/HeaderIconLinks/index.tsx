import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { HOME } from '../../../../../constants/routes';
import {
  HeartIcon,
  BorderHeartIcon,
  CrossContainedIcon,
  CrossOutlinedIcon
} from '../../../../atoms';
import { ICON_STYLE } from '../../../../../constants/headerMenu';

export const HeaderIconLinks = () => (
  <Box
    sx={{
      flexGrow: 0,
      width: { md: '160px' },
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: { xs: '5px', sm: '10px', md: '30px' }
    }}
  >
    <NavLink to={HOME.FAVORITES} end>
      {({ isActive }) =>
        isActive ? (
          <HeartIcon
            sx={{
              ...ICON_STYLE
            }}
          />
        ) : (
          <BorderHeartIcon
            sx={{
              ...ICON_STYLE,
              color: theme => theme.palette.warning.main
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
              ...ICON_STYLE
            }}
          />
        ) : (
          <CrossOutlinedIcon
            sx={{
              ...ICON_STYLE
            }}
          />
        )
      }
    </NavLink>
    <NavLink to={HOME.UPLOAD} end>
      {({ isActive }) =>
        isActive ? (
          <CloudUploadIcon
            sx={{
              ...ICON_STYLE,
              color: theme => theme.palette.warning.main,
              filter: theme =>
                `drop-shadow(4px 2px 0 ${theme.palette.grey[900]})`
            }}
          />
        ) : (
          <CloudUploadOutlinedIcon
            sx={{
              ...ICON_STYLE,
              color: theme => theme.palette.warning.main
            }}
          />
        )
      }
    </NavLink>
  </Box>
);
