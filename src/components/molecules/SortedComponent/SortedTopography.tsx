import { Typography, styled } from '@mui/material';

const SortedTypography = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.grey[500],
  fontSize: 20,
  margin: 20
}));

export default SortedTypography;
