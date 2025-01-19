import { Stack, Typography } from '@mui/material';
import { ReactTyped } from 'react-typed';

type TitleComponentProps = {
  title: string;
};
export const TitleComponent = ({ title }: TitleComponentProps) => (
  <Stack m="20px 0">
    <Typography
      variant="h2"
      sx={{
        textAlign: 'center',
        textTransform: 'capitalize',
        textWrap: 'balance'
      }}
    >
      <ReactTyped strings={[`${title}`]} typeSpeed={60} showCursor={false} />
    </Typography>
  </Stack>
);
