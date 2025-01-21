import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { theme as defaultTheme } from './theme';

export const DogAppThemeProvider: FC<
  PropsWithChildren<{
    theme?: Theme;
  }>
> = ({ children, theme = defaultTheme }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
