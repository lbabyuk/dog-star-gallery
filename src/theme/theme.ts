import { createTheme } from '@mui/material/styles';
import { MuiButtonConfig } from './button.config';

// A custom theme for this app
const theme = createTheme({
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
  },
  components: {
    MuiButton: MuiButtonConfig,
    MuiTab: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});

export default theme;
