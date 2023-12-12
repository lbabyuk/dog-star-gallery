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
      primary: '#5F556D'
      // secondary: "#FFFFFF",
    },
    grey: {
      100: '#FBFAFC',
      300: '#E6E6E6',
      500: '#ADA7B8'
    },
    action: {
      hover: '#A239F4',
      selected: '#B568F2'
    },
    warning: {
      main: '#FFCF32'
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
