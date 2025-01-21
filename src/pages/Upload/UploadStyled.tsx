import { Stack, styled } from '@mui/material';

export const VisuallyHiddenInput = styled('input')(
  ({ theme: { palette } }) => ({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
    '&:disabled + label': {
      backgroundColor: palette.grey[300],
      color: palette.secondary.main
    }
  })
);

export const StyledStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  width: '100%',
  maxWidth: '360px',
  height: '160px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  margin: '20px',
  padding: '5px',
  boxShadow: `3px 3px 0 0 ${theme.palette.grey[900]}`,
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '20px'
}));
