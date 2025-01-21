import { Components, Theme } from '@mui/material';

export const MuiButtonConfig: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 10,
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: '16px',
      [theme.breakpoints.up('sm')]: {
        fontSize: '18px'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '20px'
      },
      lineHeight: 1.6,
      padding: theme.spacing(1, 2),
      '&:hover, &:active': {
        boxShadow: 'none'
      },
      '&:focused': { color: theme.palette.secondary.main },
      '&:disabled': {
        backgroundColor: theme.palette.grey[300],
        color: theme.palette.secondary.main
      }
    }),
    containedPrimary: ({ theme: { palette } }) => ({
      padding: '8px 16px',
      borderRadius: '10px',
      color: palette.secondary.main,
      backgroundColor: palette.primary.main,
      fontWeight: 400,
      justifyContent: 'space-evenly',
      '& .MuiButton-startIcon>*:nth-of-type(1)': {
        fontSize: '30px'
      },
      '&:hover, &:active': {
        boxShadow: `2px 2px 0 0 ${palette.grey[900]}`,
        color: palette.grey[600]
      },
      '&:hover': {
        backgroundColor: palette.action.hover
      },
      '&:active': {
        backgroundColor: palette.action.selected
      }
    }),
    textPrimary: ({ theme: { palette } }) => ({
      padding: '6px 16px',
      justifyContent: 'space-evenly',
      color: palette.primary.main,
      '&:hover, &:active': {
        boxShadow: `2px 2px 0 0 ${palette.grey[900]}`,
        color: palette.grey[600],
        borderRadius: '10px'
      },
      '&:hover': {
        backgroundColor: palette.action.hover
      },
      '&:active': {
        backgroundColor: palette.action.selected
      }
    }),
    textSecondary: ({ theme: { palette } }) => ({
      padding: '5px',
      fontWeight: 'bold',
      color: palette.primary.main,
      '&:hover': {
        color: palette.action.hover,
        backgroundColor: 'transparent'
      },
      '&:focus, &:active': {
        outline: 'none',
        color: palette.action.selected
      }
    }),
    outlinedPrimary: ({ theme: { palette } }) => ({
      padding: '8px 16px',
      borderRadius: '10px',
      color: palette.primary.main,
      border: `1px solid ${palette.grey[800]}`,
      backgroundColor: palette.background.paper,
      boxShadow: `2px 2px 0 0 ${palette.grey[900]}`,
      fontWeight: 400,
      '&:hover': {
        backgroundColor: palette.action.hover,
        color: palette.grey[600]
      },
      '&:active': {
        backgroundColor: palette.action.selected,
        color: palette.grey[600]
      }
    })
  },
  defaultProps: {
    disableRipple: true
  }
};
