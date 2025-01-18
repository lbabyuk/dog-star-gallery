import { Typography, Box, Container, Toolbar } from '@mui/material';

export const Footer = () => (
  <Box
    component="footer"
    sx={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: theme => theme.palette.grey[100]
    }}
  >
    <Container>
      <Toolbar disableGutters>
        <Typography
          variant="semiBold1"
          sx={{
            m: 1,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            color: theme => theme.palette.text.primary,
            margin: '0 auto'
          }}
        >
          {`© ${new Date().getFullYear()} Made by Olena Babyuk`}
        </Typography>
      </Toolbar>
    </Container>
  </Box>
);
