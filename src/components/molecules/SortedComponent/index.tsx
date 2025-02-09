import { Button, ButtonGroup, Stack, styled, Typography } from '@mui/material';
import { SortDownIcon, SortUpIcon, SortRandomIcon } from '../../atoms';

type Ordered = {
  ordered: (arg: string) => void;
};

const ORDERED_ICON_SIZE = { xs: '40px', lg: '48px' };

const ORDERED_TYPE_DATA = [
  {
    id: 1,
    type: 'RANDOM',
    icon: <SortRandomIcon sx={{ width: ORDERED_ICON_SIZE }} />
  },
  {
    id: 2,
    type: 'ASC',
    icon: <SortDownIcon sx={{ width: ORDERED_ICON_SIZE }} />
  },
  {
    id: 3,
    type: 'DESC',
    icon: <SortUpIcon sx={{ width: ORDERED_ICON_SIZE }} />
  }
];

const StyledButton = styled(Button)(({ theme: { palette } }) => ({
  '&:focus': {
    outline: 'none'
  },
  '&:focus svg': {
    outline: 'none',
    fill: palette.warning.main
  },
  '&:focus-visible svg': {
    outline: 'none',
    fill: palette.warning.main
  }
}));

export const SortedComponent = ({ ordered }: Ordered) => (
  <Stack
    alignItems="center"
    direction="row"
    justifyContent="center"
    spacing={1}
  >
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0.5}
    >
      <Typography variant="body1" color="text.primary">
        Sort by:{' '}
      </Typography>
    </Stack>
    <ButtonGroup variant="text">
      {ORDERED_TYPE_DATA.map(({ id, type, icon }) => (
        <StyledButton
          onClick={() => ordered(type)}
          key={id}
          variant="textSecondary"
        >
          {icon}
        </StyledButton>
      ))}
    </ButtonGroup>
  </Stack>
);
