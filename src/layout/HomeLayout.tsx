import { ReactNode } from 'react';
import { Stack } from '@mui/material';

import styled from '@emotion/styled';
import { Header } from '../components/molecules';

type HomeLayoutProps = {
  children: ReactNode;
};

const StyledMain = styled('main')(() => ({
  position: 'relative',
  flex: '1 0 auto',
  backgroundColor: '#fff',
  paddingTop: '68px',
  paddingBottom: '88px'
}));

export const HomeLayout = ({ children }: HomeLayoutProps) => (
  <Stack sx={{ minHeight: '100dvh' }}>
    <Header />
    <StyledMain>{children}</StyledMain>
  </Stack>
);
