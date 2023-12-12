import { Components, Theme, alpha } from '@mui/material';

export const MuiButtonConfig: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 20,
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 20,
      lineHeight: 1.6,
      padding: theme.spacing(1, 2),
      '&:hover, &:active': {
        boxShadow: 'none'
      }
    }),
    containedPrimary: ({ theme: { palette } }) => ({
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,
      '&:hover': {
        backgroundColor: palette.action.hover
      },
      '&:active': {
        backgroundColor: palette.action.selected,
        boxShadow: `inset 0px -4px 6px ${alpha(
          palette.common.white,
          0.25
        )}, inset 0px 4px 6px ${alpha(palette.common.black, 0.25)}`
      }
    }),
    containedSecondary: ({ theme: { palette } }) => ({
      backgroundColor: palette.secondary.main,
      color: palette.secondary.contrastText,
      '&:hover': {
        backgroundColor: palette.grey[100]
      },
      '&:active': {
        backgroundColor: palette.grey[300]
      }
    }),
    outlinedPrimary: ({ theme: { palette } }) => ({
      color: palette.primary.contrastText
    })
  },
  defaultProps: {
    disableRipple: true
  }
};
