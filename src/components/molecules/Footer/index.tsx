import { Typography, Box, Container, Toolbar, styled } from '@mui/material';

export const StyledFooter = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: theme.palette.grey[100]
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: theme.palette.text.primary,
  margin: '0 auto'
}));

export const Footer = () => (
  <StyledFooter>
    <Container>
      <Toolbar disableGutters>
        <StyledTypography variant="semiBold1">
          {`© ${new Date().getFullYear()} Made by Olena Babyuk`}
        </StyledTypography>
      </Toolbar>
    </Container>
  </StyledFooter>
);
