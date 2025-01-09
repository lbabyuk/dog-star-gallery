import { Button, ButtonGroup, Stack, styled, Typography } from '@mui/material';
import { SortDownIcon, SortUpIcon, SortRandomIcon } from '../../atoms/Icons';

type Ordered = {
  ordered: (arg: string) => void;
};

export const ORDERED_TYPE_DATA = [
  { id: 1, type: 'RANDOM', icon: <SortRandomIcon /> },
  { id: 2, type: 'ASC', icon: <SortDownIcon /> },
  { id: 3, type: 'DESC', icon: <SortUpIcon /> }
];

const SortedTypography = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.text.primary,
  fontSize: 20
}));
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

export const SortedComponent = ({ ordered }: Ordered) => {
  return (
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
        <SortedTypography>Sort by: </SortedTypography>
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
};
