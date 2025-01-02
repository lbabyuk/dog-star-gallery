import { FC } from 'react';
import { Button, ButtonGroup, Stack, styled, Typography } from '@mui/material';
import { SortDownIcon, SortUpIcon, SortRandomIcon } from '../../atoms/Icons';
import { SORTED_ICONS_STYLE } from '../../../constants/SortedIconsStyleData';

type Ordered = {
  ordered: (arg: string) => void;
};

const SortedTypography = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.grey[900],
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

export const SortedComponent: FC<Ordered> = ({ ordered }) => (
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
      <StyledButton onClick={() => ordered('RENDOM')}>
        <SortRandomIcon sx={SORTED_ICONS_STYLE} />
      </StyledButton>
      <StyledButton onClick={() => ordered('DESC')}>
        <SortDownIcon sx={SORTED_ICONS_STYLE} />
      </StyledButton>
      <StyledButton onClick={() => ordered('ASC')}>
        <SortUpIcon sx={SORTED_ICONS_STYLE} />
      </StyledButton>
    </ButtonGroup>
  </Stack>
);
