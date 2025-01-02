import { Box } from '@mui/material';
import { ReactNode } from 'react';

type GridWrapperProps = {
  children: ReactNode;
};

export const GridWrapper = ({ children }: GridWrapperProps) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr 1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr 1fr'
        },
        gap: '20px',
        padding: '20px'
      }}
    >
      {children}
    </Box>
  );
};
