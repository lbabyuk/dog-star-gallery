import { ReactNode } from 'react';
import { Stack, styled } from '@mui/material';
import { Footer, Header, ScrollToTopButton } from '../components/molecules';

type HomeLayoutProps = {
  children: ReactNode;
};

const StyledMain = styled('main')(({ theme }) => ({
  position: 'relative',
  flex: '1 0 auto',
  backgroundColor: theme.palette.grey[100],
  paddingTop: '20px',
  paddingBottom: '100px'
}));

export const HomeLayout = ({ children }: HomeLayoutProps) => (
  <Stack sx={{ minHeight: '100dvh' }}>
    <Header />
    <StyledMain>{children}</StyledMain>
    <ScrollToTopButton />
    <Footer />
  </Stack>
);
