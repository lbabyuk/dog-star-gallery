import { Box, Skeleton } from '@mui/material';

export const PageSkeleton = () => {
  return (
    <Box
      sx={{
        height: '75vh',
        width: '100%',
        overflow: 'hidden',
        margin: '20px',
        borderRadius: {
          xs: '12px',
          md: '16px'
        }
      }}
    >
      <Skeleton
        width="100%"
        height="100%"
        variant="rectangular"
        animation="wave"
        sx={{ backgroundColor: 'grey.200' }}
      />
    </Box>
  );
};
