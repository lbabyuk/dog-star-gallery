import { Typography, styled } from '@mui/material';

const SortedTypography = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.grey[900],
  fontSize: 20
}));

export default SortedTypography;
