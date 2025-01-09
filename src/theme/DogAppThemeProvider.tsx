import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { theme } from './theme';

export const DogAppThemeProvider: FC<
  PropsWithChildren<{
    theme?: Theme;
  }>
> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
