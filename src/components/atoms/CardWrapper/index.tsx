import { Box } from '@mui/material';
import { ReactNode } from 'react';

type CardWrapperProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const CardWrapper = ({ children, onClick }: CardWrapperProps) => {
  return (
    <Box
      onClick={onClick}
      sx={theme => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: `1px solid ${theme.palette.grey[800]}`,
        padding: '16px',
        borderRadius: '8px',
        gap: '10px',
        boxShadow: `6px 6px 0 0  ${theme.palette.grey[900]}`,
        cursor: 'pointer',
        '&:hover': {
          boxShadow: `6px 6px 8px 0 ${theme.palette.action.hover}`
        }
      })}
    >
      {children}
    </Box>
  );
};
