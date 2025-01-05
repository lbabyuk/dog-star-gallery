import { ReactNode } from 'react';
import { Stack, styled } from '@mui/material';

import { Header } from '../components/molecules';

type HomeLayoutProps = {
  children: ReactNode;
};

const StyledMain = styled('main')(() => ({
  position: 'relative',
  flex: '1 0 auto',
  backgroundColor: '#FBFAFC',
  paddingTop: '20px',
  paddingBottom: '52px'
}));

export const HomeLayout = ({ children }: HomeLayoutProps) => (
  <Stack sx={{ minHeight: '100dvh' }}>
    <Header />
    <StyledMain>{children} </StyledMain>
  </Stack>
);
