import CircularProgress, {
  CircularProgressProps
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface CircularProgressWithLabelProps extends CircularProgressProps {
  value: number;
}

export const CircularProgressWithLabel = ({
  value
}: CircularProgressWithLabelProps) => (
  <Box
    sx={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh'
    }}
  >
    <CircularProgress variant="determinate" value={value} size="4rem" />
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography
        variant="semiBold1"
        component="div"
        sx={{ color: theme => theme.palette.text.primary }}
      >{`${Math.round(value)}%`}</Typography>
    </Box>
  </Box>
);
