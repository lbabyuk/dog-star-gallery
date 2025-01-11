import { createTheme } from '@mui/material/styles';
import { MuiButtonConfig } from './customComponents/button.config';
import { overrideTypography } from './customComponents/overrideTypography';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    containedPrimary: true;
    textPrimary: true;
    textSecondary: true;
    outlinedPrimary: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
    subtitle4: true;
    semiBold1: true;
    semiBold2: true;
    underlined1: true;
    underlined2: true;
    caption1: true;
    caption2: true;
    span: true;
  }
}

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#921FED',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#921FED'
    },
    text: {
      primary: '#5F556D',
      secondary: '#FFFFFF'
    },
    grey: {
      100: '#FBFAFC',
      300: '#E6E6E6',
      500: '#ADA7B8',
      600: '#FCFAFA',
      700: '#B2BAC2',
      800: '#ccc',
      900: '#212121'
    },
    action: {
      hover: '#A239F4',
      selected: '#B568F2'
    },
    warning: {
      main: '#FFCF32',
      light: '#F7E4A8'
    },
    background: {
      paper: '#FBFAFC'
    }
  },
  typography: {
    fontSize: 20,
    fontFamily: "'Dosis', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  }
});

export const theme = createTheme({
  ...mainTheme,
  components: {
    ...mainTheme.components,
    MuiButton: MuiButtonConfig,
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle3: 'h6',
          subtitle4: 'h6',
          semiBold1: 'p',
          semiBold2: 'p',
          underlined1: 'p',
          underlined2: 'p',
          caption1: 'p',
          caption2: 'p',
          span: 'span'
        }
      }
    }
  },
  typography: {
    ...mainTheme.typography,
    fontFamily: "'Dosis', sans-serif",
    ...overrideTypography(mainTheme)
  }
});
