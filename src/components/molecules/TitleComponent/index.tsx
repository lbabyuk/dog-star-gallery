import { Stack, Typography } from '@mui/material';
import { PowIcon } from '../../atoms/Icons';

type TitleComponentProps = {
  title: string;
};
export const TitleComponent = ({ title }: TitleComponentProps) => (
  <Stack
    flexDirection="row"
    alignItems="center"
    justifyContent="center"
    gap={1}
    mb="20px"
  >
    <Typography variant="h2">{title}</Typography>
    <PowIcon
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px',
        height: '60px'
      }}
    />
  </Stack>
);
